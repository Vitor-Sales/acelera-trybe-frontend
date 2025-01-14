import Context from "./Context"
import { useState } from "react";

export type ProviderProps = {
  user: string;
  onLogin: (username: string) => void;
}

function Provider({children}: {children: React.ReactNode}) {  
  const [user, setUser] = useState('');
  
  const onLogin = (username: string) => {
    setUser(username)
  }

  const values = {
    user,
    onLogin,
  }
  

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  )
}

export default Provider;