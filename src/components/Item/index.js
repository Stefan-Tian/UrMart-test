import React from 'react';
import { ItemLink, ItemTitle } from './style';

const Item = ({ title, thumbnails, videoId }) => {
  return (
    <ItemLink href={`https://www.youtube.com/watch?v=${videoId}`}>
      <img src={thumbnails.medium.url} alt={title} />
      <ItemTitle>{title}</ItemTitle>
    </ItemLink>
  );
};

export default Item;
