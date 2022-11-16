import '/src/styles/main.css'
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import axios from 'axios';


export const  Home = ()=> {
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/listUsuario')
      .then(response => {
      setUser(response.data);
    })
  }, [])
  
  
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 uppercase text-white transition-shadow shadow-lg ">
      
      <Typography
        as="li"
        variant="small"
        
        className="p-1 font-bold text-white hover:text-black text-base "
        textGradient
        
      >
        <Link to={'/Login'} className="text-base  flex font-bold items-center  hover:text-black ">
          Entrar
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        
        className="p-1 font-bold"
      >
        <Link to={'/Cadastro'} className="flex items-center  text-white  hover:text-black  text-base ">
          Cadastra-se
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        
        className="p-1 text-base font-bold text-white  hover:text-black "
      >
        <a href="#" className="flex items-center">
          Sobre
        </a>
      </Typography>
    </ul>
  );

  return (

    <div>
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 bg-purple-500 bg-opacity-30 mt-6">
        <div className="container mx-auto flex items-center justify-between text-white uppercase">
          <Typography
            as="a"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 text-base  font-bold transition-shadow shadow-lg"
          >
            <span>Monitoria-IFPI</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
      
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:text-black focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
      <div>
        {/* <ul className='text-center text-white m-6'>
              {user.map(usr =>{
                return <li key={usr.matricula} value={usr.matricula}>{usr.nome}</li>
              })}

          <p>opp</p>

        </ul> */}
      </div>
    </div>
    
  );
}
export default Home;

