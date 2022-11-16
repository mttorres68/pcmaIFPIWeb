import { IconConta, IconEdital, IconHome, IconMonitoria } from "../../components/Icons"
import { CriarEdital, Siderbar } from "../../components/Sidebar/Sidebar"
import * as Dialog from "@radix-ui/react-dialog";
import { EditalCriar } from "./EditalCriar";

import { useEffect, useState } from "react";



export const Sidebar = () =>{
    const [tipoUsuario, setTipoUsuario] = useState({});
    const getLocalStorage = JSON.parse(localStorage.getItem('u'));

    useEffect(() =>{
        if(getLocalStorage){
            setTipoUsuario(getLocalStorage.tipo)
        }
    }, [])
    const a = (getLocalStorage.tipo.map((e) => (e.descricao)));
    console.log(a);

    let b = true

    return (
        <>
            <aside className="" aria-label="Sidebar">
                <div className="overflow-y-auto py-2 px-1 bg-purple-500 bg-opacity-30 rounded-lg">
                    <ul className="space-y-6">                    
                        <li className="flex items-center display-none -mb-4 mt-2 text-base font-bold text-white rounded-lg hover:bg-purple-800 text-center justify-center" >   
                            {a}
                        </li>

                        <li>
                            <Siderbar
                                to={"/#"}
                                span="Home"
                                d={IconHome}
                            />
                        </li>
                        <li>
                            <Siderbar 
                                to={"/#"}
                                span="Monitoria"
                                d={IconMonitoria}
                            />
                        </li>
                        <li>                            
                            <Dialog.Root  >
                                <CriarEdital                                    
                                    span="Criar edital"
                                    d={IconEdital}
                                />
                                <Dialog.Portal className=" bg-black/60 inset-0 fixed" >
                                    <Dialog.Overlay   />
                                        <EditalCriar />                                    
                                </Dialog.Portal>
                            </Dialog.Root>
                            
                        </li>
                        <li>
                            <Siderbar 
                                to={"/#"}
                                span="Conta"
                                d={IconConta}
                            />
                        </li>
                    </ul>
                </div>
            </aside>        
        </>
    )
}