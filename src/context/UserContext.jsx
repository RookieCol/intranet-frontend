import React, { createContext, useEffect, useState } from "react";
import { backend } from "../utils/constants";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("IntranetToken"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`
        },
      };

      const response = await fetch(`${backend}/api/users/me`, requestOptions);

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("IntranetToken", token);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
