import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchForm = styled.form`
  width: 100%;
  padding: 32px 16px;
  background-color: #ff7878;
  text-align: center;
`;

export const SearchInput = styled.input`
  width: 40vw;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1.5px solid #fff;
  outline: 0;
  font-size: 20px;
  color: #fff;
  padding: 8px 48px 8px 12px;
  background-color: transparent;
  margin-right: 12px;
  ::placeholder {
    color: #fff;
  }

  @media (max-width: 576px) {
    width: 60vw;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  margin-left: -48px;
`;
