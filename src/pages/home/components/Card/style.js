import styled from 'styled-components';
import {flexAlignCenter, HoverCSS, InnerflexLeft} from 'Styles/common';

export const Container = styled.div`
  ${flexAlignCenter}
  justify-content: left;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
`;
export const Form = styled.div`
  ${InnerflexLeft}
  border-bottom: 1px solid rgb(208, 208, 208);
  padding-bottom: 20px;
`;
export const Icon = styled.div`
  display: inline-block;
  margin-right: 10px;
  ${HoverCSS};
`;
export const Text = styled.div`
  font-size: ${({size}) => size};
  font-weight: ${({weight}) => weight};
  margin-right: ${({right}) => right};
`;
export const Image = styled.img`
  border-radius: ${({radius}) => radius};
  width: ${({width}) => width};
  margin-right: ${({right}) => right};
`;
