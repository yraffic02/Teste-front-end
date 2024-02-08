import { InputHTMLAttributes } from "react"
import { InputContainer } from "./style"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps>  = (props) =>{
    return(
        <InputContainer {...props}/>
    )
}