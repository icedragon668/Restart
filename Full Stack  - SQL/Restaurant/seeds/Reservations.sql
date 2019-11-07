-- i need to check the database..., or just make it up as i go :p
-- DROP DATABASE IF EXISTS restaurant_db

-- CREATE DATABASE restaurant_db

USE restaurant_db

-- DROP TABLE IF EXISTS Reservations

-- CREATE TABLE Reservations ("name" Varchar(30), "phoneNumber" Varchar(30), "email" Varchar(30), "createdAt" Varchar(30), "updatedAt" Varchar(30))
-- is there maybe a USE IF EXISTS, ELSE CREATE syntax i can use?
-- also, is this built right?, doesn't the models/index make this?

INSERT INTO Reservations ("name", "phoneNumber", "email", "createdAt", "updatedAt") VALUES ('Roger', '444-666-3333', 'test@test.com', NOW(), NOW());

INSERT INTO Reservations ("name", "phoneNumber", "email", "createdAt", "updatedAt") VALUES ('Lillian', '444-666-3377', 'sample@test.com', NOW(), NOW());

INSERT INTO Reservations ("name", "phoneNumber", "email", "createdAt", "updatedAt") VALUES ('Lillian', '555-555-5555', 'random@test.com', NOW(), NOW());

INSERT INTO Reservations ("name", "phoneNumber", "email", "createdAt", "updatedAt") VALUES ('Jaylin', '444-666-3377', 'another@test.com', NOW(), NOW());

INSERT INTO Reservations ("name", "phoneNumber", "email", "createdAt", "updatedAt") VALUES ('Jay', '777-777-7777', 'thisone@test.com', NOW(), NOW());

INSERT INTO Reservations ("name", "phoneNumber", "email", "createdAt", "updatedAt") VALUES ('Phil', '999-999-9999', 'foo@test.com', NOW(), NOW());
