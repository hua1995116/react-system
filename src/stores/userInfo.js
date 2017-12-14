import { observable } from 'mobx';

class userInfo {
    @observable data;
    constructor() {
        this.data = null;
    }
}

const user = new userInfo();

export default user;