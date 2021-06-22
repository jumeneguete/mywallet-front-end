import { BrowserRouter, Switch, Rout } from "react-router-dom";
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import CashIn from './CashIn'
import CashOut from './CashOut'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Rout path="/">
                        <Login />
                    </Rout>
                    <Rout path="/signup">
                        <SignUp />
                    </Rout>
                    <Rout path="/home">
                        <Home />
                    </Rout>
                    <Rout path="/cashin">
                        <CashIn />
                    </Rout>
                    <Rout path="/cashout">
                        <CashOut />
                    </Rout>
                </Switch>
            </BrowserRouter>
        </>
    );
}