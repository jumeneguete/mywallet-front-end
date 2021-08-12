import Input from "./Input";
import Button from "./Button";
import { Main, Logo } from "./Styles";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "./contexts/UserContext";
import ThreeDots from "./ThreeDots";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { setUser, user } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if (user) {
            history.push("/home");
        }
    }, []);


    function login(e) {
        e.preventDefault();

        if (!email || !password) return alert("Preencha todos os campos!");

        const body = { email, password }
        const request = axios.post(`${process.env.REACT_APP_HOST}/signin`, body);
        setLoading(true);
        request.then(response => {
            setUser(response.data)
            const lastLogin = JSON.stringify(response.data);
            localStorage.setItem("loginSaved", lastLogin);
            history.push("/home");
        })

        request.catch(() => {
            alert("E-mail ou senha incorretos!");
            setLoading(false);
        });


    }

    return (
        <Main>
            <Logo>MyWallet</Logo>
            <form onSubmit={login}>
                <Input type="email" value={email} setValue={setEmail} disabled={loading} placeholder="E-mail" />
                <Input type="password" value={password} setValue={setPassword} disabled={loading} placeholder="Senha" />
                <Button type="submit">{loading ? <ThreeDots /> : "Entrar"}</Button>
            </form>
            <Link to="/signup"><p>Primeira vez? Cadastre-se!</p></Link>
        </Main>
    )
};

