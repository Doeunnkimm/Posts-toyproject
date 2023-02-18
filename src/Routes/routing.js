import WritePage from 'pages/write/Write';
import {MockPost} from '__mocks__/post';

const {default: Layout} = require('components/Layout/Layout');
const {default: Home} = require('pages/home/Home');
const {createBrowserRouter} = require('react-router-dom');

const Posts = MockPost(5);

const addPost = (newPost) => {
  Posts.unshift(newPost);
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home posts={Posts} />,
      },
      {
        path: 'write',
        element: <WritePage addPost={addPost} />,
      },
    ],
  },
]);

export default router;
