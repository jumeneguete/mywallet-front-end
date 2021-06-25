import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ExitOutline, AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { Header, Statement, NoContent, WithContent, FooterStatement, Register, Date, Values, Footer, CashInButton, CashOutButton } from "./Styles";
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