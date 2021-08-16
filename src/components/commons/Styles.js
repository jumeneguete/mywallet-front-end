import styled from "styled-components";

const Main = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

const Logo = styled.h1`
  font-family: "Saira Stencil One", cursive;
  font-size: 32px;
  margin-bottom: 20px;
`;

const HeaderStyle = styled.div`
  margin: 20px 30px 20px 25px;
  font-size: 26px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatementStyle = styled.div`
  width: 90%;
  height: ${(props) => (props.registers ? "379px" : "410px")};
  margin: 0 auto;
  overflow: hidden;
  border: none;
  border-radius: ${(props) => (props.registers ? "5px 5px 0 0" : "5px")};
  background-color: #fff;
  overflow-y: auto;
  display: ${(props) => (props.registers ? "" : "flex")};
  justify-content: ${(props) => (props.registers ? "" : "center")};
  align-items: ${(props) => (props.registers ? "" : "center")};

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NoContent = styled.div`
  font-size: 20px;
  color: #868686;
  text-align: center;
  display: ${(props) => (props.registers ? "none" : "block")};
`;

const WithContent = styled.div`
  font-size: 15px;
  color: #000;
  display: ${(props) => (props.registers ? "block" : "none")};

  &:last-child {
    margin-bottom: 30px;
  }
`;

const FooterStatement = styled.div`
  width: 90%;
  margin: -2px auto 0 auto;
  border-radius: 0 0 5px 5px;
  font-size: 18px;
  color: #000;
  padding: 10px 15px;
  background-color: #fff;
  display: ${(props) => (props.registers ? "flex" : "none")};
  justify-content: ${(props) => (props.registers ? "space-between" : "none")};

  span {
    color: ${(props) => (props.total >= 0 ? "green" : "red")};
  }
`;

const Register = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Date = styled.div`
  color: #c6c6c6;
  margin-right: 5px;
`;

const Values = styled.div`
  color: ${(props) => (props.value >= 0 ? "green" : "red")};
`;

const FooterStyle = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8f6ac0;
  position: fixed;
  bottom: 15px;
  left: 20px;
  right: 20px;
  z-index: 1;

  & > div {
    width: 48%;
  }
`;

const CashInButton = styled.div`
  height: 110px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #a778d7;
`;

const CashOutButton = styled.div`
  height: 110px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #a778d7;
`;

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
    display: flex;
    flex-direction: column;
  }
`;

const Back = styled.div`
  width: 80%;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;

const DeleteButton = styled.div`
  width: 350px;
  height: 46px;
  margin: -25px auto 40px auto;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  background-color: rgba(234, 27, 2, 0.5);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonStyle = styled.button`
  width: 350px;
  height: 46px;
  margin: 10px auto 40px auto;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  background-color: #a778d7;
  text-align: center;

  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

const InputStyle = styled.input`
  width: 350px;
  padding-left: 10px;
  font-size: 18px;
  font-family: "Raleway", sans-serif;
  margin: 10px auto;
  height: 58px;
  border: none;
  border-radius: 5px;

  &::placeholder {
    font-family: "Raleway", sans-serif;
    font-size: 18px;
    color: #000;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export {
  Main,
  Logo,
  HeaderStyle,
  StatementStyle,
  NoContent,
  WithContent,
  FooterStatement,
  Register,
  Date,
  Values,
  FooterStyle,
  CashInButton,
  CashOutButton,
  Container,
  Back,
  DeleteButton,
  ButtonStyle,
  InputStyle,
};
