import * as S from './style';
import {Text} from '../style';
import {GoX} from 'react-icons/go';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {BsChatDots} from 'react-icons/bs';
import {useState} from 'react';
import CommentBox from '../Comment/CommentBox';

function Card({post}) {
  const {User, content, createdAt, Post_img, myPost, Comments} = post;

  const [heart, setHeart] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);

  const toStringByFormatting = (EncodingTime, delimiter = '-') => {
    const year = EncodingTime.getFullYear();
    const month = EncodingTime.getMonth() + 1;
    const day = EncodingTime.getDate();
    const hour = EncodingTime.getHours();
    const minute = EncodingTime.getMinutes();

    return [year, month, day].join(delimiter) + ` ${hour}:${minute}`;
  };

  const onClickHeart = () => setHeart(!heart);
  const onClickCommentOpen = () => setCommentOpen(!commentOpen);

  return (
    <S.Container>
      <S.Top>
        <S.Image
          src={User.profile_img}
          width={'30px'}
          marginRight={'18px'}
          radius={'50%'}
        ></S.Image>
        <Text size={'17px'} marginRight={'20px'}>
          {User.nick_name}
        </Text>
        <Text size={'15px'}>▫️ {toStringByFormatting(createdAt)}</Text>
        <S.IconBox style={{marginLeft: 'auto'}}>
          <GoX size={26} />
        </S.IconBox>
      </S.Top>
      <S.Form>
        <S.Image src={Post_img} width={'100%'}></S.Image>
        <Text size={'16px'}>{content}</Text>
        <S.Top>
          <S.IconBox marginRight={'10px'}>
            {heart ? (
              <AiFillHeart size={30} color={'red'} onClick={onClickHeart} />
            ) : (
              <AiOutlineHeart size={30} onClick={onClickHeart} />
            )}
          </S.IconBox>
          <S.IconBox onClick={onClickCommentOpen}>
            <BsChatDots size={24} />
          </S.IconBox>
        </S.Top>
        {commentOpen ? <CommentBox comments={Comments} /> : null}
      </S.Form>
    </S.Container>
  );
}
export default Card;
