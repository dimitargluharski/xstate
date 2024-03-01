import { useMachine } from '@xstate/react';
import { ModalMachine } from './machines/counter-machine/counter-machine';

function App() {
  const [state, send] = useMachine(ModalMachine);

  const { isOpen } = state.context;

  return (
    <>
      <div onClick={() => send({ type: 'OPEN' })}>
        Click me to open modal
      </div>
      {isOpen && (
        <div onClick={() => send({ type: 'CLOSE' })}>
          Modal box - click me to close
        </div>
      )}
    </>
  );
}

export default App;
