-- localhost

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
    price NUMERIC NOT NULL,
    description TEXT NOT NULL,
    image  TEXT NOT NULL,
    type TEXT NOT NULL
);