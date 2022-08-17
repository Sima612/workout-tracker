import React from "react";
import { useState } from 'react'

function Home(props) {
    const { addRow, newRow, getAllWorkouts } = props;

    const [exercise, setExercise] = useState("")

    const onClickBtn = async (e) => {
        e.preventDefault();
        try {
            const body = { exercise };
            const response = await fetch("http://localhost:5000", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }


    return (
        <div>
            <header>
                <h1>Workout Tracker</h1>
            </header>
            <div className="container">
                <table className="table-1">
                    <tbody>
                        <tr className="row-1">
                            <th>Date</th>
                            <th>Exercise</th>
                            <th>Muscle Group</th>
                            <th># Sets</th>
                            <th># Reps</th>
                            <th>Lbs</th>
                        </tr>
                        <tr className="row-2">
                            <th>
                                <input type="date"
                                    name="date"
                                    id="date"
                                />
                            </th>
                            <th>
                                <input type="text"
                                    id="exerciseName"
                                />
                            </th>
                            <th>
                                <select id="select">
                                    <option></option>
                                    <option>Chest</option>
                                    <option>Shoulders</option>
                                    <option>Arms</option>
                                    <option>Core</option>
                                    <option>Back</option>
                                    <option>Legs</option>
                                </select>
                            </th>
                            <th>
                                <input type="number"
                                    min="1"
                                    max="99"
                                    id="sets"
                                    name="sets"
                                    placeholder="3"
                                />
                            </th>
                            <th>
                                <input type="number"
                                    min="1"
                                    max="99"
                                    id="reps"
                                    name="reps"
                                    placeholder='10'
                                />
                            </th>
                            <th>
                                <input type="number"
                                    min="5"
                                    max="999"
                                    name="lbs"
                                    id="lbs"
                                />
                            </th>
                        </tr>
                    </tbody>
                    <tbody>
                        {newRow.map((row) => (
                            <>
                                <tr>
                                    <th>{row.date}</th>
                                    <th>{row.exercise}</th>
                                    <th>{row.select}</th>
                                    <th>{row.sets}</th>
                                    <th>{row.reps}</th>
                                    <th>{row.lbs}</th>
                                </tr>
                            </>
                        ))
                        }
                    </tbody>
                </table>
                <section>
                    <div className="btn-div">
                        <button
                            // onClick={onClickBtn}
                            onClick={() => addRow(newRow)}
                        >
                            +
                        </button>
                        <button onClick={() => getAllWorkouts()}>
                            Add To Workout
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default Home;