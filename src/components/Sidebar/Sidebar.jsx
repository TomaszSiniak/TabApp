import React from 'react';
import styles from './sidebar.scss';

const Sidebar = () => (
  <aside className={styles.aside}>
    <form className={styles.form}>
      <button className={styles.button}>Open</button>
      <div className={styles.searchBox}>
        <input className={styles.input} type="text" />
        <button className={styles.searchButton}>Go!</button>
      </div>
    </form>
  </aside>
);
export default Sidebar;
