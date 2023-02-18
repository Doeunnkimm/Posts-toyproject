import {useState} from 'react';
import {BiTrash} from 'react-icons/bi';
import styled from 'styled-components';

function SlideImage({image, index, removeImage}) {
  const [isTrashView, setIsTrashView] = useState(false);

  const onMouseOverImage = (e) => setIsTrashView(true);

  const onMouseOutImage = (e) => setIsTrashView(false);

  const onClickRemoveImage = () => removeImage(index);

  return (
    <S.ImageBox>
      <S.IconBox
        display={isTrashView ? 'view' : 'none'}
        onClick={onClickRemoveImage}
        onMouseOver={onMouseOverImage}
        onMouseOut={onMouseOutImage}
      >
        <BiTrash size={40} />
      </S.IconBox>
      <S.Image
        src={`${image}`}
        alt=""
        key={index}
        onMouseOver={onMouseOverImage}
        onMouseOut={onMouseOutImage}
      />
    </S.ImageBox>
  );
}
export default SlideImage;

const ImageBox = styled.div`
  height: 100%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 90%;
  border-radius: 10px;
`;

const IconBox = styled.div`
  position: absolute;
  z-index: 99;
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: ${({display}) => (display === 'none' ? 'none' : 'flex')};
  opacity: 0.6;
  top: 50%;
  margin-left: 160px;
  transform: translate(0, -50%);
`;

const S = {
  IconBox,
  Image,
  ImageBox,
};
