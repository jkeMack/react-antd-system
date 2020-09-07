import React from 'react';
import {
    Button,
    Space,
    Pagination,
    Steps,
    Form,
    Input,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch
} from 'antd';
import {
    UserOutlined,
    SolutionOutlined,
    SmileOutlined,
    LoadingOutlined
} from '@ant-design/icons';
import './index.less';

const {Step} = Steps;

function UiDemo() {
    return (
        <div>
            <div className="l-panel">
                <Space>
                    <Button type="primary">主色按钮</Button>
                    <Button>默认按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <br/>
                    <Button type="text">文本按钮</Button>
                    <Button type="link">链接按钮</Button>
                </Space>
            </div>

            <div className="l-panel">
                <Pagination defaultCurrent={1} total={50}/>
            </div>

            <div className="l-panel">
                <Steps>
                    <Step status="finish" title="Login" icon={<UserOutlined/>}/>
                    <Step status="finish" title="Verification" icon={<SolutionOutlined/>}/>
                    <Step status="process" title="Pay" icon={<LoadingOutlined/>}/>
                    <Step status="wait" title="Done" icon={<SmileOutlined/>}/>
                </Steps>
            </div>

            <div className="l-panel">
                <Form
                    labelCol={{span: 4}}
                    wrapperCol={{span: 14}}
                    initialValues={{ size: 'default'}}
                    layout="horizontal"
                >
                    <Form.Item label="Form Size" name="size">
                        <Radio.Group>
                            <Radio value="small">Small</Radio>
                            <Radio value="default">Default</Radio>
                            <Radio value="large">Large</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Input">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Select">
                        <Select>
                            <Select.Option value="demo">Demo</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="TreeSelect">
                        <TreeSelect
                            treeData={[
                                {title: 'Light', value: 'light', children: [{title: 'Bamboo', value: 'bamboo'}]},
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Cascader">
                        <Cascader
                            options={[
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                            value: 'hangzhou',
                                            label: 'Hangzhou',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="DatePicker">
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item label="InputNumber">
                        <InputNumber/>
                    </Form.Item>
                    <Form.Item label="Switch">
                        <Switch defaultChecked/>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default UiDemo;
