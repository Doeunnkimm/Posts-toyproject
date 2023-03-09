import { useRef, useState } from 'react';
import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'Styles/common';
import { BsCamera } from 'react-icons/bs';
import Button from 'components/Button/Button';
import { theme } from 'Styles/theme';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlideImage from './Components/SlideImage';

import PROFILE from 'myProfile.json';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { ADD_POST } from 'Stores/post';

function WritePage() {
  const dispatch = useDispatch();

  const imageRef = useRef();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [isSubmitOk, setIsSubmitOk] = useState(false);

  const onChangeUploadImages = (e) => {
    const image = imageRef.current.files[0];

    console.log('isSubmitOk --> ', isSubmitOk);

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setImages([...images, reader.result]);
    };

    if (images.length > 0 && text !== '') return setIsSubmitOk(true);
    setIsSubmitOk(false);
  };

  const onClickFileInput = () => {
    imageRef.current.click();
  };

  const onChangeTextarea = (e) => {
    setText(e.target.value);
    if (images.length > 0 && e.target.value !== '') return setIsSubmitOk(true);
    setIsSubmitOk(false);
  };

  const removeUploadedImage = (index) => {
    setImages(images.filter((image) => images.indexOf(image) !== index));
  };

  const generateRandomString = (num) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const onClickSubmitNewPost = () => {
    const newPost = {
      Comments: [],
      Post_img: [...images],
      User: {
        id: PROFILE.id,
        nick_name: PROFILE.nick_name,
        profile_img: PROFILE.profile_img,
      },
      content: text,
      createdAt: new Date(),
      id: generateRandomString(11),
      myPost: true,
    };

    dispatch(ADD_POST(newPost));
    navigate('/');
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.CameraBox>
          {images.length > 0 ? (
            <>
              <BsCamera onClick={onClickFileInput} size={30} />
              <S.StyledSlider {...settings}>
                {images.map((image, key) => {
                  return (
                    <SlideImage
                      image={image}
                      index={key}
                      removeImage={removeUploadedImage}
                    />
                  );
                })}
              </S.StyledSlider>
            </>
          ) : (
            <>
              <BsCamera size={100} onClick={onClickFileInput} />
              <div>여러 장 업로드가 가능해요!</div>
            </>
          )}
        </S.CameraBox>
        <S.Text>
          <input
            style={{ display: 'none' }}
            type="file"
            multiple
            ref={imageRef}
            onChange={onChangeUploadImages}
          />
        </S.Text>
        <S.Text>
          <S.Textarea
            placeholder={'글 남기기...'}
            onChange={onChangeTextarea}
          />
        </S.Text>
        <S.Text>
          <Button
            onClick={onClickSubmitNewPost}
            background={
              isSubmitOk ? 'rgb(209, 209, 209)' : 'rgb(140, 140, 140)'
            }
            disabled={!isSubmitOk}
            width={'80%'}
            height={'30px'}
            fontSize={'20px'}
            style={{ margin: '20px auto' }}
            hoverColor={
              isSubmitOk ? `${theme.PALETTE_MAIN}` : 'rgb(140, 140, 140)'
            }
            cursor={isSubmitOk ? 'pointer' : 'not-allowed'}
          >
            게시하기
          </Button>
        </S.Text>
      </S.Form>
    </S.Wrapper>
  );
}
export default WritePage;

const Wrapper = styled.div`
  ${flexCenter};
  justify-content: left;
  flex-direction: column;
`;

const Form = styled.div`
  display: center;
  justify-content: left;
  flex-direction: column;
  background-color: rgb(250, 250, 250);
  width: 40%;
  margin-left: 130px;
  margin-top: 100px;
`;

const CameraBox = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin: 0 auto;
  border: 2px solid rgb(150, 150, 150);
  border-radius: 10px;
  width: 80%;
  height: 500px;
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 150px;
  resize: none;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
`;

const Text = styled.div`
  ${flexAlignCenter};
`;

const StyledSlider = styled(Slider)`
  height: 80%;
  width: 80%;

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
  Wrapper,
  Form,
  Text,
  CameraBox,
  Textarea,
  StyledSlider,
};
