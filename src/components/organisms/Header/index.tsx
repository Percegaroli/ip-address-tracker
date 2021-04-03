import React from 'react';
import { IpInfo } from '../../../model/IpInfo';
import Typography from '../../atoms/Typography';
import SearchInput from '../../molecules/SearchInput';
import styles from './styles.module.scss';

interface Props {
  setIpInfo: (info: IpInfo) => void
}

const Header = ({ setIpInfo }: Props) => (
  <header className={styles.Header}>
    <Typography color="White" className={styles.Title}>
      IP Address Tracker
    </Typography>
    <SearchInput setIpInfo={setIpInfo} />
  </header>
);

export default Header;
