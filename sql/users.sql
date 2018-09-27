DROP TABLE IF EXISTS users;



CREATE TABLE users (

    id SERIAL PRIMARY KEY,
    emailaddress VARCHAR(30) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,


);
