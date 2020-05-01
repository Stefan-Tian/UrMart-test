import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageUnit = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;

  ${({ status }) =>
    status === 'active' &&
    `
    background-color: #ff7878;
    border-radius: 50%;
    color: #fff;
  `}
`;
