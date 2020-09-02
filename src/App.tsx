import React from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import LHeader from './components/Header';
import PageRouter from './router/page_router';
import './App.less';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

function App() {
    return (
        <Layout className="App theme-light">
            <Header className="layout-header">
                <LHeader/>
            </Header>
            <Layout className="layout-body">
                <Sider width={200} className="layout-sider">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['5']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        <SubMenu key="sub1" title="组件样式" icon={<LaptopOutlined />}>
                            <Menu.Item key="5">UI组件</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title="系统管理" icon={<UserOutlined />}>
                            <Menu.Item key="1">用户管理</Menu.Item>
                            <Menu.Item key="2">角色管理</Menu.Item>
                            <Menu.Item key="3">权限管理</Menu.Item>
                            <Menu.Item key="4">菜单管理</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="layout-body-container">
                    <Breadcrumb className="layout-breadcrumb">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="layout-page-container"
                    >
                        <PageRouter/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default App;
