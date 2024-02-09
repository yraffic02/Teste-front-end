import { SelectHTMLAttributes, forwardRef } from "react"
import { InputContainer } from "./style"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    typeWidth?: 'small' | 'large';
}

export const InputSelect = forwardRef<HTMLSelectElement, SelectProps>(({name, typeWidth, ...rest}, ref)=>{
    return (
        <InputContainer {...rest} name={name} ref={ref} typeWidth={typeWidth} as="select" />
    )
})

InputSelect.displayName = 'InputSelect';