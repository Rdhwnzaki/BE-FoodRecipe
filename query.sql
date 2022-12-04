-- Active: 1669812598881@@localhost@5432@food
CREATE TABLE users(
    id_user VARCHAR PRIMARY KEY,
    email_user VARCHAR NOT NULL,
    password_user VARCHAR NOT NULL,
    fullname_user VARCHAR,
    phone VARCHAR
);

ALTER TABLE users ADD verif INT;
ALTER TABLE users ADD otp VARCHAR(32);

ALTER TABLE users ADD photo VARCHAR DEFAULT NULL;

CREATE TABLE recipe(
    id_recipe SERIAL PRIMARY KEY,
    title VARCHAR,
    ingredients VARCHAR,
    photo VARCHAR,
    video VARCHAR DEFAULT NULL
);

CREATE TABLE comment(
    id_comment SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(id_user),
    recipe_id INT REFERENCES recipe(id_recipe)
);

CREATE TABLE comment(
    id_comment SERIAL PRIMARY KEY,
    comment_text VARCHAR NOT NULL,
    user_id VARCHAR REFERENCES users(id_user),
    recipe_id INT REFERENCES recipe(id_recipe)
);