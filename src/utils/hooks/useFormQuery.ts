import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues, formSchema } from "../schema/formSchema";
import { toast } from "react-toastify";
import { FormEvent } from "react";

export const UseHookFormQuery = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: yupResolver(formSchema)
    }) 

    const simulateServerRequest = async (formData: FormValues) => {
        return new Promise<FormValues>((resolve, reject) => {
            setTimeout(() => {
                resolve(formData);
            }, 2000);
        });
    };
    
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
            toast.promise(
                simulateServerRequest(data),
                {
                    pending: 'Enviando formulário...',
                    success: 'Formulário enviado com sucesso!',
                    error: 'Erro ao enviar formulário. Por favor, tente novamente.',
                }
            ).then( (res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            });
    }
    
    const handleAddPokemon = (e: FormEvent) =>{
        e.preventDefault()
        console.log('oi')
    } 

    return{
        handleAddPokemon,
        onSubmit,
        handleSubmit,
        register,
        errors
    }
}