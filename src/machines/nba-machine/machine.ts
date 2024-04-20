import { createMachine } from "xstate";

export const nbaMachine = createMachine({
    id: 'nbaMachine',
    initial: 'FIRST_STEP',
    context: {
        data: undefined
    },
    states: {
        FIRST_STEP: {
            on: {
                FIRST_STEP: {
                    actions: 'log',
                    target: 'SECOND_STEP'
                }
            }
        },
        SECOND_STEP: {
            on: {
                SECOND_STEP: {
                    actions: 'secondLog',
                    target: 'THIRD_STEP'
                }
            }
        },
        THIRD_STEP: {
            on: {
                THIRD_STEP: {
                    actions: 'sendAnAlert',
                    target: 'FIRST_STEP'
                }
            }
        },
    }
}, {
    actions: {
        log: () => {
            console.log('this is an initial state!');
        },
        secondLog: () => {
            console.log('this is a second state!');
        },
        sendAnAlert: () => {
            // console.log('this is a third state!');
            alert('this is a third state!')
        }
    }
});
