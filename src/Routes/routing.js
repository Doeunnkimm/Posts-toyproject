import WritePage from 'pages/write/Write';

const { default: Layout } = require('components/Layout/Layout');
const { default: Home } = require('pages/home/Home');
const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'write',
        element: <WritePage />,
      },
    ],
  },
]);

export default router;
