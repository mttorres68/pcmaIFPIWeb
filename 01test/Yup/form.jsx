import { Formik, Field, Form } from 'formik';
import { YupInput } from './YupInput/YupInput';


export const FormTest = () => {

    return(

        <div className="bg-gray-900 text-white justify-center items-center">
            <Formik
                initialValues={{
                    nome: '',
                    email:'',

                }}
            >
                <Form>
                    <YupInput 
                        label="Nome"
                        name="nome"
                    />

                    <YupInput 
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="mario02@acm.com"
                        
                    />
                    <button className="items-center justify-center content-center mx-[50%]" type="submit"> Enviar</button>
                </Form>

            </Formik>

        </div>
    )
}