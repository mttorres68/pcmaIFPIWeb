import React, {createContext, useEffect, useState} from "react";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";
export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const user = getUserLocalStorage();
        if(user){
            setUser(user);
        }
    }, []);

    async function authenticate (matricula, senha){
        const response = await LoginRequest(matricula, senha);
        const payload = { token: response.token, tipo: response.TipoUser};       

        console.log(response,'opa');

        console.log(response,'foi');
        setUser(payload);
        setUserLocalStorage(payload);        
    }

    function logout(){
        setUser(null);
        setUserLocalStorage(null);
    }


    return (
        <AuthContext.Provider value={{ ...user, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
