import Image from "next/image"
import { HeaderContainer, HeaderDiv, HeaderLinkPrimary, HeaderLinkSecondary, HeaderLogo, HeaderLogoTitle } from "./style"
import Link from "next/link"

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
                <Link href='/quem-somos'>
                    <HeaderLinkPrimary>
                        Quem Somos
                    </HeaderLinkPrimary>
                </Link>
                <Link href='agendar-consulta'>
                    <HeaderLinkSecondary>
                        Agendar Consulta
                    </HeaderLinkSecondary>
                </Link>
            </HeaderDiv>
        </HeaderContainer>
    )
}