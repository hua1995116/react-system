import React from 'react';
import { observer } from 'mobx-react'

@observer class Project extends React.Component {
    render() {
        return (
            <div className="project">
                <div>project page</div>
            </div>
        )
    }
}

export default Project;