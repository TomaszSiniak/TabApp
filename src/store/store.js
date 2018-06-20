import { observable, action } from 'mobx';

class TabStore {
  @observable tabArr = [];

  @action addTabToStore = () => {
    console.log('added');
  }
}

const store = new TabStore();

export default store;
