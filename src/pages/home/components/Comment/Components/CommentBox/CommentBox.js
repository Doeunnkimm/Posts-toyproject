import styled from 'styled-components';
import ModalBox from '../Modal/Modal';

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { flexAlignCenter, HoverCSS } from 'Styles/common';
import { useState } from 'react';
import Button from 'components/Button/Button';

function CommentBox({
  comment,
  onReportComment,
  onDeleteComment,
  onAddComment,
  onEditComment,
}) {
  const [dotsIsVisible, setDotsIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isEditComment, setIsEditComment] = useState(false);
  const [editComment, setEditComment] = useState('');

  const onClickModalOpenAndClose = () => setModalIsOpen((prev) => !prev);

  const onClickReportComment = () => {
    setModalIsOpen(false);
    onReportComment(comment.id);
  };

  const onClickDeleteComment = (id) => {
    setModalIsOpen(false);
    onDeleteComment(comment.id);
  };

  const onClickEditComment = () => {
    setModalIsOpen(false);
    setIsEditComment(true);
    setEditComment(comment.content);
  };

  const onSubmitEditComment = () => {
    setIsEditComment(false);
    onEditComment(comment.id, editComment);
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
          src={comment.User.profile_img}
          radius={'50%'}
          width={'30px'}
          right={'10px'}
        />
        <span>{comment.User.nick_name}</span>
        <span style={{ marginLeft: '10px', color: 'rgb(160, 160, 160)' }}>
          {toStringByFormatting(comment.createdAt)}
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
          id={comment.id}
          onReportComment={onClickReportComment}
          onDeleteComment={onClickDeleteComment}
          onClickEditComment={onClickEditComment}
          SetIsEditComment={setIsEditComment}
          setModalIsOpen={setModalIsOpen}
          isOpen={modalIsOpen}
          onClickModalOpenAndClose={onClickModalOpenAndClose}
          myComment={comment.myComment}
        />
      </S.Text>
      {isEditComment ? (
        <S.Text>
          <S.TextArea
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
          />
          <Button onClick={onSubmitEditComment}>완료</Button>
        </S.Text>
      ) : (
        <S.Text>ㄴ {comment.content}</S.Text>
      )}
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

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
`;
const S = {
  Form,
  Icon,
  Image,
  Text,
  TextArea,
};
