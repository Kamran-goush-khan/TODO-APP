import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddList.module.css';

export default function AddList(props) {
  const [completedTasks, setCompletedTasks] = useState([]);

  const deleteHandler = (id) => {
    props.onClick(id);
  };

  const checkHandler = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  return (
    <Card className={styles.deco}>
      <ul>
        <div className="container">
          {props.list.map((item) => {
            const isCompleted = completedTasks.includes(item.id);
            return (
              <li key={item.id} className={isCompleted ? styles.over : ''}>
                {item.value}
                <Button
                  className={styles.button}
                  onClick={() => deleteHandler(item.id)}
                >
                  <i className="fa-solid fa-trash fa-xl"></i>
                </Button>
                {!isCompleted && (
                  <Button
                    className={styles.buttonCheck}
                    onClick={() => checkHandler(item.id)}
                  >
                    <i className="fa-solid fa-check fa-lg"></i>
                  </Button>
                )}
                {isCompleted && (
                  <Button
                    className={styles.buttonCheck}
                    onClick={() => checkHandler(item.id)}
                  >
                    <i className="fa-solid fa-x fa-lg"></i>
                  </Button>
                )}
              </li>
            );
          })}
        </div>
      </ul>
    </Card>
  );
}
