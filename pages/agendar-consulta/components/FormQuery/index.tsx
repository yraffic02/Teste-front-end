import { Input } from "./components/Input"
import { Label } from "./components/Label"
import { InputSelect } from "./components/inputSelect";
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


export const FormQuery = () => {
    return(
        <>
            <FormQueryContainer>
                <FormQueryTitle>
                    Preencha o formulário abaixo para agendar sua consulta
                </FormQueryTitle>
                <FormQueryContent>

                    <FormQueryContainerElementsRow>
                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="nome">
                                Nome
                            </Label>
                            <Input />
                        </FormQueryContainerElementsColumn>

                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="sobrenome">
                            Sobrenome
                            </Label>
                            <Input />
                        </FormQueryContainerElementsColumn>
                    </FormQueryContainerElementsRow>

                    <FormQueryContainerElementsRow>
                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="regiao">
                                Região
                            </Label>
                            <InputSelect />
                        </FormQueryContainerElementsColumn>

                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="cidade">
                                Cidade
                            </Label>
                            <InputSelect />
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
                        <Label labelHtmlFor="cidade">
                            Pokémon 01
                        </Label>
                        <InputSelect />
                    </FormQueryContainerElementsRow>

                    <FormQueryContainerElementsRow>
                        <ButtonFormAdd>
                        Adicionar novo pokémon ao time... +
                        </ButtonFormAdd>
                    </FormQueryContainerElementsRow>

                    <FormQueryContainerElementsRow>

                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="nome">
                                Data para Atendimento
                            </Label>
                            <InputSelect />
                        </FormQueryContainerElementsColumn>
                        
                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="sobrenome">
                                Data para Atendimento
                            </Label>
                            <InputSelect />
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

                    <FormQueryButtonSubmit>
                        Concluir Agendamento
                    </FormQueryButtonSubmit>
                </FormQueryInformationRow>
                
            </FormQueryContainer>
        </>
    )
}