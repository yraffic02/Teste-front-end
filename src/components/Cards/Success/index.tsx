import Image from "next/image"
import { CardButton, CardContainer, CardText, CardTextTitle } from "./style"
import Link from "next/link"
import { UseHookFormQuery } from "../../../utils/hooks/useFormQuery"

type CardProps = {
    data: string,
    hora: string,
    count: number
}

export const CardSuccess = ({data, hora, count}: CardProps) =>{ 
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
                para {count + 1}  pokémons foi realizado com sucesso!
            </CardText>
            <Link href="/">
                <CardButton>
                    Fazer Novo Agendamento
                </CardButton>
            </Link>
        </CardContainer>
    )
}