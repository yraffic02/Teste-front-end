import { FormEvent, useEffect, useState } from "react";
import { Input } from "../../../../components/Input"
import { Label } from "../../../../components/Label"
import { InputSelect } from "../../../../components/inputSelect";
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
} from "./style"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { responsePoke } from "../..";


type formQueryProps = {
    dates: string[],
    times: string[],
    locations: responsePoke[],
    regions: responsePoke[],
    pokemons: responsePoke[]
}


const FormQuery = ({dates, times, locations, regions, pokemons}:formQueryProps) => {  
    const notify = () => toast("Wow so easy !");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        notify()
    }
    return(
        <>
            <FormQueryContainer  onSubmit={handleSubmit}>
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
                            <Input id="nome"/>
                        </FormQueryContainerElementsColumn>

                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="sobrenome">
                            Sobrenome
                            </Label>
                            <Input id="sobrenome" />
                        </FormQueryContainerElementsColumn>
                    </FormQueryContainerElementsRow>

                    <FormQueryContainerElementsRow>
                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="regiao">
                                Região
                            </Label>
                            <InputSelect id="regiao">
                                {
                                   regions.map((region, index)=>{
                                        return <option key={index} value={region.name} >{region.name}</option>
                                    })
                                }
                            </InputSelect>
                        </FormQueryContainerElementsColumn>

                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="cidade">
                                Cidade
                            </Label>
                            <InputSelect id="cidade">
                                {
                                    locations.map((city, index)=> {
                                        return <option key={index} value={city.name}>{city.name}</option>
                                    })
                                }
                            </InputSelect>
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
                        <Label labelHtmlFor="Pokémon 01">
                            Pokémon 01
                        </Label>
                        <InputSelect id="Pokémon 01">
                            {
                                pokemons.map((poke, index)=>{
                                    return <option key={index} value={poke.name}>{poke.name}</option>
                                })
                            }
                        </InputSelect>
                    </FormQueryContainerElementsRow>

                    <FormQueryContainerElementsRow>
                        <ButtonFormAdd>
                        Adicionar novo pokémon ao time... +
                        </ButtonFormAdd>
                    </FormQueryContainerElementsRow>

                    <FormQueryContainerElementsRow>

                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="data">
                                Data para Atendimento
                            </Label>
                            <InputSelect id="data">
                                {
                                    dates.map((date, index)=>{
                                        return <option key={index} value={date}>{date}</option>
                                    })
                                }
                            </InputSelect>
                        </FormQueryContainerElementsColumn>
                        
                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="hora">
                                Horário de Atendimento
                            </Label>
                            <InputSelect id="hora">
                                {
                                    times.map((time, index)=>{
                                        return <option key={index} value={time}>{time}</option>
                                    })
                                }
                            </InputSelect>
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
        </>
    )
}

export default FormQuery;