import { createContext, useState } from 'react';


export const AuthenticationContext = createContext({
  authenticatedUser: null,
  setAuthenticatedUser: () => {},
});

export function AuthenticationProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState();

  return (
    <AuthenticationContext.Provider
      value={{ authenticatedUser, setAuthenticatedUser }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}