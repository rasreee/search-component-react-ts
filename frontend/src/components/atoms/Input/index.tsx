import React, { ChangeEventHandler, KeyboardEventHandler } from 'react';

import { Container } from './styles';

interface IInput {
  /**
   * Current value of the input.
   */
  value: string;

  /**
   * Callback to be triggered when the input value changes.
   */
  onChange: (value: string) => void;

  /**
   * Callback to be triggered when the enter key is pressed.
   */
  onEnterKeyDown: () => void;
}

const Input: React.FC<IInput> = ({ value, onChange, onEnterKeyDown, ...props }) => {

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    onChange(e.target.value);
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      onEnterKeyDown()
    }
  }

  return (
    <Container value={value} onChange={handleChange} {...props} onKeyDown={handleKeyDown} />
  );
};

export default Input;
