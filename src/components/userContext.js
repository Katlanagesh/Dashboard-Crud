import React, { useState, useContext } from "react";

const userContext = React.createContext();

const UserProvider = ({ children }) => {
  const data = ProfileData();
  const [profileuserData, setProfileuserData] = useState(data);
  return (
    <userContext.Provider value={{ profileuserData, setProfileuserData }}>
      {children}
    </userContext.Provider>
  );

  function ProfileData() {
    return {
      id: 3,
      photo:
        "https://th.bing.com/th?id=OIP.N3Jpe4VPoJacMfxlaEmeeAHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      name: "Ram Charan",
      email: "charan@gmail.com",
      mobile: "96734579498",
      about:
        "Konidela Ram Charan (born 27 March 1985) is an Indian actor, producer, and entrepreneur who primarily works in Telugu films. One of the highest-paid actors in Indian cinema, he is the recipient of three Filmfare Awards and two Nandi Awards."
    };
  }
};

export const useGlobalContext = () => {
  return useContext(userContext);
};

export { userContext, UserProvider };