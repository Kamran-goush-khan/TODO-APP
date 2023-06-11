import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddTodo.module.css';

export default function AddTodo(props) {
  const [input, setInput] = useState('');
  const [error , setError] = useState();

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (input.trim().length === 0) {
      setError({
        title: 'An Invalid Error!',
        message: "Value's Cannot be Empty. Please Enter To do!",
      });
    } else {
      props.onGet(input);

      setInput('');
    }
  };

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
    {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    <Card className={styles.mainDiv}>
      <h2>TO-DO LIST</h2>
      <form onSubmit={submitFormHandler}>
        <label htmlFor="">Your Todo : </label>

        <input
          type="text"
          name="user_todo"
          id="user_todo"
          placeholder="Enter Here"
          onChange={inputChangeHandler}
          value={input}
        />
        <br />
        <Button type="submit">Add Todo</Button>
      </form>
    </Card>
    </>
  );
}
