import { memo } from "react"
import { Link } from "react-router-dom"
import { ButaoCadastro } from "../Button"


export const Card = memo(({vagas,data, disciplina,curso,descricao,children,...props})=>{

    return (
        <div 
            className="block rounded-xl border border-gray-800 bg-gray-900 p-4 shadow-xl bg-opacity-[0.7]"
        >
            <div >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                </svg>
                <h1 className="mt-3 text-xl flex font-bold text-white " >
                    Curso:
                    <p 
                        className="ml-1 uppercase font-medium"
                    > 
                        {curso}
                    </p>
                </h1>
                <span 
                    className="mt-3 text-base font-bold text-white"
                >
                    {disciplina}
                </span>
                <hr className="m-2 " />

                <span className="mt-3 text-sm text-left text-white" >
                    Quantidade de vaga(s): {vagas}
                    <br />
                    
                </span>
                <span className="mt-3 text-sm text-left text-white">
                    Data de inscrição: {data}
                </span>

                <p className="mt-4 text-sm text-white text-justify">
                    {descricao}
                </p>                
            </div>
                
                {children}
        </div>
    )
})

export const CardMonitoria = ({to, curso, disciplina, ...props}) =>{

    return(
        <Link to={to}  className="block rounded-xl border text-start border-gray-800 bg-gray-900 p-4 shadow-xl bg-opacity-[0.7] hover:bg-purple-500 hover:bg-opacity-30">
            <span className="text-2xl text-white font-semibold">
                Curso - {curso}
            </span>
            <p className="font-normal">
                Disciplina - {disciplina}
            </p>
            
        </Link>
    )
}