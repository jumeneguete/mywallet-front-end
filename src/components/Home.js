import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { ExitOutline, AddCircleOutline, RemoveCircleOutline } from 'react-ionicons'
import { Header, Statement, NoContent, WithContent, FooterStatement, Register, Date, Values, Footer, CashInButton, CashOutButton } from "./Styles";
import UserContext from './contexts/UserContext';
import dayjs from 'dayjs';
import { Link, useHistory } from 'react-router-dom';

export default function Home() {
    const { user, setUser } = useContext(UserContext);
    const [userData, setUserData] = useState([]);
    const [registers, setRegisters] = useState([]);
    const [total, setTotal] = useState(null);
    const history = useHistory();

    const config = {headers: {Authorization: `Bearer ${user}`}};

    useEffect(() => {
        if (!user) return history.push("/");    

        const result = axios.get(`${process.env.REACT_APP_HOST}/home`, config);
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
        axios.post(`${process.env.REACT_APP_HOST}/logout`, {}, config);
        
        localStorage.removeItem("loginSaved");
        setUser(null);
        history.push("/");
    }

    function updateRegister(id, value){
        if(value > 0){
            history.push(`/cashin/${id}`);
        } else {
            history.push(`/cashout/${id}`);
        }
    }

    return (
        <>
            <Header>
                <p>Olá, {userData?.name}</p>
                <ExitOutline onClick={logout} color={'#fff'} height="35px" width="26px" />
            </Header>
            <Statement registers={registers.length !== 0}>
                {registers.length === 0 ?
                    <NoContent registers={registers.length !== 0}>Não há registros de <br /> entrada ou saída</NoContent> :
                    registers.map(r => (
                        <WithContent  onClick={() => updateRegister(r.id, r.value)} key={r.id} registers={registers.length !== 0}>
                            <Register >
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
            <FooterStatement registers={registers.length !== 0} total={total}>Total <span>{(total/100).toFixed(2)}</span></FooterStatement>

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