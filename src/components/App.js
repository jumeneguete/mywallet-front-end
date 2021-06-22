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
                    <Route path="/">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/cashin">
                        <CashIn />
                    </Route>
                    <Route path="/cashout">
                        <CashOut />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}