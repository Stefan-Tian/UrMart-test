import React from 'react';
import { Provider } from 'react-redux';
import SearchPage from './pages/searchPage';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <SearchPage />
    </Provider>
  );
}

export default App;
