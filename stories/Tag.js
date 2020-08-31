import React from 'react';
import { Tag } from 'antd';

import './styles/index.less';

export default {
  title: 'Components/Tag',
};

export const Default = () => (
  <>
    <Tag>Tag</Tag>
    <Tag color="error">Tag</Tag>
    <Tag color="success">Tag</Tag>
    <Tag color="warning">Tag</Tag>
    <Tag color="processing">Tag</Tag>
  </>
);
