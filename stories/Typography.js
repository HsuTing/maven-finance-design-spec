import React from 'react';
import { Typography, Space } from 'antd';
const { Title, Text, Link } = Typography;

import './styles/index.less';

export default {
  title: 'Components/Typography',
};

export const Header = () => (
  <>
    <Title>Heading 1</Title>
    <Title level={2}>Heading 2</Title>
    <Title level={3}>Heading 3</Title>
    <Title level={4}>Heading 4</Title>
    <Title>標題 1</Title>
    <Title level={2}>標題 2</Title>
    <Title level={3}>標題 3</Title>
    <Title level={4}>標題 4</Title>
  </>
);

export const Body = () => (
  <Space direction="vertical">
    <Text>Ant Design</Text>
    <Text type="secondary">Ant Design</Text>
    <Text type="warning">Ant Design</Text>
    <Text type="danger">Ant Design</Text>
    <Text disabled>Ant Design</Text>
    <Text underline>Ant Design</Text>
    <Text delete>Ant Design</Text>
    <Text strong>Ant Design</Text>
    <Link href="https://ant.design" target="_blank">
      Ant Design
    </Link>
  </Space>
);
