import {useState} from 'react';

import styled from 'styled-components';
import * as A from './style';
import {HoverCSS} from 'Styles/common';

import CommentBox from '../Comment/CommentBox';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

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

  const onClickOther = () => setAllText(true);
  const onClickHeart = () => setHeart((prev) => !prev);
  const onClickCommentOpen = () => setCommentOpen((prev) => !prev);

  const outOf100 = (text) => {
    if (text.length >= 100) {
      isOutOf100 = true;
      return text.split('').slice(0, 99).join('') + '...';
    }
    return text;
  };

  return (
    <A.Container>
      <CardHeader
        src={User.profile_img}
        nick_name={User.nick_name}
        createdAt={toStringByFormatting(createdAt)}
      />
      <A.Form>
        <A.Image src={Post_img} width={'100%'}></A.Image>
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
