import { ChangeEvent, ChangeEventHandler, useState } from 'react';

import { useMachine } from '@xstate/react';
import { todosMachine } from './machines/todos-machines/machine';

function App() {
  const [state, send] = useMachine(todosMachine);
  const [todos, setTodos] = useState<[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddNewTodo = () => {
    setTodos(prevValues => {
      return [...prevValues, newTodo]; 
    })

    setNewTodo('');

    send({ type: 'ADD_TODO' });
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  }

  return (
    <div className=''>
      <input type="text" value={newTodo} onChange={handleInputChange} style={{ border: '1px'}} />
      <button onClick={handleAddNewTodo}>Add</button>

      <ul>
        {todos.length === 0 && <li>No todos</li>}
        {todos.reverse().map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
