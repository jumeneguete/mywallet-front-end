import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import CashIn from './CashIn'
import CashOut from './CashOut'
import { useState } from "react";
import UserContext from "./contexts/UserContext";

export default function App() {
    const [user, setUser] = useState("");

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
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </>
    );
}