import { useMachine } from '@xstate/react';
import { themeMachine } from './machines/themes-machine/machine';

function App() {
  const [state, send] = useMachine(themeMachine);

  const toggleTheme = () => {
    send({ type: 'SWITCH_THEME' });
  };

  const styles = {
    app: {
      width: '100%',
      height: '100%',
      backgroundColor: state.context.theme === 'dark' ? '#333' : '#fff',
      color: state.context.theme === 'dark' ? '#fff' : '#333',
    }
  };

  return (
    <div style={styles.app}>
      <div>Hello World!</div>
      <button onClick={toggleTheme}>
        <span>change theme to </span>
        <b>
          {state.context.theme === 'dark' ? 'white' : 'dark'}
        </b>
      </button>
    </div>
  );
}

export default App;
