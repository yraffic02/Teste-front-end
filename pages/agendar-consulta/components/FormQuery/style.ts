import styled from "styled-components";

export const FormQueryContainer = styled.form`
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 1rem;
    padding: 0.5rem;
`
export const FormQueryTitle = styled.h2`
    font: ${(props)=> props.theme.fonts.fontH2};
`
export const FormQueryContainerElementsColumn = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 0.5rem;
`

export const FormQueryContainerWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    gap: 1rem;
`

export const FormQueryTextSmallBold = styled.p`
    font: ${(props)=> props.theme.fonts.body3Bold};
`

export const FormQueryTextSmallRegular = styled.p`
    font: ${(props)=> props.theme.fonts.body3Regular};
    color: ${(props)=> props.theme.colors.graySecondary};
`

export const FormQueryContent = styled.form`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 1rem;
    padding: 3.5rem;
`