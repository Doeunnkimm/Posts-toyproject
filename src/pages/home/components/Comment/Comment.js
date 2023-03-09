import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ADD_COMMENT, DELETE_COMMENT, EDIT_COMMENT } from 'Stores/post';
import CommentBox from './Components/CommentBox/CommentBox';
import InputBox from './Components/InputBox/InputBox';

function Comment({ postId, comments }) {
  const dispatch = useDispatch();

  // 댓글 신고
  const onReportComment = (id) => {
    toast.error('신고가 완료되었습니다', { autoClose: 1500 });
    // 매개변수로 받은 id를 가지고 신고 api ...
  };

  // 댓글 삭제
  const onDeleteComment = (id) => {
    toast.success('댓글 삭제 성공!', { autoClose: 1500 });
    dispatch(DELETE_COMMENT({ postId, commentId: id }));
  };

  // 댓글 수정
  const onEditComment = (id, content) => {
    toast.success('댓글 수정 성공!', { autoClose: 1500 });
    dispatch(EDIT_COMMENT({ postId, commentId: id, content }));
  };

  // 댓글 작성
  const onAddComment = (content) => {
    dispatch(ADD_COMMENT({ postId, content }));
  };

  return (
    <>
      <InputBox onAddComment={onAddComment} />
      {comments.map((comment) => {
        return (
          <CommentBox
            comment={comment}
            onReportComment={onReportComment}
            onDeleteComment={onDeleteComment}
            onEditComment={onEditComment}
          />
        );
      })}
    </>
  );
}
export default Comment;
