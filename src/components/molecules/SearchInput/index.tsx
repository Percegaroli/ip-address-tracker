import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import styles from './styles.module.scss';
import { getIpInfoProxyRequest, getIpNumber } from '../../../service/ipify';
import { IpInfo } from '../../../model/IpInfo';
import { mapResponseTOIpInfo } from '../../../service/ipify/mapper';

interface Props {
  className?: string;
  setIpInfo: (ipInfo: IpInfo) => void
}

const SearchInput = ({ className, setIpInfo }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const fetchIpInfo = async () => {
    try {
      const response = await getIpInfoProxyRequest(await configureRequestParams());
      setIpInfo(mapResponseTOIpInfo(response.data));
    } catch (error) {
      console.log('Not implemented yet');
    }
  };

  const configureRequestParams = async () => {
    if (inputValue === '') {
      const ipNumber = await getIpNumber();
      return {
        ipAddress: ipNumber.data,
      };
    }
    if (Number.isNaN(Number(inputValue.replace(/\./, '')))) {
      return {
        domain: inputValue,
      };
    }
    return {
      ipAddress: inputValue,
    };
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
          width={8}
          height={14}
        />
      </Button>
    </div>

  );
};

SearchInput.defaultProps = {
  className: '',
};

export default SearchInput;
