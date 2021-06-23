import Input from "./Input";
import Button from "./Button";
import { Main, Logo } from "./Styles";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <Main>
            <Logo>MyWallet</Logo>
            <form>
                <Input type="text" placeholder="Nome" />
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confime a senha" />
                <Button type="submit">Entrar</Button>
            </form>
            <Link to="/"><p>Já tem uma conta? Entre agora</p></Link>
        </Main>
    )
};