import styled from 'styled-components';
import {flexAlignCenter, Hover, HoverDiv, InnerflexLeft} from 'Styles/common';

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
export const Top = styled.div`
  ${flexAlignCenter}
  ${InnerflexLeft}
`;
export const IconBox = styled.div`
  display: inline-block;
  margin-right: ${({marginRight}) => marginRight};
  :hover {
    cursor: pointer;
  }
`;
export const MiniText = styled.div`
  font-size: 15px;
  color: rgb(150, 150, 150);
  ${HoverDiv};
`;
