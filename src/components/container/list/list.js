import React, { useEffect } from 'react';
import styles from './list.module.css';
import { useState } from 'react';


const List = () => {
    const [itemsList, setItemsList] = useState([]);
    const [userInput, setUserInput] = useState();

    useEffect(() => {
        let listEl = localStorage.getItem("list");
        let list = JSON.parse(listEl ?? []);
        setItemsList(list);
    },[]);

    const addItem = (e) => {
        let copy = [...itemsList]
        copy = [...copy, {
            "id": copy.length - 1,
            "task": userInput,
            "complete": false
        }]
        setItemsList(copy);
        localStorage.setItem("list", JSON.stringify(copy))
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const deleteItem = (e) => {
        let copy = [...itemsList]
        const index = e.currentTarget.id
        if (index > -1) { copy.splice(index, 1) }
        setItemsList(copy);
        localStorage.setItem("list", JSON.stringify(copy))
    }


    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    const handleToggle = (id) => {
        let mapped = itemsList.map(item => {
            return item.id === Number(id) ? { ...item, complete: !item.complete } : { ...item };
        })
        setItemsList(mapped);
        localStorage.setItem("list", JSON.stringify(mapped))

    }

    return (
        <div>
            <div>
                <div>
                    <input
                        value={userInput} onChange={handleChange}
                        placeholder="Type an item..."
                        className={styles.input}
                        type="text"
                    /></div>
                <div>
                    <button
                        onClick={(e) => addItem(e)}
                        className={styles.button}> Add product </button>

                </div>
            </div>

            <ul className={styles.list}>
                {itemsList.map((el, idx) => (
                    <li key={idx} className={el.complete ? styles.strike : ""}>
                        <button id={el.id} onClick={handleClick}>
                            x </button>
                        {el.task}
                        <button id={idx} onClick={deleteItem}>Delete</button></li>
                ))}

            </ul>
        </div>
    );
};

export default List;