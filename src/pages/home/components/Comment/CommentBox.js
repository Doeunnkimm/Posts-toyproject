import * as S from './style';
import {Text, Image} from '../style';
import Button from 'components/Button/Button';
import {useRef, useState} from 'react';
import myProfile from 'myProfile.json';

function CommentBox({comments}) {
  const [commentList, setCommentList] = useState(comments);
  const commentRef = useRef();

  const onClickSubmit = () => {
    const data = {
      User: myProfile,
      content: commentRef.current.value,
      createdAt: new Date(),
      id: 'abcdefg',
      myComment: true,
    };
    setCommentList(commentList.unshift(data));

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
    <div>
      <S.FlexAlignDiv>
        <S.Textarea placeholder={'댓글달기..'} ref={commentRef}></S.Textarea>
        <Button height={'30px'} width={'10%'} onClick={onClickSubmit}>
          게시
        </Button>
      </S.FlexAlignDiv>
      {comments.map((comment) => {
        return (
          <S.Box>
            <S.FlexAlignDiv>
              <Image
                src={comment.User.profile_img}
                radius={'50%'}
                width={'30px'}
                marginRight={'10px'}
              />
              <span>{comment.User.nick_name}</span>
              <span style={{marginLeft: '10px', color: 'rgb(160, 160, 160)'}}>
                {toStringByFormatting(comment.createdAt)}
              </span>
            </S.FlexAlignDiv>
            <Text>ㄴ {comment.content}</Text>
          </S.Box>
        );
      })}
    </div>
  );
}
export default CommentBox;
