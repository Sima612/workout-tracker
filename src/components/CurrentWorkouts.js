
function CurrentWorkouts (props) {
    const { workoutArr } = props;

    return (
        <div className="workout-container">
            <h2>Current Workout</h2>
            <div className="workout-list">
                <table className='table-1'>
                    <thead>
                        <th>Exercises</th>
                        <th># Sets</th>
                        <th># Reps</th>    
                        <th>Lbs</th>
                        <input type="checkbox"
                            defaultChecked />
                    </thead>
                    <br></br>
                    <tbody className="table-body">
                        {workoutArr.map((x) => (
                        <tr>
                            <td>{x.exercise}</td>
                            <td>{x.sets}</td>
                            <td>{x.reps}</td>
                            <td>{x.lbs}</td> 
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