import { createContext, useContext, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [token,setToken]=useState("");
    let isLogedIn= !!token;
    const storeTokenInLS=(serverToken)=>{
        console.log("Store",isLogedIn);
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
       
    };
    console.log(isLogedIn);
    const LogoutUser=()=>{
        setToken("");
        console.log("logout",isLogedIn);
        return localStorage.removeItem("token");
        
    };
    return (
        <AuthContext.Provider value={{storeTokenInLS,LogoutUser,isLogedIn}}>
            {children}
        </AuthContext.Provider>
    )   
}

export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue)
    {
        throw new error("useAuth used outside of the provider");
    }
    return authContextValue;
}