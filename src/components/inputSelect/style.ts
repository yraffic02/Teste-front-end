import styled from "styled-components";

interface InputContainerProps {
    typeWidth?: 'small' | 'large';
}

export const InputContainer = styled.select<InputContainerProps>`
    all: unset;
    width: ${(props) => (props.typeWidth === 'large' ? '100%' : '16.5625rem')};

    border: 0.0625rem solid ${(props)=> props.theme.colors.grayInput};
    border-radius: 0.5rem;

    padding: 0.87rem;
`