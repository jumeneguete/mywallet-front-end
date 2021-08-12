import Input from "./Input";
import Button from "./Button";
import {Container, Back, DeleteButton} from "./Styles";
import { Link, useHistory } from "react-router-dom";
import UserContext from './contexts/UserContext';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ThreeDots from "./ThreeDots";
import { useParams } from "react-router-dom";

export default function EditCashOut() {
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
        
        const result = axios.get(`http://localhost:4000/register/${id}`, config);
        result.then(response => {
            setAmount(response.data.value/100);
            setDescription(response.data.description);
        });
    },[]);

    function addRegister(e) {
        e.preventDefault();
        
        if (amount >= 0) return alert("Você deve adicionar entradas com valores negativos!")
      
        const value = Number(amount).toFixed(2) * 100;
        const body = { value , description };
        
        const request = axios.post(`http://localhost:4000/updatecashout/${id}`, body, config);
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
        const result = axios.delete(`http://localhost:4000/delete/${id}`, config);
        setLoadingDelete(true);
        result.then( () => {
            reloadRegisters();
            history.push("/home");
            setLoadingDelete(false);
        })
    }

    function reloadRegisters(){
        axios.get("http://localhost:4000/home", config);
    }


    return (
        <>
            <Container>
                <p>Editar Saída</p>
                <form onSubmit={addRegister}>
                    <Input type="number" value={amount} setValue={setAmount} disabled={loading} placeholder="Valor" />
                    <Input type="text" value={description} setValue={setDescription} disabled={loading} placeholder="Descrição" />
                    <Button type="submit">{loading ? <ThreeDots /> : "Salvar saída"}</Button>
                    <DeleteButton onClick={deleteRegister}>{loadingDelete ? <ThreeDots /> : "Excluir saída"}</DeleteButton>
                </form>
            </Container>
            <Link to="/home"><Back>Voltar</Back></Link>
        </>
    )
};

