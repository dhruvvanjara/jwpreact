import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;

const card: React.FC = ({ videoDetails }) => (
  <Card
    className="dark:md:hover:bg-[#e8d170]"
    hoverable
    style={{ width: 370 }}
    cover={<img alt="example" src={videoDetails.image} />}
  >
    <Meta title={videoDetails.title} />
  </Card>
);

export default card;
