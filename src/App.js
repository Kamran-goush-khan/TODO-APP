import React, { useState } from 'react';
import AddTodo from './Components/Todo/AddTodo';
import AddList from './Components/Todo/AddList';
import './App.css';

function App() {
  const [data, setData] = useState([]);


  const userTodo = (data) => {
    // console.log(data);
    setData((prev) => {
      return [
        {
          id: Math.random().toString(),
          value: data,
        },
        ...prev,
      ];
    });
  };

  const deleteHandler = goalId => {
    setData(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
    console.log(goalId);
  };
  return (
    <div>
      <AddTodo onGet={userTodo} />
      <AddList list={data} onClick={deleteHandler} />
    </div>
  );
}

export default App;
