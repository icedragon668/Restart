DROP DATABASE IF EXISTS programming_db;

CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
    -- id INTEGER AUTO_INCREMENT PRIMARY KEY, --this is correct
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
    -- id INTEGER AUTO_INCREMENT PRIMARY KEY, --this is correct
    name VARCHAR(50),
    languageId INTEGER,
    FOREIGN KEY (languageId)
     REFERENCES programming_languages(id)
);

INSERT INTO code_projects (name, languageId)
 VALUES ("Bunny Burrows", 2);

INSERT INTO code_projects (name, languageId)
 VALUES ("Website Building", 1);

INSERT INTO code_projects (name, languageId)
 VALUES ("NodeJS Back-End", 2);

INSERT INTO code_projects (name, languageId)
 VALUES ("Browser Game", 2);

INSERT INTO code_projects (name, languageId)
 VALUES ("Data Persistence", 4);


 --join--
SELECT
     code_projects.name,
     programming_languages.language
    FROM
     code_projects LEFT JOIN programming_languages
     on code_projects.languageId = programming_languages.id
    WHERE
     programming_languages.language = "JavaScript";

--same as above, different selector--
SELECT
     code_projects.name,
     programming_languages.language
    FROM
     code_projects LEFT JOIN programming_languages
     on code_projects.languageId = programming_languages.id
    WHERE
     code_projects.languageId = 2;

--there seems to be an oddity in how vsc reads the sql,
--lines 8 and 29 are correct, but are flagged. and trigger
--other problems. they have been commented out, but are correct