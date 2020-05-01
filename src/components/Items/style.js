import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  justify-content: space-between;
  padding: 16px;
  margin: 0 auto 24px auto;

  @media (max-width: 1024px) {
    justify-content: center;
    padding: 16px 0 0 0;
  }
`;
