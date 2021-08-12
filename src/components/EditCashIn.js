import Input from "./commons/Input";
import Button from "./commons/Button";
import {Container, Back, DeleteButton} from "./commons/Styles";
import { Link, useHistory } from "react-router-dom";
import UserContext from './contexts/UserContext';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ThreeDots from "./commons/ThreeDots";
import { useParams } from "react-router-dom";

export default function EditCashIn() {
    const { user } = useContext(UserContext);
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [loadingDelete, setLoadingDelete] = useState(false);
    const history = useHistory();
    const { id } = useParams();
    const config = { headers: { Authorization: `Bearer ${user}` } };

    useEffect(()=>{
        if (!user) return history.push("/");
        
        const result = axios.get(`${process.env.REACT_APP_HOST}/register/${id}`, config);
        result.then(response => {
            setAmount(response.data.value/100);
            setDescription(response.data.description);
        });
    },[]);

    function addRegister(e) {
        e.preventDefault();
        
        if (amount <= 0) return alert("Você deve adicionar entradas com valores positivos!")
      
        const value = Number(amount).toFixed(2) * 100;
        const body = { value , description };
        
        const request = axios.post(`${process.env.REACT_APP_HOST}/updatecashin/${id}`, body, config);
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

    function deleteRegister(){
        const result = axios.delete(`${process.env.REACT_APP_HOST}/delete/${id}`, config);
        setLoadingDelete(true);
        result.then( () => {
            reloadRegisters();
            history.push("/home");
            setLoadingDelete(false);
        })
    }

    function reloadRegisters(){
        axios.get(`${process.env.REACT_APP_HOST}/home`, config);
    }


    return (
        <>
            <Container>
                <p>Editar Entrada</p>
                <form onSubmit={addRegister}>
                    <Input type="number" value={amount} setValue={setAmount} disabled={loading} placeholder="Valor" />
                    <Input type="text" value={description} setValue={setDescription} disabled={loading} placeholder="Descrição" />
                    <Button type="submit">{loading ? <ThreeDots /> : "Salvar entrada"}</Button>
                    <DeleteButton onClick={deleteRegister}>{loadingDelete ? <ThreeDots /> : "Excluir entrada"}</DeleteButton>
                </form>
            </Container>
            <Link to="/home"><Back>Voltar</Back></Link>
        </>
    )
};

