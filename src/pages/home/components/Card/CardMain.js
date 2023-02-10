import {useState} from 'react';

import styled from 'styled-components';
import * as A from './style';
import {HoverCSS} from 'Styles/common';

import CommentBox from '../Comment/CommentBox';
import CardHeader from './Header/CardHeader';
import CardFooter from './Footer/CardFooter';

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';

function Card({post}) {
  const {User, content, createdAt, Post_img, myPost, Comments} = post;

  const [heart, setHeart] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);

  const [allText, setAllText] = useState(false);
  let isOutOf100 = false;

  const toStringByFormatting = (EncodingTime, delimiter = '-') => {
    const year = EncodingTime.getFullYear();
    const month = EncodingTime.getMonth() + 1;
    const day = EncodingTime.getDate();
    const hour = EncodingTime.getHours();
    const minute = EncodingTime.getMinutes();
    return [year, month, day].join(delimiter) + ` ${hour}:${minute}`;
  };

  const onClickOther = () => setAllText(true); // 더보기 버튼 클릭 이벤트

  const onClickHeart = () => setHeart((prev) => !prev); // 하트 아이콘 클릭 이벤트

  const onClickCommentOpen = () => setCommentOpen((prev) => !prev); // 댓글 아이콘 클릭 이벤트

  // 성공적으로 댓글 삭제 되었을 때 토스트
  const onToastSuccess = () =>
    toast.success('글 삭제 완료!', {autoClose: 1500});

  // 남이 쓴 글을 삭제하려 했을 떄 토스트
  const onToastWarning = () =>
    toast.warning('내가 쓴 글만 삭제가 가능해요', {autoClose: 1500});

  // 게시물 삭제 함수

  const outOf100 = (text) => {
    if (text.length >= 100) {
      isOutOf100 = true;
      return text.split('').slice(0, 99).join('') + '...';
    }
    return text;
  };

  return (
    <A.Container>
      <ToastContainer />
      <CardHeader
        src={User.profile_img}
        nick_name={User.nick_name}
        createdAt={toStringByFormatting(createdAt)}
        myPost={myPost}
        onToastSuccess={onToastSuccess}
        onToastWarning={onToastWarning}
      />
      <A.Form>
        <A.Image src={Post_img} width={'100%'} alt={'post_img'}></A.Image>
        <A.Text size={'16px'}>
          {allText ? content : outOf100(content)}
          {isOutOf100 && (
            <S.MiniText
              style={{display: 'inline-block'}}
              onClick={onClickOther}
            >
              더보기
            </S.MiniText>
          )}
        </A.Text>
        <CardFooter
          heart={heart}
          onClickHeart={onClickHeart}
          onClickCommentOpen={onClickCommentOpen}
        />
        {commentOpen && <CommentBox comments={Comments} />}
      </A.Form>
    </A.Container>
  );
}
export default Card;

const MiniText = styled.div`
  font-size: 15px;
  color: rgb(150, 150, 150);
  ${HoverCSS};
`;

const S = {
  MiniText,
};
