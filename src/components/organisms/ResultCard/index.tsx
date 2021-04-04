import React from 'react';
import UseResolution from '../../../hooks/UseResolution';
import { IpInfo } from '../../../model/IpInfo';
import SearchResultValue from '../../molecules/SearchResultValue';
import styles from './styles.module.scss';

interface Props {
  classes?: Classes;
  values: IpInfo
}

interface Classes {
  container?: string;
  card?: string
}

const ResultCard = ({ classes, values }: Props) => (
  <div className={`${styles.Container} ${classes.container ?? ''}`}>
    <div className={`${styles.Card} ${classes.card ?? ''}`}>
      <SearchResultValue
        label="IP ADDRESS"
        value={values.ipAddress}
      />
      <SearchResultValue
        label="LOCATION"
        value={values.location}
      />
      <SearchResultValue
        label="TIMEZONE"
        value={`UTC ${values.timezone}`}
      />
      <SearchResultValue
        label="ISP"
        value={values.isp}
      />
    </div>
  </div>

);

ResultCard.defaultProps = {
  classes: {},
};

export default ResultCard;
