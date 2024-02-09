import { InputHTMLAttributes, forwardRef } from "react"
import { InputContainer } from "./style"

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(({name, ...rest}, ref)=>{
    return (
        <InputContainer {...rest} name={name} ref={ref}/>
    )
})

