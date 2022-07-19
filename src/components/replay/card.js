import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;

const card: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://cdn.jwplayer.com/v2/media/e2KXU5bZ/poster.jpg?" />}
  >
    <Meta title="Video Title" description="Sample description." />
  </Card>
);

export default card;
