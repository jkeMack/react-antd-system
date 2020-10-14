import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb, Drawer, Tooltip } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    SettingOutlined,
    CloseOutlined,
    CheckOutlined
} from '@ant-design/icons';
import LHeader from './components/Header';
import PageRouter from './router/page_router';
import './App.less';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
    const [visible, setVisible] = useState(false);
    const [themeIndex, setThemeIndex] = useState(0);

    const themeList = [
        { title: '拂晓蓝(默认)', theme: 'theme-daybreak', color: 'rgb(24, 144, 255)' },
        { title: '薄暮', theme: 'theme-dust', color: 'rgb(245, 34, 45)' },
        { title: '火山', theme: 'theme-volcano', color: 'rgb(250, 84, 28)' },
        { title: '日暮', theme: 'theme-sunset', color: 'rgb(250, 173, 20)' },
        { title: '明青', theme: 'theme-cyan', color: 'rgb(19, 194, 194)' },
        { title: '极光绿', theme: 'theme-green', color: 'rgb(82, 196, 26)' },
        { title: '极客蓝', theme: 'theme-geekblue', color: 'rgb(47, 84, 235)' },
        { title: '酱紫', theme: 'theme-purple', color: 'rgb(114, 46, 209)' },
    ];

    const themeBlockList = themeList.map((item, index) => {
        return <Tooltip title={item.title} key={index}>
            <div className="theme-color-block" style={{ backgroundColor: item.color }}
                onClick={() => setTheme(index)}>
                {index === themeIndex ? <CheckOutlined /> : ''}
            </div>
        </Tooltip>
    });

    const toggleSettingDrawer = () => {
        setVisible(!visible);
    };

    const setTheme = (index: number) => {
        setThemeIndex(index);
        // 将主题class设置在body上，某些组件是不在项目容器包裹里的，不设置在body上原生变量无效
        document.body.className = themeList[index].theme;
    };


    useEffect(() => {
        setTheme(0);
    });

    return (
        <Layout className='App'>
            <Header className="layout-header">
                <LHeader />
            </Header>
            <Layout className="layout-body">
                <Sider width={200} className="layout-sider">
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['5']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
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
                        <PageRouter />
                    </Content>
                </Layout>
            </Layout>

            <div className="app-setting-toggle" style={{ right: visible ? '300px' : '0' }} onClick={toggleSettingDrawer}>
                {visible ? <CloseOutlined /> : <SettingOutlined />}
            </div>

            <Drawer
                forceRender={true}
                width="300px"
                placement="right"
                closable={true}
                maskClosable={false}
                onClose={toggleSettingDrawer}
                visible={visible}
            >
                <div className="ant-setting-drawer-content">
                    <h3 className="ant-setting-drawer-title">主题色</h3>
                    <div className="theme-color-content">
                        {themeBlockList}
                    </div>
                </div>
            </Drawer>
        </Layout>
    );
}

export default App;
