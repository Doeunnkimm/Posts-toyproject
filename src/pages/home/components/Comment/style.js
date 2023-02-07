import styled from 'styled-components';
import {flexAlignCenter} from 'Styles/common';

export const Box = styled.div`
  border-bottom: 1px solid rgb(210, 210, 210);
  border-radius: 5px;
  width: 100%;
  padding: 12px 0;
`;
export const Textarea = styled.textarea`
  width: 90%;
  resize: none;
  height: 30px;
  font-size: 16px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;
  padding: 5px;
`;
export const FlexAlignDiv = styled.div`
  ${flexAlignCenter}
  margin: 5px 0;
`;
