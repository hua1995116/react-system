import React from 'react';
import { Provider } from 'mobx-react';
import { Route, BrowserRouter} from 'react-router-dom';

import Home from './home';
import Project from './project';
import Login from './login';

import Nav from '../component/nav';
import BottomNav from '../component/BottomNav';

import stores from '../stores';

class Component extends React.Component {
    render () {
        return (
            <Provider {...stores}>
                <BrowserRouter>
                    <div className="container">
                        <Nav></Nav>
                        <div className="content">
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/project" component={Project}></Route>
                            <Route path="/login" component={Login}></Route>
                        </div>
                        <BottomNav></BottomNav>
                    </div>
                </BrowserRouter>
            </Provider>    
        )
    }
}

export default Component;