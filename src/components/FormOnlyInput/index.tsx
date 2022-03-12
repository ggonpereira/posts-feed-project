import React from 'react';
import { InputChangeEvent } from '../../types/form';
import { Button, Input, FormContainer, Label } from './styles';

interface Props {
  label: string;
  placeholder: string;
  buttonText: string;
  onChangeFunc: (e: InputChangeEvent) => void;
  onButtonClick: () => void;
  disabled: boolean;
}

const FormOnlyInput = ({
  label,
  placeholder,
  buttonText,
  onChangeFunc,
  onButtonClick,
  disabled,
}: Props) => {
  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <Label>{label}</Label>
      <Input
        onChange={onChangeFunc}
        placeholder={placeholder || 'John Doe'}
        type="text"
      />
      <Button disabled={disabled} type="submit" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </FormContainer>
  );
};

export default FormOnlyInput;
