DROP DATABASE IF EXISTS programming_db;

CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages (
    id Integer AUTO_INCREMENT PRIMARY KEY,
    language_ VARCHAR(20),
    rating INTEGER,
    mastered BOOLEAN DEFAULT true,
);