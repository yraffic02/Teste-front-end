import Image from "next/image"
import { CardButton, CardContainer, CardText, CardTextTitle } from "./style"

export const CardSuccess = () =>{
    return(
        <CardContainer>
            <CardTextTitle>
                Consulta Agendada
            </CardTextTitle>
            <Image 
                alt="check"
                src='/check.svg'
                height={38}
                width={38}
            />
            <CardText>
                Seu agendamento para dia xx/xx/xxxx, às 00h00m,
                para 0x pokémons foi realizado com sucesso!
            </CardText>
            <CardButton>
                Fazer Novo Agendamento
            </CardButton>
        </CardContainer>
    )
}