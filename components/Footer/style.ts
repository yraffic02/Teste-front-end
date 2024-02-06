import styled from "styled-components";


export const FooterContainer = styled.footer`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    font: ${(props)=> props.theme.fonts.body2Regular};
    color: ${(props)=> props.theme.colors.white};
    background-color: ${(props)=> props.theme.colors.blackSecondary};

    padding: 1.5rem;
`