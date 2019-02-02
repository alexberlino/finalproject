const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(require("prerender-node"));

const compression = require("compression");
const db = require("./sql/db.js");
const { checkPassword, hashPassword } = require("./Public/hash.js");
let secrets;
if (process.env.NODE_ENV == "production") {
  secrets = process.env;
  app.use(function(req, res, next) {
    if (req.secure) {
      next();
    } else {
      res.redirect("https://" + req.headers.host + req.url);
    }
  });
} else {
  secrets = require("./secrets.json");
}

app.get("/", function(request, response, next) {
  if (process.env.NODE_ENV == "production") {
    response.writeHead(301, {
      Location: "https://www.seoberlino.com/en",
      Expires: new Date().toGMTString()
    });
    response.end();
  } else {
    next();
  }
});

app.get("/", function(request, response, next) {
  if (request.hostname == "seoberlino.com") {
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

app.get("/archives/208 ", function(request, response) {
  response.writeHead(301, {
    Location: "https://www.seoberlino.com/en",
    Expires: new Date().toGMTString()
  });
  response.end();
});

app.get("/archives/70 ", function(request, response) {
  response.writeHead(301, {
    Location: "https://www.seoberlino.com/en",
    Expires: new Date().toGMTString()
  });
  response.end();
});

app.get("/archives/195", function(request, response) {
  response.writeHead(301, {
    Location: "https://www.seoberlino.com/en",
    Expires: new Date().toGMTString()
  });
  response.end();
});

app.get("/archives/99", function(request, response) {
  response.writeHead(301, {
    Location: "https://www.seoberlino.com/en",
    Expires: new Date().toGMTString()
  });
  response.end();
});

app.get("/single-post/*", function(request, response) {
  response.writeHead(301, {
    Location: "https://www.seoberlino.com/en/blog",
    Expires: new Date().toGMTString()
  });
  response.end();
});

app.get("/ad/*", function(request, response) {
  response.writeHead(410);
  response.end();
});

app.get("/lo/*", function(request, response) {
  response.writeHead(410), response.end();
});

app.get("/fr/*", function(request, response) {
  response.writeHead(410);
  response.end();
});

app.get("/endefined/*", function(request, response) {
  response.writeHead(410);
  response.end();
});

app.get("/un/*", function(request, response) {
  response.writeHead(410);
  response.end();
});

app.get("/undefined/*", function(request, response) {
  response.writeHead(410);
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

function checkSession(req, res, next) {
  if (!req.session.userId) {
    res.redirect("/en");
  } else {
    next();
  }
}

app.get("/setcookiesession", (req, res) => {
  req.session.checked = true;

  res.json({
    success: true
  });
});

app.get("/checknotice", (req, res, next) => {
  if (req.session.checked) {
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
  db.getArticle(req.params.id).then(function({ rows }) {
    res.json({ rows });
  });
});

app.get("/getarticleurl/:BE", (req, res) => {
  db.getArticleUrl(req.params.BE).then(function({ rows }) {
    res.json({ rows });
  });
});

app.post("/en/login", (req, res) => {
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

////////////////DO NOT TOUCH/////////////////////////

app.enable("trust proxy");

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8080, function() {
  console.log("I'm listening.");
});
