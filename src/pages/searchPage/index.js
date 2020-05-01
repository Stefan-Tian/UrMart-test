import React from 'react';
import Searchbar from '../../components/Searchbar';
import { Container } from './style';
import Items from '../../components/Items';
import Pagination from '../../components/Pagination';

const SearchPage = () => {
  return (
    <Container>
      <Searchbar />
      <Items />
      <Pagination />
    </Container>
  );
};

export default SearchPage;
