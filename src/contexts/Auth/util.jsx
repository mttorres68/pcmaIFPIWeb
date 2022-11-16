import {Api}  from "../../services/api";
export function setUserLocalStorage(user) {
    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem('u');

    if(!json){
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}

export async function LoginRequest(matricula, senha){
    try {
        
        const requeste = await Api.post('login',{
            matricula, senha
        });
        console.log(requeste.data,'aqui01');
        return requeste.data;

    } catch (error) {
        console.log('aqui');
        return null;
    }
}