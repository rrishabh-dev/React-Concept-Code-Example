import { useContext, useState } from "react";
import { UserAuthContext } from "../../../context/UserAuthContext";

const UserAuthentication = () => {
  const { user, logout, setUser } = useContext(UserAuthContext);
  const [userName, setUserName] = useState('');
  const [, setPassword] = useState('');

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to view your account.</p>
          <input type="text" placeholder="Enter Username" onChange={(e) => setUserName(e.target.value)} />
          <br />
          <input type="password" placeholder="Enter Password" required onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type="submit" onClick={() => setUser(userName)}>Log In</button>
        </div>
      )}
    </div>
  )
}

export default UserAuthentication;
