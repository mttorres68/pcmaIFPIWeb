import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function  setTipoUsuarioFuc (){
    const [tipoUsuario, setTipoUsuario] = useState();

    const getLocalStorage = JSON.parse(localStorage.getItem('u'));
    const [tipoAtivo, setTipoAtivo] = useState()
    const navigate = useNavigate();
    let setTipo
    
    
    try {
        setTipo = (getLocalStorage.tipo.map((e) => (e.descricao)));
    } catch (error) {
        console.log(error);
        navigate('/Login') 
    }

    useEffect(() =>{
        try {
            if(getLocalStorage){
                setTipoUsuario(setTipo)
            }else{
                navigate('/Login')  
            }           
        } catch (error) {
            console.log(error);
        }

        if(setTipo == "Aluno" || setTipo == "Monitor"){
            setTipoAtivo(false)
        }else if(setTipo == "Professor" || setTipo == "Coordenador") {
            setTipoAtivo(true)
        }        
    }, [])

    if (tipoAtivo == true) {
        return true
        
    } else {
        return false
    }
}
