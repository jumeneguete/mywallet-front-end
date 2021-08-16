import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import { FooterStyle, CashInButton, CashOutButton } from "./commons/Styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <FooterStyle>
        <div>
          <Link to={"/cashin"}>
            <CashInButton>
              <AddCircleOutline color={"#fff"} height="25px" width="25px" />
              <p>Nova<br />entrada</p>
            </CashInButton>
          </Link>
        </div>
        <div>
          <Link to={"/cashout"}>
            <CashOutButton>
              <RemoveCircleOutline color={"#fff"} height="25px" width="25px" />
              <p>Nova<br />saída</p>
            </CashOutButton>
          </Link>
        </div>
      </FooterStyle>
    </>
  );
}
