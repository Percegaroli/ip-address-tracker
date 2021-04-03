import React from 'react';
import { IpInfo } from '../../../model/IpInfo';
import Header from '../../organisms/Header';
import ResultCard from '../../organisms/ResultCard';
import styles from './styles.module.scss';

interface Props {
  ipInfo: IpInfo;
  setIpInfo: (ipInfo: IpInfo) => void
}

const HomeTemplate = ({ ipInfo, setIpInfo }: Props) => (
  <>
    <Header setIpInfo={setIpInfo} />
    <ResultCard
      classes={{ container: styles.ResultCard }}
      values={ipInfo}
    />
  </>
);

export default HomeTemplate;
