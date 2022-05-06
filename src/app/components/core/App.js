import React from 'react';
import { Provider } from 'react-redux';

import store from 'app/store';

const App = () => {
  return (
    <Provider store={store}>

    </Provider>
  );
};

export default App;