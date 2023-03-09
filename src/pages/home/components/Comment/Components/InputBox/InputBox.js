import Button from 'components/Button/Button';
import styled from 'styled-components';
import { flexAlignCenter } from 'Styles/common';

import PROFILE from 'myProfile.json';

import { useRef } from 'react';

function InputBox({ onAddComment }) {
  const commentRef = useRef(null);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClickSubmit(); // 엔터눌렀을 때 줄바꿈 되지 않도록 해야함
    }
  };

  const onClickSubmit = () => {
    const data = {
      User: PROFILE,
      content: commentRef.current.value,
      createdAt: new Date(),
      id: Math.floor(Math.random() * 100000),
      myComment: true,
    };
    onAddComment(data);
    commentRef.current.value = ''; // clear
  };

  return (
    <S.Container>
      <S.Header>
        <S.Textarea
          placeholder={'댓글달기..'}
          ref={commentRef}
          onKeyDown={handleKeyPress}
        ></S.Textarea>
        <Button height={'30px'} width={'10%'} onClick={onClickSubmit}>
          게시
        </Button>
      </S.Header>
    </S.Container>
  );
}
export default InputBox;

const Container = styled.div`
  display: flex;
  flex-direction: column; ;
`;
const Header = styled.div`
  ${flexAlignCenter};
  border-bottom: 1px solid rgb(210, 210, 210);
  width: 100%;
  padding: 12px 0;
`;
const Textarea = styled.textarea`
  width: 90%;
  resize: none;
  height: 30px;
  font-size: 16px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;
  padding: 5px;
`;

const Text = styled.div`
  ${flexAlignCenter};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  margin-right: ${({ right }) => right};
`;

const S = {
  Container,
  Header,
  Textarea,
  Text,
};
