import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Date } from "../../@core/domain/entities/dates";
import { Time } from "../../@core/domain/entities/times";
import { responsePoke } from "../../pages/agendar-consulta";
import { UseHookFormQuery } from "../../utils/hooks/useFormQuery";
import { Input } from "../Input";
import { Label } from "../Label";
import { InputSelect } from "../inputSelect";
import {
    ButtonFormAdd,
    FormDivider,
    FormQueryButtonSubmit,
    FormQueryContainer,
    FormQueryContainerElementsColumn,
    FormQueryContainerElementsRow,
    FormQueryContent,
    FormQueryInformation,
    FormQueryInformationRow,
    FormQueryInformationText,
    FormQueryInformationTextExtraSmall,
    FormQueryTextSmallBold,
    FormQueryTextSmallRegular,
    FormQueryTitle,
} from "./style";
import { useEffect, useState } from "react";
import { CardSuccess } from "../Cards/Success";
import { CardError } from "../Cards/Error";

type formQueryProps = {
    dates: Date[],
    times: Time[],
    locations: responsePoke[],
    regions: responsePoke[],
    pokemons: responsePoke[]
}


const FormQuery = ({dates, times, locations, regions, pokemons}:formQueryProps) => {
    const {
        errors, 
        handleAddPokemon, 
        handleSubmit, 
        onSubmit, 
        register,
        isForm,
        cardError,
        cardSuccess
    } = UseHookFormQuery()
    
    return(
        <>
            {
                isForm && 
                <FormQueryContainer  onSubmit={handleSubmit(onSubmit)}>
                    <ToastContainer />
                    <FormQueryTitle>
                        Preencha o formulário abaixo para agendar sua consulta
                    </FormQueryTitle>
                    <FormQueryContent>

                        <FormQueryContainerElementsRow>
                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="nome">
                                    Nome
                                </Label>
                                <Input  
                                {...register('nome')}
                                />
                                {errors.nome && <p>{errors.nome?.message}</p>}
                            </FormQueryContainerElementsColumn>

                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="sobrenome">
                                Sobrenome
                                </Label>
                                <Input {...register('sobrenome')}/>
                                {errors.nome && <p>{errors.sobrenome?.message}</p>}
                            </FormQueryContainerElementsColumn>
                        </FormQueryContainerElementsRow>

                        <FormQueryContainerElementsRow>
                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="regiao">
                                    Região
                                </Label>
                                <InputSelect  {...register('regiao')}>
                                    {
                                        regions.map((region, index)=>{
                                            return <option key={index} value={region.name} >{region.name}</option>
                                        })
                                    }
                                </InputSelect>
                                {errors.nome && <p>{errors.regiao?.message}</p>}
                            </FormQueryContainerElementsColumn>

                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="cidade">
                                    Cidade
                                </Label>
                                <InputSelect {...register('cidade')}>
                                    {
                                        locations.map((city, index)=> {
                                            return <option key={index} value={city.name}>{city.name}</option>
                                        })
                                    }
                                </InputSelect>
                                {errors.nome && <p>{errors.cidade?.message}</p>}
                            </FormQueryContainerElementsColumn>
                        </FormQueryContainerElementsRow>

                        <FormQueryContainerElementsRow>
                            <FormQueryContainerElementsColumn>
                                <FormQueryTextSmallBold>
                                    Cadastre seu time
                                </FormQueryTextSmallBold>

                                <FormQueryTextSmallRegular>
                                    Atendemos até 06 pokémons por vez
                                </FormQueryTextSmallRegular>
                            </FormQueryContainerElementsColumn>
                        </FormQueryContainerElementsRow>

                        <FormQueryContainerElementsRow>
                            <Label labelHtmlFor="Pokémon 01" >
                                Pokémon 01
                            </Label>
                            <InputSelect  typeWidth="large" {...register('pokemon01')}>
                                {
                                    pokemons.map((poke, index)=>{
                                        return <option key={index} value={poke.name}>{poke.name}</option>
                                    })
                                }
                            </InputSelect>
                        </FormQueryContainerElementsRow>
                        {errors.nome && <p>{errors.pokemon01?.message}</p>}

                        <FormQueryContainerElementsRow>
                            <ButtonFormAdd onClick={handleAddPokemon}>
                            Adicionar novo pokémon ao time... +
                            </ButtonFormAdd>
                        </FormQueryContainerElementsRow>

                        <FormQueryContainerElementsRow>

                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="data">
                                    Data para Atendimento
                                </Label>
                                <InputSelect
                                    {...register('data')}
                                >
                                    {
                                        dates.map((date, index)=>{
                                            return (
                                                <option key={index} value={date.props?.date!}>
                                                    {date}
                                                </option>
                                            )
                                        })
                                    }
                                </InputSelect>
                                {errors.nome && <p>{errors.data?.message}</p>}
                            </FormQueryContainerElementsColumn>
                            
                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="hora">
                                    Horário de Atendimento
                                </Label>
                                <InputSelect   {...register('hora')}>
                                    {
                                        times.map((time, index)=>{
                                            return (
                                                <option key={index} value={time.props?.time}>
                                                    {time}
                                                </option>
                                            )
                                        })
                                    }
                                </InputSelect>
                                {errors.nome && <p>{errors.hora?.message}</p>}
                            </FormQueryContainerElementsColumn>

                        </FormQueryContainerElementsRow>

                    </FormQueryContent>

                    <FormDivider />

                    <FormQueryInformation>
                        <FormQueryInformationRow>
                            <FormQueryInformationText>
                                Número de pokémons a serem atendidos:
                            </FormQueryInformationText>
                            <FormQueryInformationText>
                                01
                            </FormQueryInformationText>
                        </FormQueryInformationRow>

                        <FormQueryInformationRow>
                            <FormQueryInformationText>
                                Atendimento unitário por pokémon: 
                            </FormQueryInformationText>
                            <FormQueryInformationText>
                                R$ 70,00
                            </FormQueryInformationText>
                        </FormQueryInformationRow>

                        <FormQueryInformationRow>
                            <FormQueryInformationText>
                                Subtotal:
                            </FormQueryInformationText>
                            <FormQueryInformationText>
                                R$ 70,00
                            </FormQueryInformationText>
                        </FormQueryInformationRow>

                        <FormQueryInformationRow>
                            <FormQueryInformationText>
                                Taxa geracional*: 
                            </FormQueryInformationText>
                            <FormQueryInformationText>
                                R$ 2,10
                            </FormQueryInformationText>
                        </FormQueryInformationRow>
                        
                        <FormQueryInformationTextExtraSmall>
                            *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%
                        </FormQueryInformationTextExtraSmall>

                    </FormQueryInformation>
                    
                    <FormQueryInformationRow>
                        <FormQueryTitle>
                            Valor Total: R$ 72,10
                        </FormQueryTitle>

                        <FormQueryButtonSubmit type="submit">
                            Concluir Agendamento
                        </FormQueryButtonSubmit>
                    </FormQueryInformationRow>  
                </FormQueryContainer>
            }
            {
                cardSuccess &&  <CardSuccess />
            }
            {
                cardError &&  <CardError />
            }
        </> 
    )
}

export default FormQuery;