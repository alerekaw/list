import React from 'react';
import styles from './list.module.css';

function List() {
    return (
        <div className={styles.list}>
            <button className={styles.button}> x </button>
            &nbsp;
            Here will be a list of items
    
        </div>  
    
    );
}

export default List;