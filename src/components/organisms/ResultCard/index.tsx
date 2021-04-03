import React from 'react';
import SearchResultValue from '../../molecules/SearchResultValue';
import styles from './styles.module.scss';

interface Props {
  classes?: Classes;
}

interface Classes {
  container?: string;
  card?: string
}

const ResultCard = ({ classes }: Props) => (
  <div className={`${styles.Container} ${classes.container ?? ''}`}>
    <div className={`${styles.Card} ${classes.card ?? ''}`}>
      <SearchResultValue
        label="IP Address"
        value="192.212.174.101"
      />
      <SearchResultValue
        label="Location"
        value="Brooklyn, NY 10001"
      />
      <SearchResultValue
        label="Timezone"
        value="UTC -05:00"
      />
      <SearchResultValue
        label="ISP"
        value="SpaceX Starlink"
      />
    </div>
  </div>

);

ResultCard.defaultProps = {
  classes: {},
};

export default ResultCard;
