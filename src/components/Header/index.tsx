import Image from "next/image"
import { HeaderContainer, HeaderDiv, HeaderLinkPrimary, HeaderLinkSecondary, HeaderLogo, HeaderLogoTitle } from "./style"
import Link from "next/link"
import { useEffect, useState } from "react";

export const Header = () =>{
    const [isLogoOpen, setIsLogoOpen] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLogoOpen(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => {
        setIsLogoOpen(true);
    };

    const handleMouseLeave = () => {
        setIsLogoOpen(false);
    };
    
    return (
        <HeaderContainer>
            <HeaderLogo
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                isOpen={isLogoOpen}
            >
                <Image
                    src='/images/white-pokeball.svg'
                    height={37}
                    width={37}
                    alt="logo poke"
                />
                <HeaderLogoTitle isOpen={isLogoOpen}>
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