import React from "react";
import { FormContainer, Label, Input, Button } from "../FormOnlyInput/styles";
import { Textarea } from "./styles";

const handleFormSubmit = (evt) => {
  evt.preventDefault();
};

const FormInputTextarea = ({
  inputPlaceholder,
  textareaPlaceholder,
  buttonText,
  onChangeInputFunc,
  onChangeTextareaFunc,
  onButtonClick,
  disabled,
}) => (
  <FormContainer onSubmit={handleFormSubmit}>
    <Label>Title</Label>
    <Input
      onChange={onChangeInputFunc}
      placeholder={inputPlaceholder || "Hello World"}
      type="text"
    />
    <Label>Content</Label>
    <Textarea
      as="textarea"
      resize="none"
      onChange={onChangeTextareaFunc}
      placeholder={textareaPlaceholder || "Content here"}
    />
    <Button disabled={disabled} type="submit" onClick={onButtonClick}>
      {buttonText || "Save"}
    </Button>
  </FormContainer>
);

export default FormInputTextarea;
