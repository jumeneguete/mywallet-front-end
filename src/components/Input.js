import styled from "styled-components"

export default function Input({ type, placeholder, value, setValue, disabled }) {
    return (
        <InputStyle type={type} disabled={disabled} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}></InputStyle>
    );
}

const InputStyle = styled.input`
    width: 350px;
    padding-left: 10px;
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
    margin: 10px auto;
    height: 58px;
    border: none;
    border-radius: 5px;

        &::placeholder{
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
            color: #000;
        }
        &:focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
`;