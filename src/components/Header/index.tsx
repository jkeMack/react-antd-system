import React from 'react';
import {Space, Avatar} from 'antd';
import {SearchOutlined, MessageOutlined} from '@ant-design/icons';

function LHeader() {
    return (
        <Space size="large">
             <SearchOutlined/>
             <MessageOutlined />
             <Avatar size="large" gap={2}>
                user
            </Avatar>
        </Space>
    );
}

export default LHeader;
