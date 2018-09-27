var spicedPg = require("spiced-pg");

var db = spicedPg(
  process.env.DATABASE_URL || "postgres:postgres:password@localhost:5432/blog"
);

module.exports.postArticle = function(
  title,
  author,
  article,
  status,
  imageurl
) {
  return db
    .query(
      `INSERT INTO articles (title, author, article, status, imageurl)
        VALUES ($1, $2, $3, $4, $5)`,
      [title, author, article, status, imageurl]
    )
    .catch(function(err) {
      console.log("ERROR DB ADD ARTICLE", err);
    });
};

module.exports.getArticles = function() {
  return db
    .query(
      `SELECT id, title, author, article, imageurl, dat FROM articles WHERE status =$1`,
      ["ready to publish"]
    )
    .catch(function(err) {
      console.log("ERROR DB ADD ARTICLE", err);
    });
};

module.exports.getArticle = function(id) {
  return db
    .query(
      `SELECT title, author, article, imageurl, dat FROM articles WHERE id =$1`,
      [id]
    )
    .catch(function(err) {
      console.log("ERROR DB ADD ARTICLE", err);
    });
};

module.exports.updateArticle = function(
  title,
  author,
  article,
  status,
  imageurl,
  id
) {
  return db
    .query(
      `Update articles
      SET title= $1, author=$2, article=$3, status=$4, imageurl=$5)
      WHERE id=$6`,
      [title, author, article, status, imageurl, id]
    )
    .catch(function(err) {
      console.log("ERROR DB ADD ARTICLE", err);
    });
};

module.exports.login = function(emailaddress) {
  return db.query(`SELECT id, password FROM users WHERE emailaddress = $1`, [
    emailaddress
  ]);
};
