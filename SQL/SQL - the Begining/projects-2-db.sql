-- drop, create, use, varchar, integer, decimal

DROP DATABASE IF EXISTS projects_db ;
--do, type, condition, name
--this could be better logic-ed, for example, run a check
--then, depending on whats found do other stuff

CREATE DATABASE projects_db;
--do, type, name

USE projects_db; --don't forget to use the db!

CREATE TABLE customers (
    company_name VARCHAR(50) NOT NULL,
    --name, restriction / requirements
    email VARCHAR(100) NOT NULL,
    primary_contact VARCHAR(30),
    phone_number VARCHAR(20),
    currently_active BOOLEAN DEFAULT FALSE, --i think that's right? -- yup
    is_ass Boolean  DEFAULT FALSE
)

