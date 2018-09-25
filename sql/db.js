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
    .query(`SELECT * FROM articles WHERE status =$1`, ["ready to publish"])
    .catch(function(err) {
      console.log("ERROR DB ADD ARTICLE", err);
    });
};
