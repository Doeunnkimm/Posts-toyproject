import styled from 'styled-components';

export const Text = styled.div`
  font-size: ${({size}) => size};
  font-weight: ${({weight}) => weight};
  margin-right: ${({marginRight}) => marginRight};
`;
