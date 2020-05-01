import React from 'react';
import { connect } from 'react-redux';
import Item from '../Item';
import { Container } from './style';
import { getSearchResultByPage } from '../../redux/selectors';

const Items = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <Item
          key={item.id.videoId}
          {...item.snippet}
          videoId={item.id.videoId}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { pageFilter } = state;
  const items = getSearchResultByPage(state, pageFilter);
  return { items };
};

export default connect(mapStateToProps)(Items);
