import styled from "styled-components";

export const Layout = styled.div`
    display: grid;
    grid-template-columns:max-content auto;
    min-height: 100vh;
    position:relative;
    background: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-style: normal;

    & *{
        box-sizing: border-box;
    }
`;
