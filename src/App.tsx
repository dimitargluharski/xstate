import { useMachine } from '@xstate/react';
import { themeMachine } from './machines/themes-machine/machine';

import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { NBA } from './components/NBA';
import { Counter } from './components/Counter';

function App() {
  const [state, send] = useMachine(themeMachine);

  const toggleTheme = () => {
    send({ type: 'SWITCH_THEME' });
  };

  return (
    <div className={`${state.context.theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-slate-50 text-black'}`}>
      <button className='bg-slate-500 text-white p-2 border-2 rounded' onClick={toggleTheme}>
        {state.context.theme === 'dark'
          ? <IoSunnySharp />
          : <IoMoonSharp />
        }
      </button>
      <NBA />
      <Counter />
    </div>
  );
}

export default App;
