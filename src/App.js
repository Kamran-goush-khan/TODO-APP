import React, { useState, useEffect } from 'react';
import AddTodo from './Components/Todo/AddTodo';
import AddList from './Components/Todo/AddList';
import './App.css';

function App() {
  let initTodo;

  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const [data, setData] = useState(initTodo);

  // useEffect(() => {
  //   const storedData = localStorage.getItem('todos');
  //   if (storedData) {
  //     setData(JSON.parse(storedData));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data));
  }, [data]);

  const userTodo = (data) => {
    const newTodo = {
      id: Math.random().toString(),
      value: data,
    };
    setData((prev) => {
      const updatedData = [newTodo, ...prev];
      localStorage.setItem('todos', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const deleteHandler = (goalId) => {
    setData((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      localStorage.setItem('todos', JSON.stringify(updatedGoals));
      return updatedGoals;
    });
  };

  return (
    <div>
      <AddTodo onGet={userTodo} />
      <AddList list={data} onClick={deleteHandler} />
    </div>
  );
}

export default App;
