import { useMachine } from '@xstate/react';
import counterMachine from './machines/counter-machine/counter-machine';

function App() {
  const [state, send] = useMachine(counterMachine);

  return (
    <h1 className="bg-slate-300 p-5">
      <button className='p-2' onClick={() => {
        send({
          type: 'INC'
        });
        console.log(state.context.count)
      }}>+</button>

      <button className='p-2' onClick={() => {
        send({
          type: 'DEC'
        });
        console.log(state.context.count)
      }}>-</button>

      <div>
        {state.context.count}
      </div>
    </h1>
  )
}

export default App
