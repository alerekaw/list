import React from 'react';
import Header from './Header/header';
import Add from './add/add';
import List from './list/list';
import styles from './container.module.css';

function Container() {
  return (
    <div className={styles.Container}>
      <Header />
      <Add />
      <List />
    </div>
  );
}

export default Container;