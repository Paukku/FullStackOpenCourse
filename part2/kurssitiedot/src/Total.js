const Total = (props) => {
    const exercisesArray = props.total.map(exercise => exercise.exercises)
    const initialValue = 0;
    const total = exercisesArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
    );
    
    return (
        <p> Number of exercises {total} </p>)
}
export default Total