import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import TabList from '../TabList/TabList';
import TabContent from '../TabContent/TabContent';
import styles from './main.scss';

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
