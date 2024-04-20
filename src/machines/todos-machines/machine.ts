import { createMachine } from "xstate";

export const todosMachine = createMachine({
    id: 'todosMachine',
    initial: 'idle',
    context: {
        todos: []
    },
    states: {
        idle: {},
        addTodo: {
            on: {
                ADD_TODO: {
                    actions: 'addNewTodo'
                }
            }
        }
    }
}, {
    actions: {
        addNewTodo: ({ context, event}) => {
            return {
                ...context,
                todos: [...context.todos, event.todo]
            }
        }
    }
})