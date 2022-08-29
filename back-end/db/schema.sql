-- localhost
DROP DATABASE IF EXISTS dev_products;
-- Creating the database 
CREATE DATABASE dev_products;

-- Connect 
\c  dev_products;

DROP TABLE IF EXISTS products;
-- Create table
CREATE TABLE 
products (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    description TEXT NOT NULL,
    image  TEXT NOT NULL
);

DROP TABLE IF EXISTS cakes;
CREATE TABLE 
cakes (
    id  SERIAL PRIMARY KEY,
    name    TEXT NOT NULL,
    price INTEGER NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL
);