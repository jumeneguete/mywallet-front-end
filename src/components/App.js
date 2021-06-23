import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import CashIn from './CashIn'
import CashOut from './CashOut'

export default function App() {
    return (
        <>
        <GlobalStyle />
            <BrowserRouter>
                <Switch>
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
                </Switch>
            </BrowserRouter>
        </>
    );
}