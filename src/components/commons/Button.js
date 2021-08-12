import { ButtonStyle } from "./Styles";

export default function Button({children, type, disabled}) {
    return (
        <ButtonStyle type={type} disabled={disabled}>{children} </ButtonStyle>
    );
}

