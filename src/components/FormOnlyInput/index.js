import React from "react";
import { Button, Input, FormContainer, Label } from "./styles";

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
  <FormContainer onSubmit={handleFormSubmit}>
    <Label>{label}</Label>
    <Input
      onChange={onChangeFunc}
      placeholder={placeholder || "John Doe"}
      type="text"
    />
    <Button disabled={disabled} type="submit" onClick={onButtonClick}>
      {buttonText}
    </Button>
  </FormContainer>
);

export default FormOnlyInput;
