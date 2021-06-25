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


const Header = styled.div`
    margin: 20px 30px 20px 25px;
    font-size: 26px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Statement = styled.div`
    width: 90%;
    height: ${props => props.registers ? "379px" : "410px"};
    margin: 0 auto;
    overflow: hidden;
    border: none;
    border-radius: ${props => props.registers ? "5px 5px 0 0" : "5px"};
    background-color: #fff;
    overflow-y: auto;
    display: ${props => props.registers ? "" : "flex"};
    justify-content: ${props => props.registers ? "" : "center"};
    align-items: ${props => props.registers ? "" : "center"}; 

    &::-webkit-scrollbar {
    display: none;
}
`;

const NoContent = styled.div`
    font-size: 20px;
    color: #868686;
    text-align: center;
    display: ${props => props.registers ? "none" : "block"};
`;

const WithContent = styled.div`
    font-size: 15px;    
    color: #000;
    display: ${props => props.registers ? "block" : "none"};

    &:last-child{
        margin-bottom: 30px;
    }
`;

const FooterStatement = styled.div`
    width: 90%;
    margin: -2px auto 0 auto;
    border-radius: 0 0 5px 5px;
     font-size: 18px;
     color: #000;
     padding: 10px 15px;
     background-color: #fff;
     display: ${props => props.registers ? "flex" : "none"};
     justify-content: ${props => props.registers ? "space-between" : "none"};

     span {
        color: ${props => props.total >= 0 ? "green" : "red"};
     }
`;

const Register = styled.div`
    margin: 10px; 
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p{
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const Date = styled.div`
   color: #C6C6C6;
   margin-right: 5px;

`;

const Values = styled.div`
   color: ${props => props.value >= 0 ? "green" : "red"};
`;

const Footer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #8F6AC0;
    position: fixed;
    bottom: 15px;
    left: 20px;
    right: 20px;
    z-index: 1;

    & > div{
        width: 48%;
    }
`;

const CashInButton = styled.div`
    height: 110px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #A778D7;
`;

const CashOutButton = styled.div`
    height: 110px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #A778D7;
`;

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    p {
        font-size: 26px;
        font-weight: 700;
        margin: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
    }
`;

const Back = styled.div`
    width: 80%;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
`;




export { Main, Logo, Header, Statement, NoContent, WithContent, FooterStatement, Register, Date, Values, Footer, CashInButton, CashOutButton, Container, Back }