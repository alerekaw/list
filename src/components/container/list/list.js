import React, { useEffect } from 'react';
import styles from './list.module.css';
import {useState} from 'react';


const List = () => {
    const [itemsList, setItemsList] = useState([]);
    const [ userInput, setUserInput ] = useState();
    useEffect(() => {
        setItemsList([{
            "id": 1,
            "task": "iphone",
            "complete": true
          },
          {"id": 2,
          "task": "czekolada",
          "complete": true},
          {"id": 3,
          "task": "jajka",
          "complete": true},
          {"id": 4,
          "task": "majtki",
          "complete": true},
          {"id": 5,
          "task": "skrarpety",
          "complete": true},
          {"id": 6,
          "task": "antyperspirant dla Sebusia",
          "complete": true},
        ]);

    }, [])
     
    const addItem = (e) =>{
        let copy = [...itemsList]
        copy = [...copy, {"id": copy.length-1,
                        "task": userInput,
                        "complete": false}]
        setItemsList(copy);
     }

     const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const deleteItem = (e) =>{
        let copy = [...itemsList]
        const index = e.currentTarget.id
        if (index > -1) {copy.splice(index, 1)}
        setItemsList(copy);
    }

    
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    const handleToggle = (id) => {
        let mapped = itemsList.map(item => {
            return item.id === Number(id) ? {...item, complete: !item.complete} : {...item};
        })
        setItemsList(mapped);
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
                <li key={idx} className={!el.complete ? styles.strike : ""}> 
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