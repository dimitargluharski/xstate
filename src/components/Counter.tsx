import { useMachine } from "@xstate/react";
import { counterMachine } from "../machines/counter-machine/counter-machine";

export const Counter = () => {
    const [state, send] = useMachine(counterMachine);

    const handleIncrement = () => {
        send({ type: 'INCREMENT' });
    }

    const handleDecrement = () => {
        send({ type: 'DECREMENT' });
    }

    console.log(state.context);

    return(
        <div>
            <h1>Counter: {state.context.counter}</h1>
            
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}