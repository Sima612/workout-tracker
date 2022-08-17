
function CurrentWorkouts(props) {
    const { workoutArr } = props;

    return (
        <div className="workout-container">
            <h1>Workout Log</h1>
            <div className="workout-list">
                <table className='table-1'>
                    <tbody>
                        <tr>
                            <th>Exercises</th>
                            <th># Sets</th>
                            <th># Reps</th>
                            <th>Lbs</th>
                            <input type="checkbox"
                                className="checkbox"
                                defaultChecked />
                        </tr>
                    </tbody>
                    <br></br>
                    <tbody className="table-body">
                        {workoutArr.map((x) => (
                            <tr>
                                <th>{x.exercise}</th>
                                <th>{x.sets}</th>
                                <th>{x.reps}</th>
                                <th>{x.lbs}</th>
                                <input type="checkbox" />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CurrentWorkouts;