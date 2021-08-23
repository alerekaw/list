import React, { useEffect } from 'react';
import styles from './list.module.css';
import {useState} from 'react';


const List = () => {
    const [itemsList, setItemsList] = useState([]);
    const [ userInput, setUserInput ] = useState();
    useEffect(() => {
        setItemsList(["iphone", "mac", "laptop"]);

    }, [])
     
    const addItem = (e) =>{
        let copy = [...itemsList]
        copy = [...copy, userInput]
        setItemsList(copy);
     }

     const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
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
                <li key={idx}> <button className={styles.button}> x </button> {el}  </li>
            ))}
           
</ul>
</div>
);
};

export default List;