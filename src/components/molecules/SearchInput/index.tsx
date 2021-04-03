import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import styles from './styles.module.scss';

interface Props {
  className?: string
}

const SearchInput = ({ className }: Props) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={`${styles.Container} ${className}`}>
      <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Search for any IP address or domain"
        className={styles.Input}
      />
      <Button
        onClick={() => {}}
        className={styles.Button}
      >
        <Image
          src="/icons/icon-arrow.svg"
          alt=""
          width={6}
          height={12}
        />
      </Button>
    </div>

  );
};

SearchInput.defaultProps = {
  className: '',
};

export default SearchInput;
