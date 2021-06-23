import Input from "./Input";
import Button from "./Button";
import { Main, Logo } from "./Styles";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <Main>
            <Logo>MyWallet</Logo>
            <form>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <Button type="submit">Entrar</Button>
            </form>
            <Link to="/signup"><p>Primeira vez? Cadastre-se!</p></Link>
        </Main>
    )
};

