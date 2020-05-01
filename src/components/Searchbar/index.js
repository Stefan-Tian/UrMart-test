import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SearchForm, SearchInput, SearchIcon } from './style';
import { getResult } from '../../redux/actions/searchResult';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ getResult }) => {
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

export default connect(null, { getResult })(Searchbar);
