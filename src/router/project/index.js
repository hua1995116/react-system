import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Select, Input,Breadcrumb, Icon, notification  } from 'antd';
import './index.css';
const Option = Select.Option;

// const data = [
//     {
//         key: 'master',
//         value: 'master',
//     },
//     {
//         key: 'dev',
//         value: 'dev',
//     },
//     {
//         key: 'feature-fix',
//         value: 'feature-fix',
//     }
// ]

@inject('project') @observer class Project extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            branch: 'master',
        }
	}
    handleChange(value) {
        // console.log(`selected ${value}`);
        this.setState({branch: value});
    }
    componentWillMount(props){
        let {fetchProject} = this.props.project;
        let { hash } = window.location;
		fetchProject(hash.replace('#', ''));
    }
    async handlePublish() {
        let {handleState, fetchPublish, state} = this.props.project;
        if(state === 0) {
            let { hash } = window.location;
            let name = hash.replace('#', '');
            let branch = this.state.branch;
            const res = await fetchPublish(name, branch);
            const code = res.data.code;
            if(code === 200) {
                handleState(0);
                notification['success']({
                    message: '提示',
                    description: '恭喜,发布成功！',
                });
            } else if (code === 100){
                handleState(0);
                notification['error']({
                    message: '提示',
                    description: '很抱歉,发布失败',
                });
            }
            console.log(res);
           
        } else if (state === -1) {
            notification.open({
                message: '提示',
                description: '发布中，别急，再等等~',
            });
        }
    }
    render() {
        let {project} = this.props;
        let {data , state} = project;
        let { hash } = window.location;
        let stateText;
        if(state === 0) {
            stateText = '发布'
        } else if (state === -1) {
            stateText = <div><Icon type="loading" />&nbsp;&nbsp;发布中</div>
        }
        return (
            <div className="project-page">
                <div className="page-top">
                    <div className="project-page-header">
                        <header>
                            <Breadcrumb>
                                <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>发布页面</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>{hash}</h1>
                        </header>
                        <ul>
                            <li>
                                <span className="label">选择分支: </span>
                                <Select defaultValue="master" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
                                {data.map((item, index) => {
                                    return <Option key={index} value={item.name}>{item.name}</Option>
                                })}
                                </Select>
                            </li>
                            <li>
                                <span className="label">输入ip地址:</span>
                                <Input placeholder="输入ip地址" />
                            </li>
                            <li>
                                <span className="label">输入目录:</span>
                                <Input placeholder="输入目录" />
                            </li>
                        </ul>
                    </div>
                    <div className="project-page-tool">
                        <div className="btn project-btn" onClick={this.handlePublish.bind(this)}>
                            {stateText}
                        </div>
                    </div>
                </div>
                <div className="page-middle">
                    <div className="middle-slope">
                        <div className="middle-slope-scope"></div>
                    </div>
                    <div className="waveWrapper waveAnimation">
                        <div className="waveWrapperInner bgTop">
                            <div className="wave waveTop"></div>
                        </div>
                        <div className="waveWrapperInner bgMiddle">
                            <div className="wave waveMiddle"></div>
                        </div>
                        <div className="waveWrapperInner bgBottom">
                            <div className="wave waveBottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;