import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import styles from './styles.module.scss';
import { getIpInfoProxyRequest } from '../../../service/ipify';
import { IpInfo } from '../../../model/IpInfo';
import { IpifyIPResponseDTO } from '../../../service/ipify/interface';
import { mapResponseTOIpInfo } from '../../../service/ipify/mapper';

interface Props {
  className?: string;
  setIpInfo: (ipInfo: IpInfo) => void
}

const SearchInput = ({ className, setIpInfo }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const fetchIpInfo = async () => {
    try {
      const response = await getIpInfoProxyRequest();
      setIpInfo(mapResponseTOIpInfo(response.data));
    } catch (error) {
      console.log('Not implemented yet');
    }
  };

  return (
    <div className={`${styles.Container} ${className}`}>
      <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Search for any IP address or domain"
        className={styles.Input}
      />
      <Button
        onClick={fetchIpInfo}
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
