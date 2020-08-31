import React from 'react';
import { Menu, Button } from 'antd';
import { LineChartOutlined, UnorderedListOutlined, SlidersOutlined } from '@ant-design/icons';
const { SubMenu } = Menu

import './styles/index.less';

export default {
  title: 'Components/Menu',
};

export const SideMenu = () =>

<div style={{ width: 208 }}>
  <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="lgith">
    <Menu.Item key="1" icon={<LineChartOutlined />}>熱門公司</Menu.Item>
    <Menu.Item key="2" icon={<UnorderedListOutlined />}>公司列表</Menu.Item>
    <Menu.Item key="3" icon={<SlidersOutlined />}>篩選器</Menu.Item>
  </Menu>
</div>