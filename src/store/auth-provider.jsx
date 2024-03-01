import React, { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  isAuth: undefined,
};

export const AuthContext = createContext(initialState);

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("social_authentication")
  );

  useEffect(() => {
    const currentAuth = localStorage.getItem("social_authentication");

    if (currentAuth) {
      setIsAuth(true);
    }

    if (currentAuth === false || currentAuth === undefined) {
      setIsAuth(false);
    }
  }, [isAuth, setIsAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be used within an AuthContextProvider");

  return context;
}
