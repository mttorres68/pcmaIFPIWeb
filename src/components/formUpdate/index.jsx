import * as Dialog from "@radix-ui/react-dialog";
import { Api } from "../../services/api";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea";


export const FormUpdate = (editalId) =>{

    const handleSubmit = async(event) =>{
        event.prevemtDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        try {
            await Api.put(`/Atualizar/${editalId}/edital`, {
                vagas: data.vagas,
                dataInscricao: data.dataInscricao,
                descricaoEdital: data.descricaoEdital
            })
            alert("Atualisado com sucesso!");
        } catch (error) {
            alert(error)
        }

        console.log(editalId);

    }

    return(
    <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed"/>
        <Dialog.Content 
            className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25"
        >
            <Dialog.Title
                className="text-3xl mb-4 font-black uppercase"
            > 
                Editar edital
            </Dialog.Title>
                <form onSubmit={handleSubmit}>
                    <Input 
                        label="Vaga(s)"
                        name="vagas"
                        placeholder="Informe o número de vaga(s)"
                    />
                    <Input
                        label="Data de Inscrição"
                        name="dataInscricao"
                        placeholder="Informe uma nova data"
                    />
                    <TextArea 
                        label="Descrição do edital"
                        name="descricaoEdital"
                        id="descricao"
                        placehoolder="Descrição"
                    />
                    <div>
                        <footer className="mt-4 flex justify-end gap-4">
                            <Dialog.Close type="button" className="bg-gray-700 px-5 h-12 rounded-md font-semibold hover:bg-gray-800">
                                Cancelar
                            </Dialog.Close>
                            <button
                                type="submit"
                                className="bg-[#1E88E5] px-5 h-12 rounded-md font-semibold hover:bg-blue-800"
                            >
                                Confirmar
                            </button>
                        </footer>
                    </div>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    )
}