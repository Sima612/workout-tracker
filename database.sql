CREATE DATABASE workout;

CREATE TABLE exercises (
    exercise_id SERIAL PRIMARY KEY,
    date DATE,
    exercise_name VARCHAR(255),
    sets INTEGER,
    reps INTEGER,
    lbs INTEGER
);
