import { Button } from "@material-tailwind/react"
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../../components/Input/Input"
import { SelectEdital } from "../../components/Sidebar/Sidebar";
import {Api}  from "../../services/api";

export const Cadastro = () =>{

    const [nome, setNome] = useState("");
    const [matricula, setMatricula] = useState("");
    const [cpf, setCpf] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [tipo, setTipo] = useState([]);
    const [tipoUsuario, SetTipoUsuario] = useState('')

    useEffect(() => {
        Api.get('TipoUsuario')
            .then(response => setTipo(response.data))
    }, [])

    const  handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if(nome == "" || !matricula || !cpf){
            setError("Preencha todos os campos!");
            return;
        }

        try {
            await Api.post(`usuario/${tipoUsuario}`,{                
                matricula: data.matricula,
                nome: data.nome,
                email: data.email,
                telefone: data.telefone,
                cpf: data.cpf,
                senha: data.senha
            })
            alert("Cadastrado com sucesso!");
            navigate("/Login")
        }catch(error){
            alert('Erro ao criar anúncio')
        }
    }

    return (
        <>
            <div className="md:grid md:grid-cols-1 grid-cols-1 h-full relative">
                <section className="mx-auto max-w-6xl py-5 px-12 lg:px-24 mb-24">
                    <h1 className="block uppercase tracking-wide text-white font-bold text-lg mb-5 text-center">Registra-se</h1>
                    <hr className="m-2 border-b-1 "/>
                    <form action="" onSubmit={handleSubmit} className="mt-2 flex-col gap-2">
                        <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-x-4">
                            <div  className="flex flex-col gap-2">
                                <Input
                                    label="Nome Completo"
                                    name='nome'
                                    placeholder='Maria Miranda'
                                    value={nome}
                                    onChange={(e) => [setNome(e.target.value), setError("")]}
                                />
                            </div>
                            <div  className="flex flex-col gap-2">
                                <Input
                                    label="Matricula"
                                    name='matricula'
                                    placeholder='2022113tads16'
                                    value={matricula}
                                    onChange={(e) => [setMatricula(e.target.value), setError("")]}
                                />
                            </div>
                            <div>
                                <Input
                                    label='E-mail'
                                    type='email'
                                    name='email'
                                    placeholder='caflo.2022114abc@aluno.ifpi.edu.br'
                                />
                            </div>
                            <div>
                                <Input
                                    label='Telefone'
                                    type='tel'
                                    name='telefone'
                                    placeholder='(xx) x-xxxx-xxxx'
                                />
                            </div>
                            <div>
                                <SelectEdital 
                                    label='Tipo'
                                    name='tipo'
                                    value={tipoUsuario}
                                    onChange={e => SetTipoUsuario(e.target.value)}
                                >
                                    {tipo.map((e) =>(
                                        <option
                                            key={e.id_tipo}
                                            value={e.id_tipo}
                                        >
                                            {e.descricao}
                                        </option>
                                    ))}
                                </SelectEdital>
                            </div>
                            <div>
                                <Input
                                    label='CPF'
                                    type='text'
                                    name='cpf'
                                    value={cpf}
                                    placeholder='123.321.456-78'
                                    onChange={(e) =>[setCpf(e.target.value), setError("")]}
                                />
                            </div>
                        </div>
                            <div className="items-center justify-center content-center ">
                                <Input
                                    label="Senha"
                                    type='password'
                                    name='senha'
                                    placeholder='**********'
                                />
                            </div>                            
                        <div className="justify-center text-red-800 text-center m-4">
                            <label htmlFor="">{error}</label>    
                        </div>
                        <div className="text-center">
                            <Button
                                color="indigo"
                                type="submit"
                                variant="gradient"
                                value="enviar"
                            >
                                Cadastra-se
                            </Button>
                            <hr className="m-2 border-b-1 "/>
                        </div>
                    </form>
                        <div className="justify-center items-center content-center text-center">
                            <h1 
                                className="text-white space-y-2"
                            >
                                Você já tem uma conta?
                                <br/>
                                <Link 
                                    to="/login" 
                                    className=" text-black bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white "
                                > 
                                    Fazer login 
                                </Link>
                            </h1>
                        </div>
                </section>
            </div>
        </>
    )
}