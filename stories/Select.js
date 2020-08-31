import React from 'react';
import { Select } from 'antd';

import './styles/index.less';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default {
  title: 'Components/Select',
};

export const Default = () => (
  <Select defaultValue="5 years" style={{ width: 120 }} onChange={handleChange}>
    <Option value="5 years">近五年</Option>
    <Option value="lucy">近三年</Option>
    <Option value="disabled" disabled>
      近十年
    </Option>
    <Option value="Yiminghe">全部</Option>
  </Select>
);
