import ReactDOM from 'react-dom/client'
import React, { Children } from 'react';
import App from "./App.jsx";
import './styles/main.css';
import {ThemeProvider} from "@material-tailwind/react"
import ErrorPage from "./pages/err/ErroPage.jsx";
import Home from './pages/home/Home.jsx';
import { Cadastro } from "./pages/cadastro/Cadastro.jsx";


import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
  import Rotas from "./routes/Rotas.jsx";
import { Log } from "./pages/Log";
import { Edital } from './pages/edital/Edital.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <App />    
    
  </React.StrictMode>
)
