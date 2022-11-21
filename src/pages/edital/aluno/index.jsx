import {  useEffect, useState, memo } from "react";
import { ButaoCadastro, ButtaoDescadastrar } from "../../../components/Button";
import { Card } from "../../../components/Card/Card"
import { Api } from "../../../services/api";


export const VisaoAluno = memo(() => {
    const [edital, setEdital] = useState([]);
    const [idEditalParticipante, setIdEditalParticipante] = useState();
    const [Descadastro, setDescadastro] = useState()

    let usuario
    const indetUserLogado =  JSON.parse(localStorage.getItem('u'));
    if(indetUserLogado){
        usuario = indetUserLogado.matri;
    }

    useEffect(() => {
        try {
            getEdital()
            Api.get(`Participante/${usuario}/ab`)
                .then(response => setIdEditalParticipante(response.data?.userId))
            
        } catch (error) {
            console.log(error);
        }
        
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

    async function Cadastra(idEdital){
        try {
            await Api.post(`Participante/${idEdital}`, {
                userId: usuario,                
            }).then((response) => setIdEditalParticipante(response.data))
                
        } catch (error) {
            console.log(error);
        }
    }

    async function DescadastroPar(){
        try {
            await Api.delete(`Participante/${usuario}/delete`)
                .then((response) => setDescadastro(response.data))
        } catch (error) {
            console.log(error);
            console.log(usuario);
        }
    }

    console.log(usuario);
    console.log(edital);

    return(
        <>
            <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 ">
                {edital.map((e, index, array) =>{
                    return < Card 
                        key={e.idEdital}
                        curso={e.cursoSigla}
                        disciplina={e.editalDisciplina?.nome}
                        vagas={e.vagas}
                        data={e.dataInscricao}
                        descricao={e.descricaoEdital}
                        to={e.edital}

                        children={
                            <div className=" mt-2 items-center text-center justify-center flex">
                                <div className={e.participanteId === usuario ? "visible" : "invisible hidden"}>
                                    <ButtaoDescadastrar
                                        key={e.idEdital}
                                        span="Descadastrar-se"
                                        onClick={() => DescadastroPar()}

                                    />
                                </div>
                                <div className={e.participanteId != usuario ?"visible" :"invisible hidden"}>
                                    <ButaoCadastro
                                        key={e.idEdital}
                                        to=''
                                        span="Cadastra-se"
                                        onClick={() => Cadastra(e.idEdital)}
                                    />
                                </div>
                            </div>
                        }
                    />
                })}
            </div>      
        </>
    )
})