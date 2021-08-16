import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import CashIn from "./CashIn";
import CashOut from "./CashOut";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import EditCashIn from "./EditCashIn";
import EditCashOut from "./EditCashOut";

export default function App() {
  const localLogin = localStorage.getItem("loginSaved");
  const [user, setUser] = useState(localLogin && JSON.parse(localLogin));

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <UserContext.Provider value={{ user, setUser }}>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <SignUp />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/cashin" exact>
              <CashIn />
            </Route>
            <Route path="/cashout" exact>
              <CashOut />
            </Route>
            <Route path="/cashin/:id" exact>
              <EditCashIn />
            </Route>
            <Route path="/cashout/:id" exact>
              <EditCashOut />
            </Route>
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </>
  );
}
