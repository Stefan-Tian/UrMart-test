import React from 'react';
import { setPage } from '../../redux/actions/pageFilter';
import { connect } from 'react-redux';
import { Container, PageUnit } from './style';

const Pagination = ({ totalPage, currentPage, setPage }) => {
  return (
    <Container>
      {[...Array(totalPage).keys()].map((page) => (
        <PageUnit
          key={`page-${page}`}
          onClick={() => setPage(page + 1)}
          status={currentPage === page + 1 ? 'active' : 'normal'}
        >
          {page + 1}
        </PageUnit>
      ))}
    </Container>
  );
};

const mapStateToProps = (state) => {
  const currentPage = state.pageFilter;
  const totalPage = state.searchResult.items.length;
  return { totalPage, currentPage };
};

export default connect(mapStateToProps, { setPage })(Pagination);
