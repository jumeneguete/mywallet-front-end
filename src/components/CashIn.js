import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import UserContext from './contexts/UserContext';
import { useContext, useState } from "react";
import axios from "axios";
import ThreeDots from "./ThreeDots";

export default function CashIn() {
    const { user } = useContext(UserContext);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory()

    function addRegister(e) {
        e.preventDefault();

        const config = { headers: { Authorization: `Bearer ${user}` } };
        
        if (amount <= 0) return alert("Você deve adicionar entradas com valores positivos!")
      
        const number = amount?.replace(",", ".")
        const value = Number(number).toFixed(2) * 100;
        const body = { value , description };
        
        const request = axios.post(`http://localhost:4000/cashin`, body, config);
        setLoading(true);
        request.then(() => {
            setAmount("");
            setDescription("");
            history.push("/home")
            setLoading(false);
        })
        request.catch(() => { 
            alert("Algo deu errado!")
            setLoading(false);
        })
    }


    return (
        <>
            <Container>
                <p>Nova Entrada</p>
                <form onSubmit={addRegister}>
                    <Input type="number" value={amount} setValue={setAmount} disabled={loading} placeholder="Valor" />
                    <Input type="text" value={description} setValue={setDescription} disabled={loading} placeholder="Descrição" />
                    <Button type="submit">{loading ? <ThreeDots /> : "Salvar entrada"}</Button>
                </form>
            </Container>
            <Link to="/home"><Back>Voltar</Back></Link>
        </>
    )
};

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