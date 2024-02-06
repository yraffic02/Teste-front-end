import styled from "styled-components";

export const WhoWeAreContainer = styled.main`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const WhoWeAreTitle = styled.h1`
    font: ${(props)=> props.theme.fonts.fontH1};
`
export const WhoWeAreSecondaryTitle = styled.h1`
    font: ${(props)=> props.theme.fonts.body2Regular};
    color: ${(props)=> props.theme.colors.grayPrimary};
`

export const WhoWeAreContainerText = styled.div`
    max-width: 25.5rem;
    height: 100%;
    
    text-align: start;


    padding-top: 2rem;
`

export const WhoWeAreH2 = styled.h2`
    font: ${(props)=> props.theme.fonts.fontH4};
    color: ${(props)=> props.theme.colors.blackPrimary};
`

export const WhoWeAreP = styled.p`
    font: ${(props)=> props.theme.fonts.body1Regular};
    color: ${(props)=> props.theme.colors.blackPrimary};
`