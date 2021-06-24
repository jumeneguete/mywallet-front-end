import styled from "styled-components"

export default function Button({children, type, disabled}) {
    return (
        <ButtonStyle type={type} disabled={disabled}>{children} </ButtonStyle>
    );
}

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
    background-color: #A778D7;
    text-align: center;

        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
`;