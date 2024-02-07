import styled from "styled-components";

export const QueryPageContainer = styled.main`
    min-height: calc(100vh - 104px - 61px);
`
export const QueryPageTitle = styled.h1`
    font: ${(props)=> props.theme.fonts.fontH1};
`
export const QueryPageSecondaryTitle = styled.p`
    font: ${(props)=> props.theme.fonts.body2Regular};
    color: ${(props)=> props.theme.colors.grayPrimary};
`