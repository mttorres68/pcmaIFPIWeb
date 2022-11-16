import {createContext, useEffect, useContext, useState} from "react";
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [userLocal, setUserLocal] = useState();
    const [user, setUser] = useState([]);

    
    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_bd");
        
        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
            (user) => user.matricula === JSON.parse(userToken).matricula
            );
            
            if (hasUser) setUser(hasUser[0]);
        }
    }, []);
    
    useEffect(() =>{
        axios('http://localhost:3000/listUsuario')
        .then(response =>{
            setUser(response.data)
        })
    })
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}