import * as S from './style';
import {Text} from '../style';

function CommentBox({comments}) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <S.Box>
            <Text>🙋 {comment.id}</Text>
            <Text>ㄴ {comment.content}</Text>
          </S.Box>
        );
      })}
    </div>
  );
}
export default CommentBox;
