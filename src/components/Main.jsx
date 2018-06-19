import React from 'react';
import Sidebar from './Sidebar';
import TabList from './TabList';
import TabContent from './TabContent';
import styles from '../assets/scss/main.scss';

const Main = () => (
  <main className={styles.main}>
    <Sidebar />
    <div className={styles.tab}>
      <TabList />
      <TabContent />
    </div>
  </main>
);
export default Main;
