import React from "react";
import { Button, Input, InputContainer, Label } from "./styles";

const handleFormSubmit = (evt) => {
  evt.preventDefault();
};

const FormOnlyInput = ({
  label,
  placeholder,
  buttonText,
  onChangeFunc,
  onButtonClick,
  disabled,
}) => (
  <InputContainer onSubmit={handleFormSubmit}>
    <Label>{label}</Label>
    <Input onChange={onChangeFunc} placeholder={placeholder} type="text" />
    <Button disabled={disabled} type="submit" onClick={onButtonClick}>
      {buttonText}
    </Button>
  </InputContainer>
);

export default FormOnlyInput;
