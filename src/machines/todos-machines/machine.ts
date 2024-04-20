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
        },
        removeTodo: {
            on: {
                REMOVE_TODO: {
                    actions: ['removeTodo', 'alert']
                }
            },
        }
    }
}, {
    actions: {
        addNewTodo: ({ context, event}) => {
            return {
                ...context,
                todos: [...context.todos, event.todo]
            }
        },
        removeTodo: ({ context, event}) => {
            return {
                ...context,
                todos: context.todos.filter((todo:any) => todo.id !== event.todo.id)
            }
        },
        alert: () => {
            alert('Todo removed!');
        }
    }
})