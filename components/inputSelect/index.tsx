import { SelectHTMLAttributes } from "react"
import { InputContainer } from "./style"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const InputSelect: React.FC<SelectProps> = (props) =>{
    return(
        <InputContainer as="select" {...props}/>
    )
}