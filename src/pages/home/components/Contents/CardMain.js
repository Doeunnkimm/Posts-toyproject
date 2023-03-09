import { useState } from 'react';

import styled from 'styled-components';
import * as A from './style';
import { HoverCSS } from 'Styles/common';

import Comment from '../Comment/Comment';
import CardHeader from './Components/Header/CardHeader';
import CardFooter from './Components/Footer/CardFooter';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Card({ post, onDeletePost }) {
  const { id, User, content, createdAt, Post_img, myPost, Comments } = post;

  console.log(Post_img);

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

  const outOf100 = (text) => {
    if (text.length >= 100) {
      isOutOf100 = true;
      return text.split('').slice(0, 99).join('') + '...';
    }
    return text;
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
  };

  return (
    <A.Container>
      <ToastContainer />
      <CardHeader
        id={id}
        src={User.profile_img}
        nick_name={User.nick_name}
        createdAt={toStringByFormatting(createdAt)}
        myPost={myPost}
        onDeletePost={onDeletePost}
      />
      <A.Form>
        {Post_img.length > 1 ? (
          <S.StyledSlider {...settings}>
            {Post_img.map((image) => {
              return <A.Image src={`${image}`} />;
            })}
          </S.StyledSlider>
        ) : (
          <A.Image src={Post_img[0]} width={'100%'} alt={'post_img'} />
        )}

        <A.Text size={'16px'}>
          {allText ? content : outOf100(content)}
          {isOutOf100 && (
            <S.MiniText
              style={{ display: 'inline-block' }}
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
        {commentOpen && <Comment postId={id} comments={Comments} />}
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

const StyledSlider = styled(Slider)`
  /* height: 100%; */
  width: 100%;

  .slick-list {
    height: 100%;
    object-fit: cover;
    display: flex;
    align-items: center; // 이미지가 정방향이 아닐 경우 가운데 위치
  }
  .slick-track {
    display: flex;
    align-items: center;
  }
  .slick-prev {
    left: 6px;
    z-index: 999;
  }
  .slick-next {
    right: 6px;
    z-index: 999;
  }
`;

const S = {
  MiniText,
  StyledSlider,
};
