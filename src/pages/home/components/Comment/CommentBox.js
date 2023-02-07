import * as S from './style';
import {Text, Image} from '../style';
import Button from 'components/Button/Button';

function CommentBox({comments}) {
  return (
    <div>
      <S.FlexAlignDiv>
        <S.Textarea placeholder={'댓글달기..'}></S.Textarea>
        <Button height={'30px'} width={'10%'}>
          게시
        </Button>
      </S.FlexAlignDiv>
      {comments.map((comment) => {
        return (
          <S.Box>
            <S.FlexAlignDiv>
              <Image
                src={comment.User.profile_img}
                radius={'50%'}
                width={'30px'}
                marginRight={'10px'}
              />
              <span>{comment.id}</span>
            </S.FlexAlignDiv>
            <Text>ㄴ {comment.content}</Text>
          </S.Box>
        );
      })}
    </div>
  );
}
export default CommentBox;
