import { IconConta, IconEdital, IconHome, IconMonitoria, IconRelatorios } from "../../components/Icons"
import { CriarEdital, SiderbarComponete } from "../../components/Sidebar/Sidebar"
import * as Dialog from "@radix-ui/react-dialog";
import { EditalCriar } from "./EditalCriar";
import { setTipoUsuarioFuc } from "../../components/localStorage";
import { memo } from "react";

export const Sidebar = memo(() =>{

    return (
        <>
            <aside className="" aria-label="Sidebar">
                <div className="overflow-y-auto py-2 px-1 bg-purple-500 bg-opacity-30 rounded-lg">
                    <ul className="space-y-6">
                        <li>
                            <SiderbarComponete
                                to={"/#"}
                                span="Home"
                                d={IconHome}
                            />
                        </li>
                        <li>
                            <SiderbarComponete 
                                to={"/Edital/Monitoria"}
                                span="Monitoria"
                                d={IconMonitoria}
                            />
                        </li>
                        <li>
                            <SiderbarComponete 
                                to={"#"}
                                span="Relatorio"
                                d={IconRelatorios}
                            />
                        </li>
                        <li className={!setTipoUsuarioFuc() ?"invisible hidden" : "visible "}>                            
                            <Dialog.Root >
                                <CriarEdital                                    
                                    span="Criar edital"
                                    d={IconEdital}
                                />
                                <Dialog.Portal >
                                    <Dialog.Overlay  className="bg-black/60 inset-0 fixed" />
                                        <EditalCriar />                                    
                                </Dialog.Portal>
                            </Dialog.Root>
                            
                        </li>
                        <li>
                            <SiderbarComponete 
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
})