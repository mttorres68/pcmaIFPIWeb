
import * as Dialogo from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";

export const ButtonExcluir = ({nome, myKey, d, onClick, value, ...props}) =>{

    return(
        <>
            <button
                key={myKey}
                id={myKey}
                value={value}
                onClick={onClick}
                data-mdb-tripple="true"
                data-mdb-ripple-color="light"
                className="px-4 py-2.5 bg-red-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out flex"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 2 28 28" 
                    strokeWidth="1.5"
                    stroke="currentColor" 
                    className="w-5 h-5 "
                >
                    <path 
                        trokelinecap="round"
                        strokeLinejoin="round"
                        d={d}
                    />
                </svg>
                <span
                    className="align-middle justify-center inline-block"
                > 
                    {props.span}
                </span>
            </button>
        </>
    )
}


export const ButtonEditar = ({value, keyMy, d,onClick, ...props} )=>{

    return(
        <>
            <Dialogo.Trigger                
                key={keyMy}
                id={keyMy}
                value={value}
                onClick={onClick}
                type="button"
                data-mdb-tripple="true"
                data-mdb-ripple-color="light"
                className="flex px-4 py-2.5 bg-blue-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 2 28 28" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="w-5 h-5"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d={d}
                    />
                </svg>
                <span
                    className="align-middle justify-center inline-block"
                > 
                    {props.span}
                </span>
            </Dialogo.Trigger>
        </>
    )
}

export const ButaoCadastro = ({value, keyMy, to, ...props}) => {

    return (
        <>
            <div>
                <Link to={to}>
                    <button
                        value={value}
                        key={keyMy}                        
                        className="flex px-4 py-2.5 bg-blue-600 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        <span
                            className="justify-center text-center"
                        > 
                        {props.span}
                        </span>
                    </button>
                </Link>
            </div>
        </>
    )
}