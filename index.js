const express = require("express");
const nodemailer = require("nodemailer");
// var i18n = require("i18next");
// const i18nMiddleware = require("i18next-express-middleware");
const app = express();
// import { renderToString } from "react-dom/server";
const compression = require("compression");
const db = require("./sql/db.js");
const { checkPassword, hashPassword } = require("./Public/hash.js");
let secrets;
if (process.env.NODE_ENV == "production") {
  secrets = process.env;
} else {
  secrets = require("./secrets.json");
}

app.use(express.static("./public"));

const csrf = require("csurf");

const cookieSession = require("cookie-session");
app.use(require("cookie-parser")());

app.use(require("body-parser").json());
const cookieSessionMiddleware = cookieSession({
  secret: secrets.COOKIE_PASS,
  maxAge: 100 * 60 * 60 * 24 * 30
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

app.get("/:lang/editarticle", checkSession, (req, res, next) => {
  next();
});
app.get("/:lang/postarticle", checkSession, (req, res, next) => {
  next();
});
app.get("/:lang/admin", checkSession, (req, res, next) => {
  console.log("REQPARAMS", req.params);
  console.log("REQSESSION", req.session);
  next();
});

app.post("/:lang/postarticle", checkSession, (req, res) => {
  db.postArticle(
    req.body.title,
    req.body.author,
    req.body.article,
    req.body.status,
    req.body.imageurl
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

app.post("/:lang/editarticle/:id", checkSession, (req, res) => {
  db.updateArticle(
    req.body.title,
    req.body.author,
    req.body.article,
    req.body.status,
    req.body.imageurl,
    req.params.id
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

app.post("/:lang/login", (req, res) => {
  console.log("inlogin");
  let { email, pass } = req.body;
  db.login(email)
    .then(function(result) {
      if (!result) {
        throw new Error();
      } else {
        return checkPassword(pass, result.rows[0].password).then(function(
          doesMatch
        ) {
          if (doesMatch) {
            req.session.userId = result.rows[0].id;
            res.json({
              success: true
            });
          } else {
            throw new Error();
          }
        });
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

app.post("/:lang/form", (req, res) => {
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
