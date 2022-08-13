import React from "react";

function Home(props) {
    const { exerciseModel } = props;

    return (
        <div>
            <header>
                <h1>Workout Tracker</h1>
            </header>
            <div class="container">
                <table class="table-1">
                    <tr class="row-1">
                        <th>Date</th>
                        <th>Exercise</th>
                        <th>Muscle Group</th>
                        <th># Sets</th>
                        <th># Reps</th>
                        <th>Lbs</th>
                    </tr>
                    <tr class="row-2">
                        <th>
                            <label htmlFor="date">{exerciseModel.date}</label>
                            <input type="date" 
                                name="date" 
                                id="date"
                                />
                        </th>
                        <th>
                            <label htmlFor="exerciseName">{exerciseModel.exerciseName}</label>
                            <input type="textarea"
                                />
                        </th>
                        <th>
                            <select>
                                <option>Legs</option>
                                <option>Shoulders</option>
                                <option>Arms</option>
                                <option>Back</option>
                                <option>Abs</option>
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
                                placeholder='10'/>
                        </th>
                        <th>
                            <label htmlFor="lbs">{exerciseModel.lbs}</label>
                            <input type="number"
                                min="5"
                                max="999"
                                name="lbs"
                                id="lbs"/>
                        </th>
                    </tr>
                </table>
                <table className="table-2">
                    <tr>
                        <div className="btn-div">
                            <button>
                                + 
                            </button>
                            <button>
                                Add Workout
                            </button>
                        </div>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default Home;