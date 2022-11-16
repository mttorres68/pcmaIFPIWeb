const user = [
    {
        nome: "rangel nunes", 
        matricula: 'rangel1234', 
        email: 'rangelnunes@gami.com', 
        telefone: '1223344', 
        cpf: '23454354335'
    },
    {
        nome: 'teste', 
        matricula: 'teste',
        email: 'teste@teste.com', 
        telefone: '123456789', 
        cpf: '1234567'
    }
]

let matri = "rangel1234";
let senha = '1223344'

export const  Teste = () => {
    for(let ele of user){
        if(ele.matricula == matri){
            
            for(let e of user){
                if(e.senha){
                    return 'ok'
                }
            }
        }{
            
        }
    }

}

