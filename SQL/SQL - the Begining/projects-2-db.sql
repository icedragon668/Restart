-- drop, create, use, varchar, integer, decimal --

DROP DATABASE IF EXISTS projects_db ;
--do, type, condition, name --
--this could be better logic-ed, for example, run a check --
--then, depending on whats found do other stuff --


-- Part 1, creating --
CREATE DATABASE projects_db;
--do, type, name --

USE projects_db; --don't forget to use the db! --

CREATE TABLE customers (
    company_name VARCHAR(50) NOT NULL,
    --name, restriction / requirements --
    email VARCHAR(100) NOT NULL,
    primary_contact VARCHAR(30),
    phone_number VARCHAR(20),
    currently_active BOOLEAN DEFAULT FALSE, --i think that's right? // yup --
    is_ass Boolean  DEFAULT FALSE
);

CREATE TABLE projects (
    name VARCHAR(100) NOT NULL,
    company_name VARCHAR(50) NOT NULL, --switch to keyed to table maybe? --
    start_date DATETIME DEFAULT CURRENT_TIMESTAMP, --i think this will autofill current date //no, current_date, while a feature, is invalid here >.> --
    due_date DATE
);

CREATE TABLE invoices (
    invoice_number INTEGER NOT NULL,
    amount DECIMAL (10,2), --range, decimal points (subtracted from range. ie 12,345,678.00 here) --
    paid BOOLEAN DEFAULT FALSE
);

-- Part 2, adding data --
INSERT INTO customers (company_name, email, primary_contact, phone_number)
-- table (fields)
VALUES ('Umbrella Coporation', 'ospencer@unbrella.corp', 'O.Spencer', '770-555-6080')

INSERT INTO customers (company_name, email)
VALUES ('Veridian Dynamics', 'ted@veridiandynamics.com');

INSERT INTO customers (company_name, email)
VALUES ('Dunder Mifflin', 'dschrute@dunder-mifflin.com');

INSERT INTO projects (name, company_name, start_date, due_date)
VALUES ('Ongoing Maintenance', 'Umbrella Coporation', '2019-11-01', '2020-01-01')

INSERT INTO projects (name, company_name, due_date) --attempts autofill of start --
VALUES ('Extended Maintenance', 'Umbrella Coporation', '2021-01-01')

INSERT INTO projects (name, company_name, start_date, due_date)
VALUES ('Network Infrastructure Upgrade', 'Veridian Dynamics', '2015-06-05' ,'2015-08-05');

INSERT INTO projects (name, company_name)
VALUES ('Reconfigure Security Protocols', 'Veridian Dynamics');

INSERT INTO invoices (invoice_number, amount, paid)
VALUES (437693, 1576.87, TRUE)

INSERT INTO invoices (invoice_number, amount) --default unpaid--
VALUES (982241, 3752.91)
