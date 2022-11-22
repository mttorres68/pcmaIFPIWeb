import { Navbar } from "@material-tailwind/react"
import { CardMonitoria } from "../../../components/Card/Card"

export const Monitoria = () =>{

    return (
        <div className="justify-center m-4">
            <Navbar className="mx-auto max-w-3xl items-center py-2 px-4 lg:px-8 lg:py-4 mt-6 text-center text-gray-800 font-extrabold text-4xl bg-white rounded-lg bg-opacity-80 relative border-l border-gray-200 uppercase">
                <span>Monitorias acadêmicas</span>
            </Navbar>

            <div className="py-2 px-4 lg:py-4 lg:px-8 mx-auto">
                <header className="justify-center grid grid-cols-1 text-center m-6 text-white md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4 ">
                    <CardMonitoria 
                        to="/Monitoria/Detalhes"
                        curso="Tads"
                        disciplina="Banco de dados I"
                    />
                    <CardMonitoria 
                        curso="Tads"
                        disciplina="Banco de dados II"
                    />
                    <CardMonitoria 
                        curso="Tads"
                        disciplina="Estrutura de dados I"
                    />
                    <CardMonitoria 
                        curso="Biologia"
                        disciplina="Quimica"
                    />
                    <CardMonitoria 
                        curso="Matematica"
                        disciplina="Algebria"
                    />
                    <CardMonitoria 
                        curso="Matematica"
                        disciplina="Intr. a matematica"
                    />

                </header>
            </div>
        </div>
    )
}