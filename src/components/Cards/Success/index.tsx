import Image from "next/image"
import { CardButton, CardContainer, CardText, CardTextTitle } from "./style"

type CardProps = {
    data: string,
    hora: string
}

export const CardSuccess = ({data, hora}: CardProps) =>{
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
                Seu agendamento para dia {data}, às {hora},
                para 0x pokémons foi realizado com sucesso!
            </CardText>
            <CardButton>
                Fazer Novo Agendamento
            </CardButton>
        </CardContainer>
    )
}