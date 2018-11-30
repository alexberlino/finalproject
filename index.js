const express = require("express");
const nodemailer = require("nodemailer");
// var i18n = require("i18next");
// const i18nMiddleware = require("i18next-express-middleware");
const app = express();
// import { renderToString } from "react-dom/server";
const compression = require("compression");
const db = require("./sql/db.js");
const { checkPassword } = require("./Public/hash.js");
let secrets;
if (process.env.NODE_ENV == "production") {
    secrets = process.env;
    app.use(function(req, res, next) {
        if (req.secure) {
            // request was via https, so do no special handling
            next();
        } else {
            // request was via http, so redirect to https
            res.redirect("https://" + req.headers.host + req.url);
        }
    });
} else {
    secrets = require("./secrets.json");
}

app.get("/", function(request, response, next) {
    if (request.hostname == "seoberlino.herokuapp.com") {
        response.writeHead(301, {
            Location: "https://www.seoberlino.com/en",
            Expires: new Date().toGMTString()
        });
        response.end();
    } else {
        next();
    }
});

app.get("/blog", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/blog",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/about", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/about",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/contact", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/contact",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/seo-tips", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/resources",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/backlinking-check", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/offpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/technical-seo", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/technical",
        Expires: new Date().toGMTString()
    });
    response.end();
});
app.get("/competitor-analysis", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/research",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/on-page-audit", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/onpage",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/seo-sea-jargon", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/resources",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.get("/", function(request, response) {
    response.writeHead(301, {
        Location: "https://www.seoberlino.com/en/",
        Expires: new Date().toGMTString()
    });
    response.end();
});

app.use(express.static("./public"));

const csrf = require("csurf");

const cookieSession = require("cookie-session");
app.use(require("cookie-parser")());

app.use(require("body-parser").json());
const cookieSessionMiddleware = cookieSession({
    secret: secrets.COOKIE_PASS,
    maxAge: 100 * 60 * 60 * 24 * 4
});
app.use(cookieSessionMiddleware);
app.use(csrf({ cookie: true }));

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    return next();
});

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}
app.use(express.static("./Public"));
// app.use(express.static(path.resolve(__dirname, "../dist")));

function checkSession(req, res, next) {
    if (!req.session.userId) {
        res.redirect("/en");
    } else {
        next();
    }
}

////////////LANGUAGES////////////
//
// i18n
//   .use(i18nFsBackend)
//   .use(i18nMiddleware.LanguageDetector)
//   .init({
//     backend: {
//       loadPath: __dirname + "/src/i18n.js"
//     },
//     fallbackLng: "de",
//     lowerCaseLng: true,
//     preload: ["en", "de"],
//     saveMissing: true
//   });
//
// app.use(
//   i18nMiddleware.handle(i18n, {
//     removeLngFromUrl: false
//   })
// );

////////////END LANGUAGES////////////

app.get("/setcookiesession", (req, res) => {
    req.session.checked = true;

    res.json({
        success: true
    });
});

app.get("/checknotice", (req, res, next) => {
    if (req.session.checked) {
        console.log(req.session);
        res.json({
            success: true
        });
    } else {
        next();
    }
});
app.get("/sitemap.xml", (req, res) => {
    res.render("sitemap");
});
app.get("/robots.txt", (req, res) => {
    res.render("robots");
});
app.get("/en/editarticle", checkSession, (req, res, next) => {
    next();
});

app.get("/en/postarticle", checkSession, (req, res, next) => {
    next();
});
app.get("/en/admin", checkSession, (req, res, next) => {
    console.log("REQPARAMS", req.params);
    console.log("REQSESSION", req.session);
    next();
});

app.post("/en/postarticle", checkSession, (req, res) => {
    db.postArticle(
        req.body.title,
        req.body.author,
        req.body.article,
        req.body.status,
        req.body.imageurl,
        req.body.url
    ).catch(error => {
        console.log("error in upload server", error);
        res.status(500).json({
            success: false
        });
    });
});

app.post("/en/editarticle/:id", checkSession, (req, res) => {
    db.updateArticle(
        req.body.title,
        req.body.author,
        req.body.article,
        req.body.status,
        req.body.imageurl,
        req.params.id,
        req.body.url
    )
        .then(({ rows }) => {
            res.json({
                success: true
            });
        })
        .catch(error => {
            console.log("error in upload server", error);
            res.status(500).json({
                success: false
            });
        });
});

app.get("/getarticles", (req, res) => {
    db.getArticles().then(function(results) {
        res.json(results);
    });
});

app.get("/get3articles", (req, res) => {
    db.get3Articles().then(function(results) {
        res.json(results);
    });
});

app.get("/getarticle/:id", (req, res) => {
    console.log("REQPARAMS", req.params.id);
    db.getArticle(req.params.id).then(function({ rows }) {
        res.json({ rows });
    });
});

app.get("/getarticleurl/:BE", (req, res) => {
    console.log("REQPARAMS", req.params);
    db.getArticleUrl(req.params.BE).then(function({ rows }) {
        res.json({ rows });
    });
});

app.post("/en/login", (req, res) => {
    console.log("inlogin");
    let { email, pass } = req.body;
    db.login(email)
        .then(function(result) {
            if (!result) {
                throw new Error();
            } else {
                return checkPassword(pass, result.rows[0].password).then(
                    function(doesMatch) {
                        if (doesMatch) {
                            req.session.userId = result.rows[0].id;
                            res.json({
                                success: true
                            });
                        } else {
                            throw new Error();
                        }
                    }
                );
            }
        })
        .catch(function(e) {
            console.log("error while login");
            res.json({
                success: false
            });
        });
});

app.get("/log-out", (req, res) => {
    req.session = null;
    return res.redirect("/en");
});

// app.get("/:lang/blog/:url", (req, res) => {});

//
//
//
//
//
//
//
//
//
//
//
////////////////DO NOT TOUCH/////////////////////////

app.post("/en/form", (req, res) => {
    console.log("POSTREQBODY", req.body);

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3> Contact Details </h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
        `;

        console.log("HTMLEMAIL", htmlEmail);

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: secrets.EMAIL_USER,
                pass: secrets.EMAIL_PASS
            }
        });

        let mailOptions = {
            from: "test@testaccount.com",
            to: secrets.MAIL_TO,
            replyTo: " test@testaccount.com",
            subject: "new Message from website",
            text: req.body.message,
            html: htmlEmail
        }; //closemailoptions
        console.log(mailOptions);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log("error sending mail", error);
            } else {
                res.json({
                    success: true
                });
            }
            console.log("Message sent: %s", info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }); //transporter
    });
}); //main
app.enable("trust proxy");

// app.use(require("prerender-node"));

// Add a handler to inspect the req.secure flag (see
// http://expressjs.com/api#req.secure). This allows us
// to know whether the request was via http or https.

// set up plain http server

// set up a route to redirect http to https
// http.get("*", function(req, res) {
//   res.redirect("https://" + req.headers.host + req.url);
//
//   // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
//   // res.redirect('https://example.com' + req.url);
// });

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// app.get("/*", (req, res) => {
//   const jsx = <Layout />;
//   const reactDom = renderToString(jsx);
//
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(htmlTemplate(reactDom));
// });

app.listen(process.env.PORT || 8080, function() {
    console.log("I'm listening.");
});
//
// function htmlTemplate(reactDom) {
//   return `
//         <!DOCTYPE html>
//         <html>
//         <head>
//             <meta charset="utf-8">
//             <title>React SSR</title>
//         </head>
//
//         <body>
//             <div id="app">${reactDom}</div>
//             <script src="./app.bundle.js"></script>
//         </body>
//         </html>
//     `;
// }
