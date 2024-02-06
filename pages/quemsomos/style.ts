import styled from "styled-components";

export const WhoWeAreContainer = styled.main`
    width: 100%;
    height: 100vh;
`

export const WhoWeAreTitle = styled.h1`
    font: ${(props)=> props.theme.fonts.fontH1};
`
export const WhoWeAreSecondaryTitle = styled.h1`
    font: ${(props)=> props.theme.fonts.body2Regular};
    color: ${(props)=> props.theme.colors.grayPrimary};
`