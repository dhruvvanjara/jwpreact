import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;

const card: React.FC = ({ videoDetails }) => (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={<img alt="example" src={videoDetails.image} />}
  >
    <Meta title={videoDetails.title} />
  </Card>
);

export default card;
