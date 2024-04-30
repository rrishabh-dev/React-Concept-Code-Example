import { createContext, useState } from "react";

export const UserAuthContext = createContext();

const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <>
      <UserAuthContext.Provider value={{ user, setUser, login, logout }}>
        {children}
      </UserAuthContext.Provider>
    </>
  );
}

export default UserAuthProvider;
