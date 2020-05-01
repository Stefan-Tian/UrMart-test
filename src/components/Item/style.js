import styled from 'styled-components';

export const ItemLink = styled.a`
  width: 320px;
  text-decoration: none;
  color: inherit;

  @media (max-width: 1024px) {
    margin: 0 16px;
  }
`;

export const ItemTitle = styled.p`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
