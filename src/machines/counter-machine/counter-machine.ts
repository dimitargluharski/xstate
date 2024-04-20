import { createMachine, assign } from 'xstate';

export const counterMachine = createMachine({
    id: 'counterMachine',
    initial: 'idle',
    context: {
        counter: 0
    },
    states: {
        idle: {},
    },
    on: {
        INCREMENT: {
            actions: 'incrementCounter'
        },
        DECREMENT: {
            actions: 'decrementCounter'
        }
    }
},
    {
        actions: {
            incrementCounter: assign({
                counter: ({ context }) => {
                    return Number(context.counter + 1);
                }
            }),
            decrementCounter: assign({
                counter: ({ context }) => {
                    return context.counter - 1;
                }
            }),
        }
    });