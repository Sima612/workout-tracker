const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

// const { Sequelize } = require('sequelize')

//Middleware
app.use(cors());
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: false }));

// Routes

// creating exercise
app.post('/', async (req, res) => {
    try {
        const { exercise_name, date, sets, reps, lbs } = req.body;
        const newExercise = await pool.query(
            "INSERT INTO exercises (exercise_name, date, sets, reps, lbs) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [exercise_name, date, sets, reps, lbs]
        )

        res.json(newExercise.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

// get all exercise
app.get('/', async (req, res) => {
    try {

        const allExercises = await pool.query("SELECT * FROM exercises");

        res.json(allExercises.rows);

    } catch (err) {
        console.error(err.message)
    }
})

// get an exercise
app.get('/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const exercises = await pool.query(
            "SELECT * FROM exercises WHERE exercise_id = $1",
            [id]
        );
        res.json(exercises.rows[0]);

    } catch (err) {
        console.error(err.message)
    }
})

// update exercise
app.put("/:id", async (req, res) => {
    try {

        const { id } = req.params;
        const { exercise_name } = req.body;

        const updateExercise = await pool.query(
            "UPDATE exercises SET exercise_name = $1 WHERE exercise_id = $2",
            [exercise_name, id]
        )
        res.json(exercise_name)

    } catch (error) {
        console.error(error.message)
    }
})

// delete exercise
app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteExercise = await pool.query(
            "DELETE FROM exercises WHERE exercise_id = $1",
            [id]
        );
        res.json(deleteExercise);

    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log('Server starting on port 5000')
})