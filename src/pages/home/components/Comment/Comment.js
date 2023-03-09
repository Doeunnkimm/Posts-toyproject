import { toast } from 'react-toastify';
import CommentBox from './Components/CommentBox/CommentBox';
import InputBox from './Components/InputBox/InputBox';

function Comment({ writeComment, comments, setComments }) {
  // 댓글 신고
  const onReportComment = (id) => {
    toast.error('신고가 완료되었습니다', { autoClose: 1500 });
    // 매개변수로 받은 id를 가지고 신고 api ...
  };

  // 댓글 삭제
  const onDeleteComment = (id) => {
    toast.success('댓글 삭제 성공!', { autoClose: 1500 });
    setComments(comments.filter((comment) => comment.id !== id));
  };
  return (
    <>
      <InputBox writeComment={writeComment} />
      {comments.map((comment) => {
        return (
          <CommentBox
            comment={comment}
            onReportComment={onReportComment}
            onDeleteComment={onDeleteComment}
          />
        );
      })}
    </>
  );
}
export default Comment;
