import React from 'react';
import { Radio } from 'antd';

import './styles/index.less';

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}

export default {
  title: 'Components/Radio',
};

export const SideMenu = () => (
  <Radio.Group onChange={onChange} defaultValue="a">
    <Radio.Button value="a">平面區域圖</Radio.Button>
    <Radio.Button value="b">圓餅圖</Radio.Button>
  </Radio.Group>
);
