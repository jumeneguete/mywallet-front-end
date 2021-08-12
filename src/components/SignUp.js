import Input from "./Input";
import Button from "./Button";
import { Main, Logo } from "./Styles";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ThreeDots from "./ThreeDots";
import axios from "axios";
import UserContext from "./contexts/UserContext";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            history.push("/home");
        }
    }, []); 

    function register(e) {
        e.preventDefault();
        if (!name || !email || !password || !confPassword) return alert("Todos os campos devem ser preenchidos!");
            
        if (password !== confPassword) return alert("Os campos Senha e Confirme Senha devem ser identicos");

        const body = { name, email, password };
        const request = axios.post("http://localhost:4000/signup", body);
        setLoading(true);
        request.then(() => { history.push("/") }).catch((err) => {
            alert("Algo deu errado!");
            console.log(err)
            setLoading(false);
        });

    }

    return (
        <Main>
            <Logo>MyWallet</Logo>
            <form onSubmit={register}>
                <Input type="text" value={name} setValue={setName} disabled={loading} placeholder="Nome" />
                <Input type="email" value={email} setValue={setEmail} disabled={loading} placeholder="E-mail" />
                <Input type="password" value={password} setValue={setPassword} disabled={loading} placeholder="Senha" />
                <Input type="password" value={confPassword} setValue={setConfPassword} disabled={loading} placeholder="Confime a senha" />
                <Button type="submit" disabled={loading}>{loading ? <ThreeDots /> : "Cadastrar"}</Button>
            </form>
            <Link to="/"><p>Já tem uma conta? Entre agora</p></Link>
        </Main>
    )
};