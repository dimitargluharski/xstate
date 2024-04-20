import { useMachine } from "@xstate/react";
import { nbaMachine } from "../machines/nba-machine/machine";

export const NBA = () => {
    const [state, send] = useMachine(nbaMachine);

    const handleFirstStep = () => {
        send({ type: 'FIRST_STEP' });
    }

    const handleSecondStep = () => {
        send({ type: 'SECOND_STEP' });
    }

    const handleThirdStep = () => {
        send({ type: 'THIRD_STEP' });
    }

    return (
        <div className={`dark:text-white`}>
            <button onClick={handleFirstStep}>First Step</button>
            <button onClick={handleSecondStep}>second step</button>

            <button onClick={handleThirdStep}>ALERT!</button>
        </div>
    );
}
