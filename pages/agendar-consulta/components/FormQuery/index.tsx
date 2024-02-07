import { Input } from "../Input"
import { Label } from "../Label"
import { 
    ButtonFormAdd,
    FormDivider,
    FormQueryContainer, 
    FormQueryContainerElementsColumn, 
    FormQueryContainerElementsRow, 
    FormQueryContent, 
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
                            <Input />
                        </FormQueryContainerElementsColumn>

                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="cidade">
                                Cidade
                            </Label>
                            <Input />
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
                        <Input />
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
                            <Input />
                        </FormQueryContainerElementsColumn>
                        
                        <FormQueryContainerElementsColumn>
                            <Label labelHtmlFor="sobrenome">
                                Data para Atendimento
                            </Label>
                            <Input />
                        </FormQueryContainerElementsColumn>

                    </FormQueryContainerElementsRow>

                </FormQueryContent>

                <FormDivider />

            </FormQueryContainer>
        </>
    )
}