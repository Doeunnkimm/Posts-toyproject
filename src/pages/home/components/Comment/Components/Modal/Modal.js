import Modal from 'react-modal';
import styled from 'styled-components';
import {HoverCSS} from 'Styles/common';

Modal.setAppElement('#root');

function ModalBox({isOpen, onClickModalOpenAndClose, myComment}) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => onClickModalOpenAndClose()}
        style={customStyles}
      >
        {myComment && (
          <>
            <S.Text>수정</S.Text>
            <S.Border />
            <S.Text color={'#ff0000'}>삭제</S.Text>
            <S.Border />
          </>
        )}
        {!myComment && (
          <>
            <S.Text color={'#ff0000'}>신고</S.Text>
            <S.Border />
          </>
        )}

        <S.Text onClick={() => onClickModalOpenAndClose()}>취소</S.Text>
      </Modal>
    </>
  );
}
export default ModalBox;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({color}) => color};
  font-weight: bold;
  width: 300px;
  font-size: 15px;
  ${HoverCSS}
`;

const Border = styled.div`
  height: 1px;
  background-color: rgb(209, 209, 209);
  width: 100%;
  margin: 16px 0;
`;
const S = {
  Text,
  Border,
};
