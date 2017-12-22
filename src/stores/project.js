import { observable,action } from 'mobx';
import axios from 'axios';

class project {
    @observable data;
    @observable state;
    constructor() {
        this.data = [];
        this.state = 0;
    }
    @action handleState = (state) => {
        this.state = state;
    }
    @action fetchProject = (name) => {
        let fetchURL = `/api/branches`;
        axios.get(`${fetchURL}?name=${name}`)
        .then(
            action("fetchProject_sucess", (res) => {
                let {data} = res;
                this.data = data.data;
            })
        )
        .catch(
            action("fetchProject_error", (err) => {
                this.data = [];
            })
        )
    }
    @action fetchPublish = (name, branch) => {
        let fetchURL = `/api/build`;
        this.state = -1;
        return axios.get(`${fetchURL}?name=${name}&branch=${branch}`)
        // return {
        //     data: {
        //         code: 200
        //     }
        // }
        // .then(
        //     action("fetchPublish_sucess", (res) => {
        //     this.state = 0;
        // })
        // )
        // .catch(
        //     action("fetchPublish_error", (err) => {
        //     this.state = 0;
        // })
        // )     
    }
}


const projectObj = new project();

export default projectObj;