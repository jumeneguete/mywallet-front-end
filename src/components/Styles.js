import styled from "styled-components";

const Main = styled.div`
    height:100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p {
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 1px;
    }
`;

const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 20px;
`;

export { Main, Logo }