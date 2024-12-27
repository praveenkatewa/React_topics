import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; 
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
      <input
        type="text"
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '8px',
          outline: 'none',
          fontSize: '16px',
          flex: '1',
        }}
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          padding: '10px 15px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
