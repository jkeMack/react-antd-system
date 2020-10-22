import React from 'react';
import {
    Table, Tag, Space, Button
} from 'antd';

function UserManage() {

    const columns = [
        {
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
            render: (text:string) => <a>{text}</a>,
        },
        {
            title: '昵称',
            dataIndex: 'nickName',
            key: 'nickName',
        },
        {
            title: '角色名称',
            dataIndex: 'roleName',
            key: 'roleName',
        },
        {
            title: '手机号',
            dataIndex: 'telephone',
            key: 'telephone',
        },
        {
            title: '邮箱地址',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        },
        {
            title: '启用状态',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '登录状态',
            dataIndex: 'loginStatus',
            key: 'loginStatus',
        },
        {
            title: '最新登录时间',
            dataIndex: 'recentLoginTime',
            key: 'recentLoginTime',
        },
        {
            title: '操作',
            key: 'action',
            width: 100,
            render: () => (
                <Space size="small">
                    <Button type="primary">编辑</Button>
                    <Button danger>删除</Button>
                </Space>
            ),
        },
    ];

    const data = [
        {
            name: 'admin',
            nickName: '超级管理员',
            roleName: '管理员',
            telephone: '1888888888',
            email: '66666@qq.com',
            sex: '男',
            status: '启用',
            loginStatus: '在线',
            recentLoginTime: '2020-10-22 09:09:10'
        }
    ];

    return (
        <div className="l-panel">
            <Table columns={columns} dataSource={data} bordered />
        </div>
    );
}

export default UserManage;
