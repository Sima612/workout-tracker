import React from "react";

function Home(props) {
    const { exerciseModel, addRow, newRow, getAllWorkouts } = props;

    return (
        <div>
            <header>
                <h1>Workout Tracker</h1>
            </header>
            <div className="container">
                <table className="table-1">
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
                            <label htmlFor="date">{exerciseModel.date}</label>
                            <input type="date"
                                name="date"
                                id="date"
                            />
                        </th>
                        <th>
                            <label htmlFor="exerciseName">{exerciseModel.exerciseName}</label>
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
                            <label htmlFor="sets">{exerciseModel.sets}</label>
                            <input type="number"
                                min="1"
                                max="99"
                                id="sets"
                                name="sets"
                                placeholder="3"
                            />
                        </th>
                        <th>
                            <label htmlFor="reps">{exerciseModel.reps}</label>
                            <input type="number"
                                min="1"
                                max="99"
                                id="reps"
                                name="reps"
                                placeholder='10' />
                        </th>
                        <th>
                            <label htmlFor="lbs">{exerciseModel.lbs}</label>
                            <input type="number"
                                min="5"
                                max="999"
                                name="lbs"
                                id="lbs" />
                        </th>
                    </tr>
                    <br></br>
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
                </table>
                <table className="table-2">
                    <tr>
                        <div className="btn-div">
                            <button onClick={() => addRow(newRow)}>
                                +
                            </button>
                            <button onClick={() => getAllWorkouts()}>
                                Add To Workout
                            </button>
                        </div>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default Home;