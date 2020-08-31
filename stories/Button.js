import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import './styles/index.less';

export default {
  title: 'Components/Button',
};

export const Primary = () => (
  <>
    <Button type="primary" size="large">
      Action
    </Button>
    <Button type="primary" size="large" disabled>
      Disabled
    </Button>
    <br />
    <br />
    <Button type="primary">Action</Button>
    <Button type="primary" danger>
      Action
    </Button>
    <Button type="primary" disabled>
      Disabled
    </Button>
  </>
);

export const Default = () => (
  <>
    <Button>Action</Button>
    <Button danger>Action</Button>
    <Button disabled>Disabled</Button>
  </>
);

export const TwoTone = () => (
  <>
    <Button className="two-tone">Action</Button>
    <Button type="primary" disabled>
      Disabled
    </Button>
    <br />
    <br />
    <Button className="two-tone" icon={<DownloadOutlined />}>
      Action
    </Button>
    <Button className="two-tone" icon={<DownloadOutlined />}>
      按鈕
    </Button>
  </>
);

export const Text = () => (
  <>
    <Button type="text">Text</Button>
    <Button type="text">按鈕</Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="text" disabled>
      Disabled
    </Button>
  </>
);

export const Link = () => (
  <>
    <Button type="link">Link</Button>
    <Button type="link" danger>
      Link
    </Button>
    <Button type="link" disabled>
      Disabled
    </Button>
  </>
);
