import styled from 'styled-components';
import { flexAlignCenter, InnerflexLeft } from 'Styles/common';
import * as A from '../style';
import { GoX } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { DELETE_POST } from 'Stores/post';

function CardHeader(props) {
  const { id, src, nick_name, createdAt, myPost, onDeletePost } = props;

  return (
    <S.Top>
      <S.Image src={src} />
      <S.Text size={'17px'}>{nick_name}</S.Text>
      <S.Text size={'15px'}>▫️ {createdAt}</S.Text>
      <A.Icon
        style={{ marginLeft: 'auto' }}
        onClick={() => onDeletePost(id, myPost)}
      >
        <GoX size={26} />
      </A.Icon>
    </S.Top>
  );
}
export default CardHeader;

const Top = styled.div`
  ${flexAlignCenter}
  ${InnerflexLeft}
  margin-bottom: 26px;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 40px;
  margin-right: 18px;
`;
const Text = styled.div`
  font-size: ${({ size }) => size};
  margin-right: 20px;
`;

const S = {
  Top,
  Image,
  Text,
};
