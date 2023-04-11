import styled from 'styled-components';

export const AppStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: ${p => p.theme.space[5]}px;
gap: ${p => p.theme.space[6]}px;
`;