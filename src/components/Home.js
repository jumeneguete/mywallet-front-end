import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./contexts/UserContext";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Statement from "./Statement";

export default function Home() {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState([]);
  const [registers, setRegisters] = useState([]);
  const [total, setTotal] = useState(null);
  const history = useHistory();

  const config = { headers: { Authorization: `Bearer ${user}` } };

  useEffect(() => {
    if (!user) return history.push("/");

    const result = axios.get(`${process.env.REACT_APP_HOST}/register`, config);
    result.then((response) => {
      setUserData(response.data[0].user);
      setRegisters(response.data[0].registers);
      balance(response.data[0].registers);
    });
  }, []);

  function balance(value) {
    let sum = 0;
    value.forEach((r) => {
      sum += r.value;
    });

    setTotal(sum);
  }

  return (
    <>
      <Header userData={userData} />
      <Statement registers={registers} total={total} />
      <Footer />
    </>
  );
}
