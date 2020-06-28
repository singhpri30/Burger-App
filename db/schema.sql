DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(255) NOT NULL,
devoured BOOL DEFAULT FALSE,
createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
PRIMARY KEY (id)
);