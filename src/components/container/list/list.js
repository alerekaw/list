import React, { useEffect } from 'react';
import styles from './list.module.css';
import {useState} from 'react';


const List = () => {
    const [itemsList, setItemsList] = useState([]);
    const [ userInput, setUserInput ] = useState();
    useEffect(() => {
        setItemsList(["phone"]);

    }, [])
     
    const addItem = (e) =>{
        let copy = [...itemsList]
        copy = [...copy, userInput]
        setItemsList(copy);
     }

     const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const deleteItem = (e) =>{
        let copy = [...itemsList]
        const index = copy.indexOf(e.currentTarget.id)
        if (index > -1) {copy.splice(index, 1)}
        setItemsList(copy);
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
                <li key={idx}> 
                <button>
             x </button> {el}  <button id={el} onClick={deleteItem}>Delete</button></li>
            ))}
           
</ul>
</div>
);
};

export default List;