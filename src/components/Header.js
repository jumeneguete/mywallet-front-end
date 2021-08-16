import axios from "axios";
import { useContext } from "react";
import { ExitOutline } from "react-ionicons";
import { HeaderStyle } from "./commons/Styles";
import UserContext from "./contexts/UserContext";
import { useHistory } from "react-router-dom";

export default function Header({ userData }) {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const config = { headers: { Authorization: `Bearer ${user}` } };

  function logout() {
    axios.post(`${process.env.REACT_APP_HOST}/logout`, {}, config);

    localStorage.removeItem("loginSaved");
    setUser(null);
    history.push("/");
  }

  return (
    <>
      <HeaderStyle>
        <p>Olá, {userData?.name}</p>
        <ExitOutline
          onClick={logout}
          color={"#fff"}
          height="35px"
          width="26px"
        />
      </HeaderStyle>
    </>
  );
}
