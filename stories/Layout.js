import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import './styles/index.less';



export default {
  title: 'Components/Layout',
};



export const SideMenu = () =>

<Layout>
      <Header theme="lgith">Header</Header>
      <Layout>
        <Sider theme="lgith" >Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>