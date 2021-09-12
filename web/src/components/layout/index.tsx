import React from "react";

import { Layout, Menu, Breadcrumb } from 'antd';
import { DashboardOutlined, ApartmentOutlined, MacCommandOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
import './index.scss';

export class DefaultLayout extends React.Component<any, any> {
    render() {
        return (
            <Layout>
                <Header className="ExplosivesHeader">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
                        <Menu.Item key="2" icon={<ApartmentOutlined />}>Proxy</Menu.Item>
                        <Menu.Item key="3" icon={<MacCommandOutlined />}>Log</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 25 }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}