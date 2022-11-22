import { Navbar } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function Detalhes() {    
    
    
    return (
        <div className="justify-center m-4">            
            <Navbar
                aria-label="Site nav"
                className="mx-auto flex max-w-3xl items-center justify-between p-4 py-2 px-4 lg:px-8 lg:py-4 mt-6 text-center font-extrabold bg-gray-200 rounded-lg bg-opacity-95 relative border-collapse border-gray-500 hover:border-purple-800 shadow-2xl"
            >
                <NavLink
                    to="/Monitoria/Detalhes"                    
                    className="inline-flex h-10 w-50 items-center justify-center"
                >
                    <h1  className="flex text-2xl font-semibold text-gray-800">Monitoria de banco de dados</h1>
                </NavLink>

                <ul className="flex items-center gap-2 text-gray-800 ">
                    <li className='hover:text-purple-600 '>
                        <NavLink className="rounded-lg px-3 py-2 " to="/Monitoria/Detalhes/ChatGeral"> Chat geral </NavLink>
                    </li>

                    <li className='hover:text-purple-600'>
                        <NavLink className="rounded-lg px-3 py-2" to="/Monitoria/Detalhes/Frequencia"> Frequencia </NavLink>
                    </li>

                    <li className='hover:text-purple-600'>
                        <NavLink
                            to="/Monitoria/Detalhes/Alunos"
                            className="inline-flex items-center rounded-lg px-3 py-2"
                        >
                            Alunos
                        </NavLink>
                    </li>
                </ul>
            </Navbar>

            <div>
                <Outlet/>
            </div>
            
        </div>
    )
}
