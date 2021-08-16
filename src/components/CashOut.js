import Input from "./commons/Input";
import Button from "./commons/Button";
import { Container, Back } from "./commons/Styles";
import { Link, useHistory } from "react-router-dom";
import UserContext from "./contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ThreeDots from "./commons/ThreeDots";

export default function CashOut() {
  const { user } = useContext(UserContext);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!user) return history.push("/");
  }, []);

  function addNewRegister(e) {
    e.preventDefault();

    const config = { headers: { Authorization: `Bearer ${user}` } };

    if (amount >= 0)
      return alert("Você deve adicionar saídas com valores negativos!");

    const number = amount?.replace(",", ".");
    const value = Number(number).toFixed(2) * 100;
    const body = { value, description };

    const request = axios.post(
      `${process.env.REACT_APP_HOST}/cashout`,
      body,
      config
    );
    setLoading(true);
    request.then(() => {
      setAmount("");
      setDescription("");
      history.push("/home");
      setLoading(false);
    });
    request.catch(() => {
      alert("Algo deu errado!");
      setLoading(false);
    });
  }
  return (
    <>
      <Container>
        <p>Nova Saída</p>
        <form onSubmit={addNewRegister}>
          <Input
            type="number"
            value={amount}
            setValue={setAmount}
            disabled={loading}
            placeholder="Valor"
          />
          <Input
            type="text"
            value={description}
            setValue={setDescription}
            disabled={loading}
            placeholder="Descrição"
          />
          <Button type="submit">
            {loading ? <ThreeDots /> : "Salvar saída"}
          </Button>
        </form>
      </Container>
      <Link to="/home">
        <Back>Voltar</Back>
      </Link>
    </>
  );
}
