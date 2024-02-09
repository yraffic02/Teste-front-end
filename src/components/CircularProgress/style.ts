import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const CircularProgress = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1); 
    border-top: 4px solid #fff; 
    border-radius: 50%; 
    width: 40px; 
    height: 40px;
    animation: ${spin} 1s linear infinite;
`;
