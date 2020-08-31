import React from 'react';
import { Alert } from 'antd';

import './styles/index.less';

export default {
  title: 'Components/Alert',
};

export const Icon = () => (
  <>
    <Alert message="Success Tips" type="success" showIcon />
    <Alert message="Informational Notes" type="info" showIcon />
    <Alert message="Warning" type="warning" showIcon closable />
    <Alert message="Error" type="error" showIcon />
  </>
);
