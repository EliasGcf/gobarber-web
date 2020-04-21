import React from 'react';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <SignIn />
      </AppProvider>
    </>
  );
};

export default App;
