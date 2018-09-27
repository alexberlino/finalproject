const express = require("express");
const app = express();
const compression = require("compression");
const db = require("./sql/db.js");

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

app.post("/en/postarticle", (req, res) => {
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

app.post("/en/updatearticle", (req, res) => {
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

app.get("/getarticle", (req, res) => {
  db.getArticle(req.body.id).then(function(results) {
    res.json(results);
  });
});
app.post("/login", (req, res) => {
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
            req.session.first = result.rows[0].firstname;
            req.session.last = result.rows[0].surname;
            req.session.imageurl = result.rows[0].imageurl || null;
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
      res.json({
        success: false
      });
    });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
  console.log("I'm listening.");
});
