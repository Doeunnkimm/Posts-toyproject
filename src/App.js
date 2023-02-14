import {BrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import router from 'Routes/routing';
import GlobalStyles from 'Styles/global';
import './App.css';
import Home from './pages/home/Home';
import {MockPost} from './__mocks__/post';

function App() {
  const Posts = MockPost(5);
  /*MockPost 함수의 매개변수 count로 전달한 수 만큼 데이터가 생성됩니다*/
  console.log(Posts);

  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home posts={Posts} />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
