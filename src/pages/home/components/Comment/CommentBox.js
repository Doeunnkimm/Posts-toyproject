import Button from 'components/Button/Button';
import {useRef, useState} from 'react';
import myProfile from 'myProfile.json';
import styled from 'styled-components';
import {flexAlignCenter} from 'Styles/common';

function CommentBox({comments}) {
  const [commentList, setCommentList] = useState(comments);
  const commentRef = useRef(null);

  const onClickSubmit = () => {
    const data = {
      User: myProfile,
      content: commentRef.current.value,
      createdAt: new Date(),
      id: 'abcdefg',
      myComment: true,
    };

    comments.unshift(data);
    setCommentList([...comments]);
    commentRef.current.value = ''; // clear
  };

  const toStringByFormatting = (EncodingTime, delimiter = '-') => {
    const year = EncodingTime.getFullYear();
    const month = EncodingTime.getMonth() + 1;
    const day = EncodingTime.getDate();
    const hour = EncodingTime.getHours();
    const minute = EncodingTime.getMinutes();
    return [year, month, day].join(delimiter) + ` ${hour}:${minute}`;
  };

  return (
    <S.Container>
      <S.Header>
        <S.Textarea placeholder={'댓글달기..'} ref={commentRef}></S.Textarea>
        <Button height={'30px'} width={'10%'} onClick={onClickSubmit}>
          게시
        </Button>
      </S.Header>
      {commentList.map((comment) => {
        return (
          <S.Form>
            <S.Text>
              <S.Image
                src={comment.User.profile_img}
                radius={'50%'}
                width={'30px'}
                right={'10px'}
              />
              <span>{comment.User.nick_name}</span>
              <span style={{marginLeft: '10px', color: 'rgb(160, 160, 160)'}}>
                {toStringByFormatting(comment.createdAt)}
              </span>
            </S.Text>
            <S.Text>ㄴ {comment.content}</S.Text>
          </S.Form>
        );
      })}
    </S.Container>
  );
}
export default CommentBox;

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
const Form = styled.div`
  margin: 10px 0;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 10px;
  padding: 10px;
`;
const Text = styled.div`
  ${flexAlignCenter};
  font-size: ${({size}) => size};
  font-weight: ${({weight}) => weight};
  margin-right: ${({right}) => right};
`;
const Image = styled.img`
  border-radius: ${({radius}) => radius};
  width: ${({width}) => width};
  margin-right: ${({right}) => right};
`;

const S = {
  Container,
  Header,
  Textarea,
  Form,
  Text,
  Image,
};
