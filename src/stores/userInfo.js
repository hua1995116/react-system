import { observable,action } from 'mobx';
import axios from 'axios';

class userInfo {
    @observable data;
    constructor() {
        this.data = [];
    }
    @action fetchUserInfo = () => {
        let fetchURL = `/api/repos`;
        axios.get(fetchURL)
        .then(
            action("fetchUserInfo_sucess", (res) => {
                let {data} = res;
                this.data = data.data;
            })
        )
        .catch(
            action("fetchUserInfo_error", (err) => {
                this.data = [{
                        title: 'myblog',
                        type: 'HTML',
                        description: 'a blog for hua1995116.'
                    }];
            })
        )
    }
}

const user = new userInfo();

export default user;