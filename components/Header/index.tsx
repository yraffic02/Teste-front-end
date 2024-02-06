import Image from "next/image"
import { HeaderContainer, HeaderDiv, HeaderLinkPrimary, HeaderLinkSecondary, HeaderLogo, HeaderLogoTitle } from "./style"

export const Header = () =>{
    return (
        <HeaderContainer>
            <HeaderLogo>
                <Image
                    src='/images/white-pokeball.svg'
                    height={37}
                    width={37}
                    alt="logo poke"
                />
                <HeaderLogoTitle>
                    Centro Pokémon
                </HeaderLogoTitle>
            </HeaderLogo>
            <HeaderDiv>
                <HeaderLinkPrimary>
                    Quem Somos
                </HeaderLinkPrimary>
                <HeaderLinkSecondary>
                    Agendar Consulta
                </HeaderLinkSecondary>
            </HeaderDiv>
        </HeaderContainer>
    )
}