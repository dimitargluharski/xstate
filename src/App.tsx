import { useState } from 'react';
import { useMachine } from '@xstate/react';
import { todosMachine } from './machines/todos-machines/machine';

function App() {
  const [state, send] = useMachine(todosMachine);
  const [todos, setTodos] = useState<{id: string, text: string}[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddNewTodo = () => {
    const newTodoItem = { id: Date.now().toString(), text: newTodo };
    setTodos(prevValues => [...prevValues, newTodoItem]);

    setNewTodo('');

    send({ type: 'ADD_TODO', todo: newTodoItem });
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  }

  const handleRemoveTodo = (id: string) => {
    setTodos(prevValues => prevValues.filter(todo => todo.id !== id));

    send({ type: 'REMOVE_TODO', id });
  }

  return (
    <div>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddNewTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;