import { useMachine } from '@xstate/react';
import { themeMachine } from './machines/themes-machine/machine';

import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

function App() {
  const [state, send] = useMachine(themeMachine);

  const toggleTheme = () => {
    send({ type: 'SWITCH_THEME' });
  };

  return (
    <div>
        <button className='bg-slate-500 text-white p-2 border-2 rounded' onClick={toggleTheme}>
        {state.context.theme === 'dark' 
        ? <IoSunnySharp />
        : <IoMoonSharp/>
      }
        </button>

        {/* load more data */}
    </div>
  );
}

export default App;
