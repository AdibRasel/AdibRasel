import React, { useEffect, useState } from 'react';
import AuthenticationRouter from './Router/AuthenticationRouter';
import UnAuthenticatedRouter from './Router/UnAuthenticatedRouter';

const App: React.FC = () => {
  const [Token, setToken] = useState(true);

  useEffect(() => {
    const LoginToken = localStorage.getItem('token')

    if(LoginToken){
      setToken(true)
    }else{
      setToken(false)
    }
    console.log(LoginToken)

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
