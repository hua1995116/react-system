import React from 'react';
import { observer } from 'mobx-react'

@observer class Login extends React.Component {
    render() {
        return (
            <div className="login">
                <div>login page</div>
            </div>
        )
    }
}

export default Login;