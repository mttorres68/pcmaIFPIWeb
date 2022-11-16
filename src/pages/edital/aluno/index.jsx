import { Children, useEffect, useState } from "react";
import { ButaoCadastro } from "../../../components/Button";
import { Card } from "../../../components/Card/Card"
import { Api } from "../../../services/api";


export const VisaoAluno = () => {
    const [edital, setEdital] = useState([]);


    useEffect(() => {
        getEdital()       
        
    }, []);

    /**
        *!EDITAL
        **BUSCA EDITAIS NO BANCO
        *?OK
    */
    async function getEdital(){
        await Api.get('Edital').then(
            response =>{
                setEdital(response.data);
            }
        )
    }

    return(
        <>
            <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 ">
                {edital.map((e, index) =>{
                    return < Card 
                        key={e.idEdital}
                        curso={e.cursoSigla}
                        disciplina={e.editalDisciplina.nome}
                        vagas={e.vagas}
                        data={e.dataInscricao}
                        descricao={e.descricaoEdital}
                        to={e.edital}

                        children={
                            <div className=" mt-2 items-center text-center justify-center flex">
                                <ButaoCadastro
                                    to=''
                                    span="Cadastra-se"
                                />

                            </div>
                        }
                    />
                })}
            </div>      
        </>
    )
}