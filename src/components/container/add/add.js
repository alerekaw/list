import React from 'react';
import styles from './add.module.css';

function Add(){
    return (
        <div>
            <div>
            <input 
            className={styles.input}/></div>
            <div>
            <button className={styles.button}> Add item </button>
            </div>
        </div>
    )
}

export default Add;