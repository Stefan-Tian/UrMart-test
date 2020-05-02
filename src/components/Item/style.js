import styled from 'styled-components';

export const Link = styled.a`
  width: 320px;
  text-decoration: none;
  color: inherit;

  @media (max-width: 1024px) {
    margin: 0 16px;
  }

  @media (max-width: 576px) {
    width: 35vw;
  }
`;

export const Image = styled.img`
  @media (max-width: 576px) {
    width: 35vw;
  }
`;

export const Title = styled.p`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
