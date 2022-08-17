CREATE DATABASE workout;

CREATE TABLE exercises (
    exercise_id SERIAL PRIMARY KEY,
    exercise_name VARCHAR(255),
    date DATE,
    sets INT,
    reps INT,
    lbs INT
);
