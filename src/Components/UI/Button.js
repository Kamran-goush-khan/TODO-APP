import React from 'react';

import styles from './Button.module.css';

export default function Button(props) {
  return (
    <button type={props.type || 'button'} className={`${styles.button} ${props.className}`} onClick={props.onClick} id={props.id}>
        {props.children}
    </button>
  )
}
