const express = require("express");
const app = express();
const compression = require("compression");
const db = require("./sql/db.js");
const { checkPassword, hashPassword } = require("./Public/hash.js");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.static("./public"));
const cookieSession = require("cookie-session");
const cookieSessionMiddleware = cookieSession({
  secret: `I'm always angry.`,
  maxAge: 1000 * 60 * 60 * 24 * 90
});
app.use(cookieSessionMiddleware);

var csurf = require("csurf");
app.use(csurf());

app.use(function(req, res, next) {
  res.cookie("mytoken", req.csrfToken());
  next();
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
app.use(require("body-parser").json());

function checkSession(req, res, next) {
  if (!req.session.userId) {
    res.redirect("/en");
  } else {
    next();
  }
}
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

app.post("/en/editarticle", checkSession, (req, res) => {
  db.updateArticle(
    req.body.title,
    req.body.author,
    req.body.article,
    req.body.status,
    req.body.imageurl,
    req.body.id
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

app.get("/getarticle/:id", (req, res) => {
  console.log("REQPARAMS", req.params.id);
  db.getArticle(req.params.id).then(function({ rows }) {
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

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
  console.log("I'm listening.");
});
