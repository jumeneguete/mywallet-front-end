import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ExitOutline, AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import styled from 'styled-components';
import UserContext from './contexts/UserContext';
import dayjs from 'dayjs';
import { Link, useHistory } from 'react-router-dom';

export default function Home() {
    const { user, setUser } = useContext(UserContext);
    const [userData, setUserData] = useState(null);
    const [registers, setRegisters] = useState(null);
    const [total, setTotal] = useState(null);
    const history = useHistory();

    const config = {headers: {Authorization: `Bearer ${user}`}};

    useEffect(() => {
            
        const result = axios.get("http://localhost:4000/home", config);
        result.then(response => {
            setUserData(response.data[0].user);
            setRegisters(response.data[0].registers);
            balance(response.data[0].registers);
        })

    }, []);

    function balance (value){
        let sum = 0;
        value.forEach(r => {
            sum += r.value;
        });

        setTotal(sum);
    }

    function logout(){
        axios.post(`http://localhost:4000/logout`, {}, config);
        
        localStorage.removeItem("loginSaved");
        setUser(null);
        history.push("/");
    }

    return (
        <>
            <Header>
                <p>Olá, {userData?.name}</p>
                <ExitOutline onClick={logout} color={'#fff'} height="35px" width="26px" />
            </Header>
            <Statement registers={registers}>
                {registers === null ?
                    <NoContent registers={registers}>Não há registros de <br /> entrada ou saída</NoContent> :
                    registers.map(r => (
                        <WithContent registers={registers}>
                            <Register>
                                <div>
                                    <Date>{dayjs(r.date).format("DD/MM")}</Date>
                                    <p>{r.description}</p>
                                </div>
                                <Values value={r.value}>{(r.value/100).toFixed(2)}</Values>
                            </Register>
                        </WithContent>
                    ))
                }
            </Statement>
            <FooterStatement registers={registers} total={total}>Total <span>{(total/100).toFixed(2)}</span></FooterStatement>

            <Footer>
                <div>
                    <Link to={"/cashin"}>
                        <CashInButton>
                            <AddCircleOutline color={'#fff'} height="25px" width="25px" />
                            <p>Nova <br />entrada</p>
                        </CashInButton>
                    </Link>
                </div>
                <div>
                    <Link to={"/cashout"}>
                        <CashOutButton>
                            <RemoveCircleOutline color={'#fff'} height="25px" width="25px" />
                            <p>Nova <br />saída</p>
                        </CashOutButton>
                    </Link>
                </div>
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


