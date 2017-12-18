import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Select, Input,Breadcrumb } from 'antd';
import './index.css';
const Option = Select.Option;

const data = [
    {
        key: 'master',
        value: 'master',
    },
    {
        key: 'dev',
        value: 'dev',
    },
    {
        key: 'feature-fix',
        value: 'feature-fix',
    }
]

@observer class Project extends React.Component {
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        return (
            <div className="project-page">
                <div className="page-top">
                    <div className="project-page-header">
                        <header>
                            <Breadcrumb>
                                <Breadcrumb.Item><Link to="/">首页</Link></Breadcrumb.Item>
                                <Breadcrumb.Item>发布页面</Breadcrumb.Item>
                            </Breadcrumb>
                            <h1>webchat</h1>
                        </header>
                        <ul>
                            <li>
                                <span className="label">选择分支: </span>
                                <Select defaultValue="master" style={{ width: 120 }} onChange={this.handleChange}>
                                {data.map((item, index) => {
                                    return <Option key={index} value={item.value}>{item.key}</Option>
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
                        <div className="btn project-btn">
                            发布
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