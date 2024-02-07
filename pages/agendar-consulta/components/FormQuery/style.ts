import styled from "styled-components";

export const FormQueryContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 1rem;
    padding: 1rem;
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

export const FormQueryContainerElementsRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 1.5rem;
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
    align-items: center;
    flex-direction: column;

    gap: 1rem;
    padding: 2rem;
`

export const ButtonFormAdd = styled.button`
    all: unset;

    border: 0.0625rem solid ${(props)=> props.theme.colors.blackSecondary};
    border-radius: 1.875rem;

    padding: 0.75rem;

    font: ${(props)=> props.theme.fonts.body3Bold};
`

export const FormDivider = styled.div`
    width: 100%;

    border: 0.06rem solid ${(props)=> props.theme.colors.grayInput};

    margin: 2rem 0;
`