import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (user) => {
    setUser(user);
  };

  const signOut = () => {
    setUser(null);
  };

  const values = {
    user,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
