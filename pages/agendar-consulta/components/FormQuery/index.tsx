import { Input } from "../Input"
import { Label } from "../Label"
import { 
    FormQueryContainer, 
    FormQueryContainerElementsColumn, 
    FormQueryContainerWrap, 
    FormQueryContent, 
    FormQueryTextSmallBold, 
    FormQueryTextSmallRegular, 
    FormQueryTitle 
} from "./style"

export const FormQuery = () => {
    return(
        <FormQueryContainer>
            <FormQueryTitle>Preencha o formulário abaixo para agendar sua consulta</FormQueryTitle>
            <FormQueryContainerWrap>
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
            </FormQueryContainerWrap>
            <FormQueryContent>
                <FormQueryTextSmallBold>
                    Cadastre seu time
                </FormQueryTextSmallBold>
                <FormQueryTextSmallRegular>
                    Atendemos até 06 pokémons por vez
                </FormQueryTextSmallRegular>

            </FormQueryContent>
        </FormQueryContainer>
    )
}