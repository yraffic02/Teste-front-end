import { SelectHTMLAttributes } from "react"
import { InputContainer } from "./style"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    typeWidth?: 'small' | 'large';
}

export const InputSelect: React.FC<SelectProps> = ({typeWidth, ...props}) =>{
    return(
        <InputContainer typeWidth={typeWidth} as="select" {...props}/>
    )
}