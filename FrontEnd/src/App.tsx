import React, { useEffect, useState } from 'react';
import AuthenticationRouter from './Router/AuthenticationRouter';
import UnAuthenticatedRouter from './Router/UnAuthenticatedRouter';

const App: React.FC = () => {
  const [Token, setToken] = useState(false);

  useEffect(() => {
    const LoginToken = localStorage.getItem('Token')

    if(LoginToken){
      setToken(true)
    }

  }, []);


  if (Token === true) {

 
    return (
      <AuthenticationRouter />
    )

  } else {

    return (
      <UnAuthenticatedRouter />
    )

  }
};

export default App;
