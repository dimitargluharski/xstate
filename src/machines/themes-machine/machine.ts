import { assign, createMachine } from "xstate";

export const themeMachine = createMachine({
    id: 'themeMachine',
    initial: 'DARK_THEME',
    context: {
        theme: 'dark'
    },
    states: {
        DARK_THEME: {
            on: {
                SWITCH_THEME: {
                    target: 'WHITE_THEME',
                    actions: 'toggleTheme'
                }
            }
        },
        WHITE_THEME: {
            on: {
                SWITCH_THEME: {
                    target: 'DARK_THEME',
                    actions: 'toggleTheme'
                }
            }
        }
    }
},{
    actions: {
        toggleTheme: assign({
            theme: (context) => (context.context.theme === 'dark' ? 'white' : 'dark')
        })
    }
});
