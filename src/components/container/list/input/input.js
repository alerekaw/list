import React, { useState } from 'react';
import styles from './input.module.css';

const Input = (props) => {
    const [userInput, setUserInput] = useState();

    const addItem = (e) => {
        let copy = [...props.itemsList]
        copy = [...copy, {
            "id": copy.length - 1,
            "task": userInput,
            "complete": false
        }]
        props.setItemsList(copy);
        localStorage.setItem("list", JSON.stringify(copy))
    }

    const handleUserInputChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <input
                    value={userInput} onChange={handleUserInputChange}
                    placeholder="Type an item..."
                    type="text"
                    className={styles.input}
                /></div>
            <div>
                <button
                    className={styles.button}
                    onClick={(e) => addItem(e)}> Add product </button>
            </div>
        </div>
    )
}

export default Input;