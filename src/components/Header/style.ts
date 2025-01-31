import Link from "next/link";
import styled from "styled-components";

interface isOpen {
    isOpen: boolean
}

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.375rem 5.18rem;

    background-color: ${(props)=> props.theme.colors.white};
`

export const HeaderLogo = styled.div<isOpen>`
    display: flex;
    align-items: center;
    justify-content: ${(props)=> (props.isOpen ? 'center': '')};

    padding: 0.75rem;

    gap: 0.5rem;

    border-radius: ${(props)=> (props.isOpen ? ' 3.125rem': ' 50%')};

    background-color: ${(props)=> props.theme.colors.redPrimary};

    cursor: pointer;

    overflow: hidden;
    transition: width 0.5s ease;
    width: ${(props) => (props.isOpen ? '16rem' : '4rem')};
`

export const HeaderLogoTitle = styled.h1<isOpen>`
    font: ${(props)=> props.theme.fonts.fontH3};
    
    color: ${(props)=> props.theme.colors.white};
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
`

export const HeaderLinkPrimary = styled.p`
    font: ${(props)=> props.theme.fonts.body2Link};
    cursor: pointer;
`

export const HeaderLinkSecondary = styled.p`
    border-radius: 1.875rem;
    padding: 0.87rem 1.5rem;

    font: ${(props)=> props.theme.fonts.body2Bold};
    font-family: 'Inter';

    color: ${(props)=> props.theme.colors.white};
    background-color: ${(props)=> props.theme.colors.redPrimary};

    cursor: pointer;
`

export const HeaderDiv = styled.div`
    display: flex;
    align-items: center;

    gap: 1.875rem;
`
