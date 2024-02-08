import styled from "styled-components";

export const SecondaryHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 0.75rem;

    padding: 2rem 0 3.75rem 6.625rem;

    background-color: ${(props)=> props.theme.colors.redPrimary};
    color: ${(props)=> props.theme.colors.white};    
`