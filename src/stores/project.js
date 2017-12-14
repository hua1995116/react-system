import { observable } from 'mobx';

class project {
    @observable data;
    constructor() {
        this.data = null;
    }
}

const projectObj = new project();

export default projectObj;