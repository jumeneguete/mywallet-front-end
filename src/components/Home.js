import { ExitOutline, AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import styled from 'styled-components';

export default function Home() {
    return (
        <>
            <Header>
                <p>Olá, Fulano</p>
                <ExitOutline color={'#fff'} height="35px" width="26px" />
            </Header>
            <Statement>
                <NoContent>Não há registros de <br/> entrada ou saída</NoContent>
                <WithContent>
                    <Register>
                        <div>
                            <Date>22/06</Date>
                            <p>Compras churrasco</p>
                        </div>
                        <Values>-3456,00</Values>
                    </Register>
                </WithContent>
            </Statement>

            <Footer>
                <CashInButton>
                    <AddCircleOutline color={'#fff'} height="25px" width="25px" />
                    <p>Nova <br />entrada</p>
                </CashInButton>
                <CashOutButton>
                    <RemoveCircleOutline color={'#fff'} height="25px" width="25px" />
                    <p>Nova <br />saída</p>
                </CashOutButton>
            </Footer>
        </>
    )
};


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
    height: 410px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 5px;
    background-color: #fff;
    /* display: flex;
    justify-content: center;  //MUDAR QUANDO TIVER VALORES display, justify e align
    align-items: center; */
`;

const NoContent = styled.div`
    font-size: 20px;
    color: #868686;
    text-align: center;
    display: none;
`;

const WithContent = styled.div`
    font-size: 15px;    
    color: #000;
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
   //color: red or green
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
`;

const CashInButton = styled.div`
    width: 48%;
    height: 110px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #A778D7;
`;

const CashOutButton = styled.div`
    width: 48%;
    height: 110px;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #A778D7;
`;


