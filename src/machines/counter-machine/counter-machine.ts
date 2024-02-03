import { createActor, createMachine, assign } from "xstate";

const counterMachine = createMachine({
    id: "counter",
    initial: "active",
    context: {
        count: 0,
    },
    states: {
        active: {
        on: {
            INC: {
                actions: assign({ count: ({ context }) => context.count + 1 }),
            },
            DEC: {
                actions: assign({ count: ({ context }) => context.count - 1 }),
            },
        },
        },
    },
    });

export default counterMachine;

const toggleActor = createActor(counterMachine);

toggleActor.start();

// toggleActor.subscribe((state) => {
//     return state.context.count;
// })