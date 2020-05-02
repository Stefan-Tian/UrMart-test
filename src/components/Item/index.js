import React from 'react';
import { Link, Title, Image } from './style';

const Item = ({ title, thumbnails, videoId }) => {
  return (
    <Link href={`https://www.youtube.com/watch?v=${videoId}`}>
      <Image src={thumbnails.medium.url} alt={title} />
      <Title>{title}</Title>
    </Link>
  );
};

export default Item;
