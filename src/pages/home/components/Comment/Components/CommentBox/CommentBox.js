import styled from 'styled-components';
import ModalBox from '../Modal/Modal';

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { flexAlignCenter, HoverCSS } from 'Styles/common';
import { useState } from 'react';

function CommentBox({ comment, onReportComment, onDeleteComment }) {
  const { id, User, createdAt, content, myComment } = comment;

  const [dotsIsVisible, setDotsIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onClickModalOpenAndClose = () => setModalIsOpen((prev) => !prev);

  const onClickReportComment = (id) => {
    setModalIsOpen(false);
    onReportComment(id);
  };

  const onClickDeleteComment = (id) => {
    setModalIsOpen(false);
    onDeleteComment(id);
  };

  const toStringByFormatting = (EncodingTime, delimiter = '-') => {
    const year = EncodingTime.getFullYear();
    const month = EncodingTime.getMonth() + 1;
    const day = EncodingTime.getDate();
    const hour = EncodingTime.getHours();
    const minute = EncodingTime.getMinutes();
    return [year, month, day].join(delimiter) + ` ${hour}:${minute}`;
  };

  return (
    <S.Form
      onMouseOver={() => setDotsIsVisible(true)}
      onMouseOut={() => setDotsIsVisible(false)}
    >
      <S.Text>
        <S.Image
          src={User.profile_img}
          radius={'50%'}
          width={'30px'}
          right={'10px'}
        />
        <span>{User.nick_name}</span>
        <span style={{ marginLeft: '10px', color: 'rgb(160, 160, 160)' }}>
          {toStringByFormatting(createdAt)}
        </span>
        {dotsIsVisible && (
          <S.Icon
            style={{ marginLeft: 'auto' }}
            onClick={onClickModalOpenAndClose}
          >
            <BiDotsHorizontalRounded size={16} />
          </S.Icon>
        )}

        <ModalBox
          id={id}
          onReportComment={onClickReportComment}
          onDeleteComment={onClickDeleteComment}
          setModalIsOpen={setModalIsOpen}
          isOpen={modalIsOpen}
          onClickModalOpenAndClose={onClickModalOpenAndClose}
          myComment={myComment}
        />
      </S.Text>
      <S.Text>ㄴ {content}</S.Text>
    </S.Form>
  );
}
export default CommentBox;

const Form = styled.div`
  margin: 10px 0;
  border: 1px solid rgb(210, 210, 210);
  border-radius: 10px;
  padding: 10px;
`;

const Icon = styled.div`
  display: inline-block;
  ${HoverCSS}
`;

const Image = styled.img`
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  margin-right: ${({ right }) => right};
`;

const Text = styled.div`
  ${flexAlignCenter};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  margin-right: ${({ right }) => right};
`;

const S = {
  Form,
  Icon,
  Image,
  Text,
};
