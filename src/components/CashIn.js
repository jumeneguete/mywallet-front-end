import Input from "./Input";
import Button from "./Button";
import styled from "styled-components";

export default function CashIn() {
    return (
        <Container>
            <p>Nova Entrada</p>
            <form>
                <Input type="number" placeholder="Valor" />
                <Input type="text" placeholder="Descrição" />
                <Button type="submit">Salvar entrada</Button>
            </form>
        </Container>
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
        margin-right: 30px;
        display: flex;
        flex-direction: column;
    }
`;