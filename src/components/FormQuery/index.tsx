import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Date } from "../../@core/domain/entities/dates";
import { Time } from "../../@core/domain/entities/times";
import { responsePoke } from "../../pages/agendar-consulta";
import { UseHookFormQuery } from "../../utils/hooks/useFormQuery";
import { CardError } from "../Cards/Error";
import { CardSuccess } from "../Cards/Success";
import { Input } from "../Input";
import { Label } from "../Label";
import { InputSelect } from "../inputSelect";
import {
    ButtonFormAdd,
    ErrorForm,
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
import { FormEvent, useState } from "react";

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
        cardSuccess,
        data,
        handleFieldPokemon,
        pokemon02,
        pokemon03,
        pokemon04,
        pokemon05,
        pokemon06,
        nextPokemonIndex
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
                                    placeholder="Digite seu nome"
                                />
                                {errors.nome && <ErrorForm>{errors.nome?.message}</ErrorForm>}
                            </FormQueryContainerElementsColumn>

                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="sobrenome">
                                Sobrenome
                                </Label>
                                <Input {...register('sobrenome')} placeholder="Digite seu sobrenome"/>
                                {errors.nome && <ErrorForm>{errors.sobrenome?.message}</ErrorForm>}
                            </FormQueryContainerElementsColumn>
                        </FormQueryContainerElementsRow>

                        <FormQueryContainerElementsRow>
                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="regiao">
                                    Região
                                </Label>
                                <InputSelect  {...register('regiao')}>
                                    <option disabled selected hidden value=''>Selecione sua região</option>
                                    {
                                        regions.map((region, index)=>{
                                            return <option key={index} value={region.name} >{region.name}</option>
                                        })
                                    }
                                </InputSelect>
                                {errors.nome && <ErrorForm>{errors.regiao?.message}</ErrorForm>}
                            </FormQueryContainerElementsColumn>

                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="cidade">
                                    Cidade
                                </Label>
                                <InputSelect {...register('cidade')}>
                                    <option disabled selected hidden value=''>Selecione sua cidade</option>
                                    {
                                        locations.map((city, index)=> {
                                            return <option key={index} value={city.name}>{city.name}</option>
                                        })
                                    }
                                </InputSelect>
                                {errors.nome && <ErrorForm>{errors.cidade?.message}</ErrorForm>}
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

                        <FormQueryContainerElementsColumn>
                            <FormQueryContainerElementsRow>
                                <Label labelHtmlFor="Pokémon 01" >
                                    Pokémon 01
                                </Label>
                                <InputSelect  typeWidth="large" {...register('pokemon01')}>
                                    <option disabled selected hidden value=''>Selecione seu Pokémon</option>
                                    {
                                        pokemons.map((poke, index)=>{
                                            return <option key={index} value={poke.name}>{poke.name}</option>
                                        })
                                    }
                                </InputSelect>
                            </FormQueryContainerElementsRow>
                            {errors.nome && <ErrorForm>{errors.pokemon01?.message}</ErrorForm>}
                        </FormQueryContainerElementsColumn> 
                        
                        {
                            pokemon02 &&
                            <FormQueryContainerElementsColumn>
                                <FormQueryContainerElementsRow>
                                    <Label labelHtmlFor="Pokémon02" >
                                        Pokémon 02
                                    </Label>
                                    <InputSelect  typeWidth="large" {...register('pokemon02')}>
                                        <option disabled selected hidden value=''>Selecione seu Pokémon</option>
                                        {
                                            pokemons.map((poke, index)=>{
                                                return <option key={index} value={poke.name}>{poke.name}</option>
                                            })
                                        }
                                    </InputSelect>
                                </FormQueryContainerElementsRow>
                                {errors.nome && <ErrorForm>{errors.pokemon01?.message}</ErrorForm>}
                            </FormQueryContainerElementsColumn>
                        }

                        {   
                            pokemon03 &&
                            <FormQueryContainerElementsColumn>
                                <FormQueryContainerElementsRow>
                                    <Label labelHtmlFor="Pokémon03" >
                                        Pokémon 03
                                    </Label>
                                    <InputSelect  typeWidth="large" {...register('pokemon03')}>
                                        <option disabled selected hidden value=''>Selecione seu Pokémon</option>
                                        {
                                            pokemons.map((poke, index)=>{
                                                return <option key={index} value={poke.name}>{poke.name}</option>
                                            })
                                        }
                                    </InputSelect>
                                </FormQueryContainerElementsRow>
                                {errors.nome && <ErrorForm>{errors.pokemon01?.message}</ErrorForm>}
                            </FormQueryContainerElementsColumn>
                        }

                        {
                            pokemon04 &&
                            <FormQueryContainerElementsColumn>
                                <FormQueryContainerElementsRow>
                                    <Label labelHtmlFor="Pokémon04" >
                                        Pokémon 04
                                    </Label>
                                    <InputSelect  typeWidth="large" {...register('pokemon04')}>
                                        <option disabled selected hidden value=''>Selecione seu Pokémon</option>
                                        {
                                            pokemons.map((poke, index)=>{
                                                return <option key={index} value={poke.name}>{poke.name}</option>
                                            })
                                        }
                                    </InputSelect>
                                </FormQueryContainerElementsRow>
                                {errors.nome && <ErrorForm>{errors.pokemon01?.message}</ErrorForm>}
                            </FormQueryContainerElementsColumn>
                        }
                        
                        {
                            pokemon05 &&
                            <FormQueryContainerElementsColumn>
                                <FormQueryContainerElementsRow>
                                    <Label labelHtmlFor="Pokémon05" >
                                        Pokémon 05
                                    </Label>
                                    <InputSelect  typeWidth="large" {...register('pokemon05')}>
                                        <option disabled selected hidden value=''>Selecione seu Pokémon</option>
                                        {
                                            pokemons.map((poke, index)=>{
                                                return <option key={index} value={poke.name}>{poke.name}</option>
                                            })
                                        }
                                    </InputSelect>
                                </FormQueryContainerElementsRow>
                                {errors.nome && <ErrorForm>{errors.pokemon01?.message}</ErrorForm>}
                            </FormQueryContainerElementsColumn>
                        }

                        {
                            pokemon06 &&
                            <FormQueryContainerElementsColumn>
                                <FormQueryContainerElementsRow>
                                    <Label labelHtmlFor="Pokémon06" >
                                        Pokémon 06
                                    </Label>
                                    <InputSelect  typeWidth="large" {...register('pokemon06')}>
                                        <option disabled selected hidden value=''>Selecione seu Pokémon</option>
                                        {
                                            pokemons.map((poke, index)=>{
                                                return <option key={index} value={poke.name}>{poke.name}</option>
                                            })
                                        }
                                    </InputSelect>
                                </FormQueryContainerElementsRow>
                                {errors.nome && <ErrorForm>{errors.pokemon01?.message}</ErrorForm>}
                            </FormQueryContainerElementsColumn>
                        }
                        
                        {
                            nextPokemonIndex === 5 ?
                            ''
                            :
                            <FormQueryContainerElementsRow>
                                <ButtonFormAdd onClick={handleFieldPokemon}>
                                Adicionar novo pokémon ao time... +
                                </ButtonFormAdd>
                            </FormQueryContainerElementsRow>
                        }

                        <FormQueryContainerElementsRow>

                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="data">
                                    Data para Atendimento
                                </Label>
                                <InputSelect
                                    {...register('data')}
                                >
                                    <option disabled selected hidden value=''>Selecione uma data</option>
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
                                {errors.nome && <ErrorForm>{errors.data?.message}</ErrorForm>}
                            </FormQueryContainerElementsColumn>
                            
                            <FormQueryContainerElementsColumn>
                                <Label labelHtmlFor="hora">
                                    Horário de Atendimento
                                </Label>
                                <InputSelect   {...register('hora')}>
                                    <option disabled selected hidden value=''>Selecione um horário</option>
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
                                {errors.nome && <ErrorForm>{errors.hora?.message}</ErrorForm>}
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
                cardSuccess &&  <CardSuccess data={data?.data!} hora={data?.hora!}/>
            }
            {
                cardError &&  <CardError />
            }
        </> 
    )
}

export default FormQuery;