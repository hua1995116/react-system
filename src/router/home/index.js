import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { List, Avatar, Icon } from 'antd';
import './index.css'

const data = [
{
    title: 'webchat',
    type: 'Javascript',
    description: '基于vue2.0的实时聊天项目'
},
{
    title: 'musiccloudWebapp',
    type: 'Vue',
    description: 'vuejs仿网易云音乐'
},
{
    title: 'react-shopping',
    type: 'JavaScript ',
    description: '基于react的购物车实战项目'
},
{
    title: 'myblog',
    type: 'HTML',
    description: 'a blog for hua1995116.'
},
];

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
);

@observer class Home extends React.Component{
    render () {
        return (
            <div className="page-home">
                <div className="page-header">
                    我的项目
                </div>
                <div className="page-list">
                    <div className="page-list-item">
                        <List
                            itemLayout="vertical"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item
                                actions={[<IconText type="tag" text={item.type} />, <IconText type="star" text="156" />, <IconText type="fork" text="2" />]}
                                >
                                <List.Item.Meta
                                title={<Link to="/project">{item.title}</Link>}
                                description={item.description}
                                />
                            </List.Item>
                        )}
                        />
                    </div>
                    <div className="page-list-info">
                        <div className="info-header">
                            <code>
                                git clone ssss

                                cd ssss
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;