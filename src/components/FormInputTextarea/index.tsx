import React from 'react';
import { FormContainer, Label, Input, Button } from '../FormOnlyInput/styles';
import { Textarea } from './styles';

interface Props {
  inputPlaceholder?: string;
  textareaPlaceholder?: string;
  buttonText: string;
  onChangeInputFunc?: (value?: any) => void;
  onChangeTextareaFunc?: (value?: any) => void;
  onButtonClick: () => void;
  disabled: boolean;
}

const FormInputTextarea = ({
  inputPlaceholder,
  textareaPlaceholder,
  buttonText,
  onChangeInputFunc,
  onChangeTextareaFunc,
  onButtonClick,
  disabled,
}: Props) => {
  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <Label>Title</Label>
      <Input
        onChange={onChangeInputFunc}
        placeholder={inputPlaceholder || 'Hello World'}
        type="text"
      />
      <Label>Content</Label>
      <Textarea
        resize="none"
        onChange={onChangeTextareaFunc}
        placeholder={textareaPlaceholder || 'Content here'}
      />
      <Button disabled={disabled} type="submit" onClick={onButtonClick}>
        {buttonText || 'Save'}
      </Button>
    </FormContainer>
  );
};

export default FormInputTextarea;
