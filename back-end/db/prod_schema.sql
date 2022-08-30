-- Connect 
\c  d79ub1tssttj29;


-- Create table
CREATE TABLE 
products (
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    price INTEGER NOT NULL,
    description TEXT NOT NULL,
    image  TEXT NOT NULL,
);