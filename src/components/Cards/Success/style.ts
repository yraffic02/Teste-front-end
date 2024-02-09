import styled from "styled-components";

export const CardContainer = styled.div`
    width: 25.5rem;
    height: 15.9375rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    border-radius: 0.5rem;
    border: 0.06rem solid rgba(223, 134, 134, 0.40);

    padding: 1.25rem;

    margin: 4rem 0;
`

export const CardTextTitle = styled.h1`
    font: ${(props)=> props.theme.fonts.fontH3};
`
export const CardText = styled.p`
    text-align: center;
    font: ${(props)=> props.theme.fonts.body2Regular};
    color: ${(props)=> props.theme.colors.graySecondary};
`

export const CardButton = styled.button`
    all: unset;

    border-radius: 1.875rem;
    padding: 0.87rem 1.5rem;

    font: ${(props)=> props.theme.fonts.body2Bold};

    color: ${(props)=> props.theme.colors.white};
    background-color: ${(props)=> props.theme.colors.redPrimary};

    cursor: pointer;
`