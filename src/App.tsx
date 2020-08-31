import React from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import LHeader from './components/Header';
import PageRouter from './router/page_router';
import './App.scss';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

function App() {
    return (
        <Layout className="App">
            <Header className="header">
                <LHeader/>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        <SubMenu key="sub1" title="系统管理" icon={<UserOutlined />}>
                            <Menu.Item key="1">用户管理</Menu.Item>
                            <Menu.Item key="2">角色管理</Menu.Item>
                            <Menu.Item key="3">权限管理</Menu.Item>
                            <Menu.Item key="4">菜单管理</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <PageRouter/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default App;
