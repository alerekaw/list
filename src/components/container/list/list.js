import React, { useEffect } from 'react';
import styles from './list.module.css';
import { useState } from 'react';
import Input from './input/input';


const List = () => {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        let listEl = localStorage.getItem("list");
        let list = JSON.parse(listEl ?? []);
        setItemsList(list);
    },[]);

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
                <Input 
                    itemsList={itemsList}
                    setItemsList={setItemsList}
                />

            <ul className={styles.list}>
                {itemsList.map((el, idx) => (
                    <li key={idx} className={el.complete ? styles.strike : ""}>
                        <button id={el.id} onClick={handleClick} className={styles.complete}>
                        ✓ </button>
                        <button id={idx} onClick={deleteItem} className={styles.delete}>✘</button>
                        {el.task}</li>
                ))}

            </ul>
        </div>
    );
};

export default List;