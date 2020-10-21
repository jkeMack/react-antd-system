import React, {useState, useEffect} from 'react';
import {Layout, Menu, Breadcrumb, Drawer, Tooltip} from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    SettingOutlined,
    CloseOutlined,
    CheckOutlined
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import LHeader from './components/Header';
import './App.less';

const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

function App(props:any) {
    const [visible, setVisible] = useState(false);
    const [themeIndex, setThemeIndex] = useState(0);

    const themeList = [
        {title: '拂晓蓝(默认)', theme: 'theme-daybreak', color: 'rgb(24, 144, 255)'},
        {title: '薄暮', theme: 'theme-dust', color: 'rgb(245, 34, 45)'},
        {title: '火山', theme: 'theme-volcano', color: 'rgb(250, 84, 28)'},
        {title: '日暮', theme: 'theme-sunset', color: 'rgb(250, 173, 20)'},
        {title: '明青', theme: 'theme-cyan', color: 'rgb(19, 194, 194)'},
        {title: '极光绿', theme: 'theme-green', color: 'rgb(82, 196, 26)'},
        {title: '极客蓝', theme: 'theme-geekblue', color: 'rgb(47, 84, 235)'},
        {title: '酱紫', theme: 'theme-purple', color: 'rgb(114, 46, 209)'},
    ];

    const menus = [
        {
            key: 'demo', name: '组件样式', icon: <LaptopOutlined/>, url: '', children: [
                {key: 'ui', name: 'UI组件', url: '/uiDemo'}
            ]
        },
        {
            key: 'system', name: '系统管理', icon: <UserOutlined/>, url: '', children: [
                {key: 'user', name: '用户管理', url: '/userManage'},
                {key: 'role', name: '角色管理', url: '/home/role'},
                {key: 'menu', name: '菜单管理', url: '/home/menu'},
            ]
        },
    ];

    const menusTemplate = menus.map(item => {
        return <SubMenu key={item.key} title={item.name} icon={item.icon}>
            {item.children.map(menu => {
                return <Menu.Item key={menu.key} onClick={() => goPage(menu.url)}>{menu.name}</Menu.Item>;
            })}
        </SubMenu>
    });

    let history = useHistory();
    const goPage = (url: string) => {
        history.push(url);
    };

    const themeBlockList = themeList.map((item, index) => {
        return <Tooltip title={item.title} key={index}>
            <div className="theme-color-block" style={{backgroundColor: item.color}}
                 onClick={() => setTheme(index)}>
                {index === themeIndex ? <CheckOutlined/> : ''}
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
    },[]);

    useEffect(() => {
        if(props.location.pathname === '/'){
            history.push('/uiDemo');
        }
    }, [props.location.pathname])

    return (
        <Layout className='App'>
            <Header className="layout-header">
                <LHeader/>
            </Header>
            <Layout className="layout-body">
                <Sider width={200} className="layout-sider">
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['ui']}
                        defaultOpenKeys={['demo']}
                        style={{height: '100%', borderRight: 0}}
                    >
                        {menusTemplate}
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
                        {renderRoutes(props.route.routes)}
                    </Content>
                </Layout>
            </Layout>

            <div className="app-setting-toggle" style={{right: visible ? '300px' : '0'}} onClick={toggleSettingDrawer}>
                {visible ? <CloseOutlined/> : <SettingOutlined/>}
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
