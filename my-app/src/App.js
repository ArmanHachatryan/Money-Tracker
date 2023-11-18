import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Head from '../src/components/views/global/Head'
import Foot from '../src/components/views/global/Foot'
import SignIn from './components/pages/SignIn'
import LogIn from './components/pages/Login'
import Main from './components/pages/Main'

function App() {

  return (
    <>
    <Head/>
    <Routes>
      <Route
        path={'/'}
        element={<SignIn/>}
      />
      <Route
        path={'/login'}
        element={<LogIn />}
      />
      <Route
        path={'/main'}
        element={<Main/>}
      />
    </Routes>
    <Foot/>
    </>
  );
}

export default App;
