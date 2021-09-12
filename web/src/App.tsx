import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import { DefaultLayout } from './components/layout/index'

import { Layout, Menu, Breadcrumb } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;


function App() {
  return (
    <DefaultLayout />
  );
}

export default App;
