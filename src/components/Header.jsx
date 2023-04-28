import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export const Header = ({title}) => {  
    const [token, setToken] = useContext(UserContext)
    const logout = () => {
        setToken(null);
        localStorage.removeItem("IntranetToken");
    }
    return (
        <div className="has-text-centered m-6">
            <h1 className="title">{title}</h1>
            {token && <button className="button" onClick={logout}>Logout</button>}
        </div>
    )   
}