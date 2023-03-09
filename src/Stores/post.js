import { createAction } from 'Utils/createAction';

const initialState = [];

export const GET_POSTS = createAction('GET_POSTS');
export const ADD_POST = createAction('ADD_POST');
export const DELETE_POST = createAction('DELETE_POST');
export const EDIT_POST = createAction('EDIT_POST');

export const EDIT_COMMENT = createAction('EDIT_COMMENT');
export const ADD_COMMENT = createAction('ADD_COMMENT');
export const DELETE_COMMENT = createAction('DELETE_COMMENT');

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return [...state, ...action.payload.res];

    case 'ADD_POST':
      return [action.payload, ...state];

    case 'DELETE_POST':
      return state.filter((post) => post.id !== action.payload.id);

    case 'EDIT_POST':
      const post_newPosts = [...state];
      const post_index = post_newPosts.findIndex(
        (post) => post.id === action.payload.id
      );
      post_newPosts[post_index].content = action.payload.content;
      return post_newPosts;

    case 'EDIT_COMMENT':
      const comment_newPosts = [...state];
      const comment_post_index = comment_newPosts.findIndex(
        // 변경할 댓글의 postId를 찾는다
        (post) => post.id === action.payload.postId
      );
      const newComments = [...comment_newPosts[comment_post_index].Comments];
      const newComment_index = newComments.findIndex(
        (comment) => comment.id === action.payload.commentId
      );
      newComments[newComment_index].content = action.payload.content;
      comment_newPosts.Comments = newComments;
      return comment_newPosts;

    case 'ADD_COMMENT':
      const comment_newPosts_add = [...state];
      const comment_post_index_add = comment_newPosts_add.findIndex(
        (post) => post.id === action.payload.postId
      );
      comment_newPosts_add[comment_post_index_add].Comments.unshift(
        action.payload.content
      );
      return comment_newPosts_add;

    case 'DELETE_COMMENT':
      const comment_newPosts_delete = [...state];
      const comment_post_index_delete = comment_newPosts_delete.findIndex(
        (post) => post.id === action.payload.postId
      );
      const newComments_delete = comment_newPosts_delete[
        comment_post_index_delete
      ].Comments.filter((comment) => comment.id !== action.payload.commentId);
      comment_newPosts_delete[comment_post_index_delete].Comments =
        newComments_delete;
      return comment_newPosts_delete;
    default:
      return state;
  }
};

export default reducer;
