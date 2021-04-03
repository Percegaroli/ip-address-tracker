import React from 'react';
import Typography from '../../atoms/Typography';
import SearchInput from '../../molecules/SearchInput';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.Header}>
    <Typography color="White" className={styles.Title}>
      IP Address Tracker
    </Typography>
    <SearchInput />
  </header>
);

export default Header;
