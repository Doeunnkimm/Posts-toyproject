import { useState } from 'react';

import styled from 'styled-components';
import * as A from './style';
import { HoverCSS } from 'Styles/common';

import Comment from '../Comment/Comment';
import CardHeader from './Header/CardHeader';
import CardFooter from './Footer/CardFooter';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Card({ post }) {
  const { id, User, content, createdAt, Post_img, myPost, Comments } = post;

  console.log(Post_img);
  const [commentList, setCommentList] = useState(Comments);

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
    toast.success('글 삭제 완료!', { autoClose: 1500 });

  // 남이 쓴 글을 삭제하려 했을 떄 토스트
  const onToastWarning = () =>
    toast.warning('내가 쓴 글만 삭제가 가능해요', { autoClose: 1500 });

  // 게시물 삭제 함수

  const outOf100 = (text) => {
    if (text.length >= 100) {
      isOutOf100 = true;
      return text.split('').slice(0, 99).join('') + '...';
    }
    return text;
  };

  // 댓글 남기기 함수
  const writeComment = (data) => {
    const temp = [...commentList];
    temp.unshift(data);
    setCommentList(temp);
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
        onToastSuccess={onToastSuccess}
        onToastWarning={onToastWarning}
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
        {commentOpen && (
          <Comment writeComment={writeComment} comments={commentList} />
        )}
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
