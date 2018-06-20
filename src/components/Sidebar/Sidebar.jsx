import React from 'react';
import { inject, observer } from 'mobx-react';
import styles from './sidebar.scss';


@inject('store')
@observer
class Sidebar extends React.Component {

  addTab = (e) => {
    e.preventDefault();
    this.props.store.addTabToStore();
  }

  render() {
    return (
      <aside className={styles.aside}>
        <form className={styles.form}>
          <button className={styles.button} onClick={this.addTab}>Open</button>
          <div className={styles.searchBox}>
            <input className={styles.input} type="text" />
            <button className={styles.searchButton}>Go!</button>
          </div>
        </form>
      </aside>
    );
  }
}
export default Sidebar;
