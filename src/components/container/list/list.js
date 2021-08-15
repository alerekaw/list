import React from 'react';
import styles from './list.module.css';

var key
var size = localStorage.length

function GetList(){
    var listELements = []
    for (key=0; key<size; key++) {
        var element = <li><button className={styles.button}>x</button>  {localStorage.getItem(key+1)}</li>
        listELements.push(element)
    }
return <ul>
{listELements}
</ul>;
}

function List() {
    return (
        <div className={styles.list}>
            <GetList />
        </div>  
    
    );
}

export default List;