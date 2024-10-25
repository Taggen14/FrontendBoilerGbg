import { createContext, useState } from 'react';

// Skapa en Context
export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsloggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};



