import { Fragment } from "react";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import {Home} from "../pages/home/Home";
import { Cadastro } from "../pages/cadastro/Cadastro";
import { ProtectedLayout } from "../components/ProtectedLayout";
import { Edital } from "../pages/edital/Edital";
import { AuthProvider } from "../contexts/Auth";
import {Log} from "../pages/Log"
import { Monitoria } from "../pages/edital/monitoria/Monitoria";
import { VisaoAluno } from "../pages/edital/aluno";
import Detalhes from "../pages/edital/monitoria/detalhes";
import Atividades from "../pages/edital/monitoria/detalhes/Inicio";
import Frequencia from "../pages/edital/monitoria/detalhes/frequencia";
import Alunos from "../pages/edital/monitoria/detalhes/alunos";
import ChatGeral from "../pages/edital/monitoria/detalhes/chatGeral/chatGeral";
import Dashboard from "../pages/edital/monitoria/detalhes/Inicio";




// const Rotas = createBrowserRouter([
//     {
//         path:"/",
//         element:<Home />,
//         children:[
//             {
//                 path:""
//             }
//         ]
//     }
// ])





const Rotas = () =>{
    return (
        
        <BrowserRouter>
                <Fragment>
                    <Routes>
                        <Route  exact path="*" element={<Home/>}/>
                        <Route path="/Login" element={<Log/>}/>
                        <Route exact path="/Cadastro" element={<Cadastro/>}/>
                        <Route 
                            path="/*" 
                            element={
                                <ProtectedLayout>

                                </ProtectedLayout>
                            }
                            />
                        {/* <Route
                            exact
                            path="/Edital/Monitoria" 
                            element={
                                <ProtectedLayout>
                                <Monitoria />
                                </ProtectedLayout>
                            }
                        /> */}
                        <Route exact path="/Edital/Aluno" element={ <VisaoAluno />}/>
                        <Route exact path="/Edital" element={ <Edital />}/>
                        <Route exact path="/Edital/atualizado" element={ <Edital />}/>
                        <Route 
                            exact 
                            path="/Edital/Monitoria"
                            element={ <Monitoria/>} 
                            />
                        <Route path="/Monitoria/Detalhes" element={<Detalhes />}>
                            <Route 
                                path="/Monitoria/Detalhes"
                                element={<Dashboard/>}
                            
                            />
                            
                            <Route
                                exact
                                path="/Monitoria/Detalhes/ChatGeral"
                                element={ <ChatGeral/>}
                            />
                            <Route
                                exact
                                path="/Monitoria/Detalhes/Frequencia"
                                element={ <Frequencia/>}
                            />
                            <Route
                                exact
                                path="/Monitoria/Detalhes/Alunos"
                                element={ <Alunos/>}
                                loader
                            />
                        </Route>                   
                    </Routes>
                    <Routes>
                        
                    </Routes>

                </Fragment>
            </BrowserRouter>
        
        )
    }
    
    
export default Rotas

                            // const rota = createBrowserRouter([
                            //         {
                            //             path: "/",
                            //             element: <Home />,
                            //             errorElement: <ErrorPage />,
                            //         },{
                            //             path: "Login",
                            //             element: <Log />,
                            //             children:[
                            //                 {
                            //                     path: "Edtial",
                            //                     element: <Edital/>,
                            //                     children:[
                            //                         {
                            //                             path:"Monitoria",
                            //                             element:(
                            //                                 <ProtectedLayout>
                            //                                     <Monitoria/>
                            //                                 </ProtectedLayout>
                            //                             )
                            //                         }
                            //                     ]
                            //                 }
                            //         ]
                            //         },{
                            //             path: "Cadastro",
                            //             element: <Cadastro />
                            //         }
                            // ])