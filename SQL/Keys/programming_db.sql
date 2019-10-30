DROP DATABASE IF EXISTS programming_db;

CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    language VARCHAR(20),
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

--Foriegn Key--
CREATE TABLE code_projects (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    languageId INTEGER,
    FOREIGN KEY (languageId)
     REFERENCES programming_languages(id)
);

INSERT INTO code_projects (name, languageId)
 VALUES ("Bunny Burrows", 2);

 --join--
SELECT
     code_projects.name,
     programming_languages.language
    FROM
     code_projects LEFT JOIN programming_languages
     on code_projects.languageId = programming_languages.id
    WHERE
     programming_languages.language = "JavaScript";