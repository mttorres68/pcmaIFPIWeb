// import { useEffect, useState } from "react";

// export const GetTipoLocalStorage = () =>{
//     const [tipoUsuario, setTipoUsuario] = useState({});
//     const getLocalStorage = JSON.parse(localStorage.getItem('u'));

//     useEffect(() =>{
//         if(getLocalStorage){
//             setTipoUsuario(getLocalStorage.tipo)
//         }
//     }, [])

//     return (        
//         <div>
//             <div className="flex items-center -mb-4 mt-2 text-base font-bold text-white rounded-lg hover:bg-purple-800 text-center justify-center">   
//                 <span>
//                     {tipoUsuario.map((e) => <h1 cassName="text-center" key={e.descricao}> {e.descricao} </h1>
                    
//                     )}
//                 </span>
//             </div>

//         </div>
//     )
        
// }

