import React from 'react';
import {AppStoreProvider} from './stores/AppStore';
import {Main} from './components/Application/Main';

function App() {
  return (
    <AppStoreProvider>
      <Main/>
    </AppStoreProvider>
  );
}

export default App;
