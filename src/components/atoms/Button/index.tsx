import React from 'react';
import styles from './styles.module.scss';

interface ButtonProps {
  onClick: () => void,
  className?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${className} ${styles.Button}`}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
};

export default Button;
