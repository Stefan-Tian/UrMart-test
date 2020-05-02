import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchForm, SearchInput, SearchIcon } from './style';
import { getResult } from '../../redux/actions/searchResult';
import { setPage } from '../../redux/actions/pageFilter';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ getResult, setPage }) => {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword) {
      return;
    }

    getResult(keyword);
    setPage(1);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        placeholder="搜尋"
        value={keyword}
        onChange={handleKeywordChange}
        type="search"
      />
      <SearchIcon onClick={handleSubmit} icon={faSearch} />
    </SearchForm>
  );
};

const mapStateToProps = ({ searchResult }) => ({
  cachedItems: searchResult.cachedItems,
});

export default connect(mapStateToProps, { getResult, setPage })(Searchbar);
