import { createMachine, assign } from "xstate";

export const ModalMachine = createMachine({
  id: 'modalMachine',
  initial: 'closed',
  context: {
    isOpen: false,
  },
  states: {
    closed: {
      entry: 'logClosedState',
      on: {
        OPEN: {
          target: 'open',
          actions: 'openModal'
        }
      }
    },
    open: {
      entry: 'logOpenState',
      on: {
        CLOSE: {
          target: 'closed',
          actions: 'closeModal'
        }
      }
    }
  }
}, {
  actions: {
    openModal: assign({
      isOpen: true
    }),
    closeModal: assign({
      isOpen: false
    }),
    logClosedState: () => {
      console.log('Entering closed state');
    },
    logOpenState: () => {
      console.log('Entering open state');
    }
  }
});
