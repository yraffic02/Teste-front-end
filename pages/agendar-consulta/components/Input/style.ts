import styled from "styled-components";

export const InputContainer = styled.input`
    all: unset;
    max-width: 16.5625rem;

    border: 0.0625rem solid ${(props)=> props.theme.colors.grayInput};
    border-radius: 0.5rem;

    padding: 0.87rem;
`