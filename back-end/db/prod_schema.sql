
-- Connect 
\c  dadanp8lth02jd;



-- Create table
CREATE TABLE 
breads (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    description TEXT NOT NULL,
    image  TEXT NOT NULL,
    is_favorite BOOLEAN
);


CREATE TABLE 
cakes (
    id  SERIAL PRIMARY KEY,
    name    TEXT NOT NULL,
    price INTEGER NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    is_favorite BOOLEAN
);


CREATE TABLE 
minis (
    id  SERIAL PRIMARY KEY,
    name    TEXT NOT NULL,
    price INTEGER NOT NULL,
    description TEXT NOT NULL,
    image TEXT NOT NULL,
    is_favorite BOOLEAN
)
