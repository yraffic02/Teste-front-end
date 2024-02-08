import { ReactNode } from "react"
import { LabelContainer } from "./style"

type LabelProps = {
    labelHtmlFor: string,
    children: ReactNode
}

export const Label = ({labelHtmlFor, children}: LabelProps) =>{
    return (
        <LabelContainer htmlFor={labelHtmlFor}>
            {children}
        </LabelContainer>
    )
}