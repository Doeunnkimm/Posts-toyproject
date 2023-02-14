import styled from 'styled-components';
import PROFILE from 'myProfile.json';
import {useNavigate} from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <S.Form>
      <S.Image src={PROFILE.profile_img} />
      <S.Text size={'24px'} mt={'30px'}>
        {PROFILE.nick_name}
      </S.Text>
      <S.Line />
      <S.HoverText size={'30px'} onClick={() => navigate('/')}>
        HOME
      </S.HoverText>
      <S.HoverText size={'30px'} onClick={() => navigate('/write')}>
        WRITE
      </S.HoverText>
    </S.Form>
  );
}
export default Sidebar;

const Form = styled.div`
  position: fixed;
  width: 26%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgb(230, 230, 230);
  align-items: center;
  justify-content: center;
  background-color: rgb(252, 252, 252);
`;

const Image = styled.img`
  border-radius: 50%;
  width: 240px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: ${({size}) => size};
  color: rgb(130, 130, 130);
  margin-top: ${({mt}) => mt};
`;

const Line = styled.div`
  height: 1px;
  background-color: gray;
  width: 70%;
  margin: 30px 0;
`;

const HoverText = styled(Text)`
  padding: 20px;
  :hover {
    cursor: pointer;
    color: rgb(77, 23, 134);
  }
`;

const S = {
  Form,
  Image,
  Text,
  Line,
  HoverText,
};
