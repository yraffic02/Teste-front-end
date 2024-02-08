import Image from "next/image"
import { CardButton, CardContainer, CardText, CardTextTitle } from "./style"


export const CardError = () =>{
    return(
        <CardContainer>
            <CardTextTitle>
                Houve um problema no agendamento
            </CardTextTitle>
            <Image 
                alt="check"
                src='/warning.svg'
                height={38}
                width={38}
            />
            <CardText>
                mensagem de erro
            </CardText>
            <CardButton>
                Fazer Novo Agendamento
            </CardButton>
        </CardContainer>
    )
}