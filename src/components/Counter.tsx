
const Counter = (props: {counter:number;onIncrease:() => void; onDecrease: () => void}) => {

    return (
        <>
        <p>{props.counter}</p>
        <button onClick={props.onIncrease}>+</button>
        <button onClick={props.onDecrease}>-</button>
        </>
    )
}

export default Counter;