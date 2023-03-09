import { RouterProvider } from 'react-router-dom';
import router from 'Routes/routing';

import { Provider } from 'react-redux';
import reduxConfig from 'Stores/@store';

import GlobalStyles from 'Styles/global';
import './App.css';

function App() {
  const store = reduxConfig();

  return (
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
