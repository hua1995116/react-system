import React from 'react';
import './index.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="nav-bar-left">前端发布系统</div>
                <div className="nav-bar-right">欢迎你，华益峰</div>
            </div>
        )
    }
}

export default Nav;