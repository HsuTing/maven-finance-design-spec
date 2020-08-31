import React from 'react';
import { Tabs } from 'antd';

import './styles/index.less';

const { TabPane } = Tabs;

export default {
  title: 'Components/Tabs',
};

export const Underline = () => (
  <>
    <Tabs defaultActiveKey="1" size="small">
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
