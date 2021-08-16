import { InputStyle } from "./Styles";

export default function Input({
  type,
  placeholder,
  value,
  setValue,
  disabled,
}) {
  return (
    <InputStyle
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></InputStyle>
  );
}
