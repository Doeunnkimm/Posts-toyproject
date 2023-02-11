import CommentBox from './Components/CommentBox/CommentBox';
import InputBox from './Components/InputBox/InputBox';

function Comment({writeComment, comments}) {
  return (
    <>
      <InputBox writeComment={writeComment} />
      {comments.map((comment) => {
        return (
          <CommentBox
            profile_img={comment.User.profile_img}
            nick_name={comment.User.nick_name}
            createdAt={comment.createdAt}
            content={comment.content}
            myComment={comment.myComment}
          />
        );
      })}
    </>
  );
}
export default Comment;
