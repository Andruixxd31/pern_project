CREATE TABLE restaurants(
    id SERIAL NOT NULL,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50),
    price_range int CHECK(price_range >= 1 AND price_range <= 5),

    CONSTRAINT restaurant_pk PRIMARY KEY (id)
);

INSERT INTO 
    restaurants(name, location, price_range)
VALUES
    ('Calabacitas Tiernas', 'Sur', 4),
    ('Blooming Onion', 'Ciudadela', 3),
    ('Choclo y Maiz', 'Colonia Americana', 2);
