import React from "react";

function Home() {
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
                        <th># of Sets</th>
                        <th># of Reps</th>
                        <th>Lbs</th>
                    </tr>
                    <tr class="row-1">
                        <th>
                            <input type="date" name="" id="date"/>
                        </th>
                        <th>
                            <input type="textarea"/>
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
                            <input type="number"
                                min="1"
                                max="99"
                                id="sets"/>
                        </th>
                        <th>
                            <input type="number"
                                min="1"
                                max="99"
                                id="reps"/>
                        </th>
                        <th>
                            <input type="number"
                                min="5"
                                max="999"
                                id="lbs"/>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    )
};

export default Home;