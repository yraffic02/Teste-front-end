import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormValues, formSchema } from "../schema/formSchema";
import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";

export const UseHookFormQuery = () =>{
    const router = useRouter();
    const [isForm, setIsFrom] = useState(true)
    const [cardSuccess, setCardSuccess] = useState(false)
    const [cardError, setCardError] = useState(false)
    const [data, setData] = useState<FormValues>()
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: yupResolver(formSchema)
    })
    const [pokemon02, setPokemon02] = useState(false)
    const [pokemon03, setPokemon03] = useState(false)
    const [pokemon04, setPokemon04] = useState(false)
    const [pokemon05, setPokemon05] = useState(false)
    const [pokemon06, setPokemon06] = useState(false)
    const [nextPokemonIndex, setNextPokemonIndex] = useState(0); 

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
                if(res){
                    setIsFrom(!isForm)
                    setCardSuccess(!cardSuccess)
                    setData(res)
                }
            }).catch((err) => {
                console.log(err)
                setIsFrom(!isForm)
                setCardError(!cardError)
            });
    }

    const handleFieldPokemon = (e: FormEvent) => {
        e.preventDefault()
        const pokemonStates = [pokemon02, pokemon03, pokemon04, pokemon05, pokemon06];
        
        const nextIndex = pokemonStates.findIndex((pokemonState, index) => index >= nextPokemonIndex && !pokemonState);

        if (nextIndex === -1) {
            setNextPokemonIndex(0);
            return;
        }

        switch (nextIndex) {
            case 0:
                setPokemon02(true);
                break;
            case 1:
                setPokemon03(true);
                break;
            case 2:
                setPokemon04(true);
                break;
            case 3:
                setPokemon05(true);
                break;
            case 4:
                setPokemon06(true);
                break;
            default:
                break;
        }

        setNextPokemonIndex(nextIndex + 1);
    };

    return{
        handleFieldPokemon,
        onSubmit,
        handleSubmit,
        register,
        errors,
        isForm,
        cardError,
        cardSuccess,
        data,
        setCardError,
        setCardSuccess,
        setIsFrom,
        pokemon02,
        pokemon03,
        pokemon04,
        pokemon05,
        pokemon06, 
        nextPokemonIndex
    }
}