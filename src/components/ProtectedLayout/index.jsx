import { useAuth } from "../../contexts/Auth/useAuth";

export const ProtectedLayout = ({children}) => {

    const auth = useAuth();
        if(!auth.matricula){
            return(
                <h1>Você não tem acessoa a essa página!</h1>
            )
        }
    return children;
}