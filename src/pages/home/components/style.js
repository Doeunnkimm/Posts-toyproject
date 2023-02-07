import styled from 'styled-components';

export const Text = styled.div`
  font-size: ${({size}) => size};
  font-weight: ${({weight}) => weight};
  margin-right: ${({marginRight}) => marginRight};
`;
export const Image = styled.img`
  border-radius: ${({radius}) => radius};
  width: ${({width}) => width};
  margin-right: ${({marginRight}) => marginRight};
`;
