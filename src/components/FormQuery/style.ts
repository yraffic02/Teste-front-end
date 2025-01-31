import styled from "styled-components";

export const FormQueryContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
`
export const FormQueryTitle = styled.h2`
    font: ${(props)=> props.theme.fonts.fontH2};
`

export const FormQueryContainerElementsColumn = styled.div`
    width: 100%;
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

export const FormQueryInformation = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    gap: 0.5rem;

    margin-bottom: 2rem;
`
export const FormQueryInformationText = styled.p`
    font: ${(props)=> props.theme.fonts.body2Regular};
    color: ${(props)=> props.theme.colors.graySecondary};
`
export const FormQueryInformationRow = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
`
export const FormQueryInformationTextExtraSmall = styled.span`
    font-family: 'Inter';
    font-size: 0.5rem;
    font-weight: 400;
    color: ${(props)=> props.theme.colors.graySecondary};
`

export const FormQueryButtonSubmit = styled.button`
    all: unset;

    border-radius: 1.875rem;
    padding: 0.87rem 1.5rem;

    font: ${(props)=> props.theme.fonts.body2Bold};

    color: ${(props)=> props.theme.colors.white};
    background-color: ${(props)=> props.theme.colors.redPrimary};

    cursor: pointer;
`

export const ErrorForm = styled.span`
    font-size: 0.5rem;
    font-weight: 400;
    font-family: 'Inter';
    color: ${(props)=> props.theme.colors.redPrimary};
`