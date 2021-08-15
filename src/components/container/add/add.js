import React from 'react';
import styles from './add.module.css';
import {useRef} from 'react';


function Add(){
    var value= useRef()
   
    const addItem = () =>{
        var key = localStorage.length + 1
            window.localStorage.setItem(key, value.current.value)
        
    }
    return (
        <div>
            <div>
            <input 
            placeholder="Type an item..."
            className={styles.input}
            type="text"
            ref={value}
            /></div>
            <div>
            <button 
                onClick={addItem}
                className={styles.button}> Add product </button>
            </div>
        </div>
    )
}

export default Add;