import { ReactNode } from "react"
import { SecondaryHeaderContainer } from "./style"

type TyepeSecondaryHeader = {
    children: ReactNode
}

export const SecondaryHeader = ({children}: TyepeSecondaryHeader) =>{
    return(
        <SecondaryHeaderContainer>
            {children}
        </SecondaryHeaderContainer>
    )
}