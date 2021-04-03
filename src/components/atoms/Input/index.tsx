import React from 'react';
import styles from './styles.module.scss';

interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string;
  className?: string
}

const Input = (props: InputProps) => {
  const {
    onChange, value, placeholder, className,
  } = props;
  return (
    <input
      value={value}
      onChange={onChange}
      className={`${styles.Input} ${className}`}
      placeholder={placeholder}
    />
  );
};

Input.defaultProps = {
  placeholder: '',
  className: '',
};

export default Input;
