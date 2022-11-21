import { Link } from "react-router-dom"
import * as Dialog from "@radix-ui/react-dialog";
import { memo } from "react";

export const SiderbarComponete = memo(({to,d,...props} )=> {

    return (       
            
                <Link
                    to={to}
                    className="flex items-center p-2 text-base font-bold text-white rounded-lg hover:bg-purple-800 "
                >
                <svg
                    className="w-6 h-6 text-white transition-shadow shadow-md duration-75 group-hover:text-black "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        // CAMINHO DO ICON
                        d={d}
                    />
                </svg>
                <span className="ml-3">{props.span}</span>
            </Link>
        
    )
})

export const CriarEdital = ({d,...props}) =>{

    return(
        <>
            <Dialog.Trigger  className="flex items-center p-2 text-base font-bold text-white rounded-lg hover:bg-purple-800 ">
            <svg
                    className="w-6 h-6 text-white transition-shadow shadow-md duration-75 group-hover:text-black "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        // CAMINHO DO ICON
                        d={d}
                    />
            </svg>
            <span className="ml-3">{props.span}</span>
            </Dialog.Trigger>
        </>
    )
}

export const SelectEdital = ({value,label,children, name ,onChange,...props}) =>{

    return(
        <>
            <label 
                htmlFor={name}
                className="block uppercase tracking-wide text-white text-xs font-bold mb-1"
            >
                {label}
            </label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full bg-white-200 text-black border-2 border-gray-400 rounded-lg py-2 px-4 mb-2 focus:outline-none focus:ring-2 focus:ring-offset-black focus:border-transparent hover:bg-blue-gray-100 placeholder-blue-gray-900"
            >
                {children}
            </select>
        </>
    )
}