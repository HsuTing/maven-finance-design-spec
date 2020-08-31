import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import './styles/index.less';

export default {
  title: 'Components/Tabs',
};

function callback(key) {
  console.log(key);
}

export const Underline = () => (
  <>
    <Tabs defaultActiveKey="1" onChange={callback} size="small">
      <TabPane tab="公司資訊" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="損益表" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="資產負債表" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  </>
);
