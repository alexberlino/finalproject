DROP TABLE IF EXISTS articles;

CREATE TABLE articles(
id SERIAL PRIMARY KEY,
title VARCHAR(1000) not null,
author VARCHAR(1000) not null,
article VARCHAR(9000) not null,
imageurl VARCHAR(9000),
status VARCHAR(1000) not null,
dat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    emailaddress VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);
