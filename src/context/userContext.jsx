//make a simple user share context react hook
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// create a context

const UserContext = createContext();

// provider component

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// consumer component

const UserConsumer = ({ children }) => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext must be used within a UserProvider");
  }

  return children(userContext);
};

export { UserProvider, UserConsumer }; // export both provider and consumer components for use in your app.jsx file.
