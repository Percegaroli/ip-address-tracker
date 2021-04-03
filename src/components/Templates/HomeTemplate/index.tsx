import React from 'react';
import Header from '../../organisms/Header';
import ResultCard from '../../organisms/ResultCard';
import styles from './styles.module.scss';

const HomeTemplate = () => (
  <>
    <Header />
    <ResultCard classes={{ container: styles.ResultCard }} />
  </>
);

export default HomeTemplate;
