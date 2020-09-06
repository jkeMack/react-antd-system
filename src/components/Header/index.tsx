import React from 'react';
import {Space, Avatar, Popover} from 'antd';
import {SearchOutlined, MessageOutlined} from '@ant-design/icons';

function LHeader() {
    return (
        <Space size="large">
            <Popover content="全局搜索">
                <SearchOutlined/>
            </Popover>
            <Popover content="资讯消息">
                <MessageOutlined/>
            </Popover>
            <Avatar size="large" gap={2}>
                user
            </Avatar>
        </Space>
    );
}

export default LHeader;
