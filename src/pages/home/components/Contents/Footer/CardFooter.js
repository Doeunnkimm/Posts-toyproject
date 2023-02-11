import styled from 'styled-components';
import {flexAlignCenter, InnerflexLeft} from 'Styles/common';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {BsChatDots} from 'react-icons/bs';
import * as A from '../style';

function CardFooter({heart, onClickHeart, onClickCommentOpen}) {
  return (
    <S.Bottom>
      <A.Icon onClick={() => onClickHeart()}>
        {heart ? (
          <AiFillHeart size={30} color={'red'} />
        ) : (
          <AiOutlineHeart size={30} />
        )}
      </A.Icon>
      <A.Icon onClick={() => onClickCommentOpen()}>
        <BsChatDots size={24} />
      </A.Icon>
    </S.Bottom>
  );
}
export default CardFooter;

const Bottom = styled.div`
  ${flexAlignCenter}
  ${InnerflexLeft}
  margin-top: 10px;
`;

const S = {
  Bottom,
};
