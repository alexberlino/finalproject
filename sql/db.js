var spicedPg = require("spiced-pg");

var db = spicedPg(
  process.env.DATABASE_URL || "postgres:postgres:password@localhost:5432/blog"
);

module.exports.postArticle = function(
  title,
  author,
  article,
  status,
  imageurl,
  url
) {
  return db
    .query(
      `INSERT INTO articles (title, author, article, status, imageurl, url)
        VALUES ($1, $2, $3, $4, $5, $6)`,
      [title, author, article, status, imageurl, url]
    )
    .catch(function(err) {
      console.log("ERROR DB ADD ARTICLE", err);
    });
};

module.exports.getArticles = function() {
  return db
    .query(`SELECT * FROM articles WHERE status =$1`, ["ready to publish"])
    .catch(function(err) {
      console.log("ERROR DB ADD ARTICLE", err);
    });
};

module.exports.get3Articles = function() {
  return db
    .query(`SELECT * FROM articles WHERE status =$1 LIMIT 3`, [
      "ready to publish"
    ])
    .catch(function(err) {
      console.log("ERROR DB ADD ARTICLE", err);
    });
};

module.exports.getArticle = function(id) {
  return db
    .query(`SELECT * FROM articles WHERE id =$1`, [id])
    .catch(function(err) {
      console.log("ERROR DB ADD ARTICLE", err);
    });
};

module.exports.getArticleUrl = function(url) {
  return db
    .query(`SELECT * FROM articles WHERE url =$1`, [url])
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
  id,
  url
) {
  return db
    .query(
      `Update articles
      SET title= $1, author=$2, article=$3, status=$4, imageurl=$5, url=$7
      WHERE id=$6`,
      [title, author, article, status, imageurl, id, url]
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
