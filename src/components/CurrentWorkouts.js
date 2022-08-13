
function CurrentWorkouts (props) {
    const { workoutArr } = props;

    return (
        <div className="workout-container">
            {console.log(workoutArr)}
            <h1>Current Workout</h1>
            <div className="workout-list">
                <table className='table-1'>
                    <thead>
                        <td>
                            <h3>Exercises</h3>
                        </td>
                        <td>
                            <h3># Sets</h3>
                        </td>
                        <td>
                            <h3># Reps</h3>
                        </td>    
                        <td>
                            <h3>Lbs</h3>
                        </td>
                    </thead>
                    <tbody>
                        {workoutArr.map((x) => (
                        <tr>
                            <td>{x.exercise}</td>
                            <td>{x.sets}</td>
                            <td>{x.reps}</td>
                            <td>{x.lbs}</td> 
                        </tr>
                       ))}  
                    </tbody>
                </table>
                <button>Finished</button>
            </div>
        </div>
    )
}

export default CurrentWorkouts;