DROP DATABASE IF EXISTS programming_db;

CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
    id Integer AUTO_INCREMENT PRIMARY KEY,
    language_ VARCHAR(20),
    rating INTEGER,
    mastered BOOLEAN DEFAULT true,
);

--insert data--
INSERT INTO programming_languages (language, rating)
VALUES ("HTML", 95);

INSERT INTO programming_languages (language, rating)
VALUES ("JavaScript", 99);

INSERT INTO programming_languages (language, rating)
VALUES ("JQuery", 98);

INSERT INTO programming_languages (language, rating)
VALUES ("MySQL", 70);

