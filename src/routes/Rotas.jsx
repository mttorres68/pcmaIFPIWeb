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




const Rotas = () =>{
    return (
        <AuthProvider>
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
                        <Route
                            exact
                            path="/Edital/Monitoria" 
                            element={
                                <ProtectedLayout>
                                    <Monitoria />
                                </ProtectedLayout>
                            }
                            />
                        <Route exact path="/Edital/Aluno" element={ <VisaoAluno />}/>
                        <Route exact path="/Edital" element={ <Edital />}/>
                        
                        
                    </Routes>
                </Fragment>
            </BrowserRouter>
        </AuthProvider>
    )
}



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
export default Rotas