// posts-machine.js
import { createMachine, assign } from "xstate";

export const PostsMachine = createMachine({
  id: 'postsMachine',
  initial: 'printing',
  states: {
    printing: {
      on: {
        display: {
          actions: () => console.log('hello world!')
        }
      }
    }
  }
});
