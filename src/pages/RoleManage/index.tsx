import React from 'react';
import {
    Table, Tag, Space, Button
} from 'antd';

function RoleManage() {

    const columns = [
        {
            title: '角色名称',
            dataIndex: 'name',
            key: 'name',
            render: (text:string) => <a>{text}</a>,
        },
        {
            title: '角色描述',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '创建时间',
            dataIndex: 'createdTime',
            key: 'createdTime',
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
            name: '测试角色',
            description: '用于基础的演示用，包含基础菜单',
            status: '启用',
            createdTime: '2020-10-22 09:09:10'
        }
    ];

    return (
        <div className="l-panel">
            <Table columns={columns} dataSource={data} bordered />
        </div>
    );
}

export default RoleManage;
