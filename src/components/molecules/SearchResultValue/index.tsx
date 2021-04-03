import React from 'react';
import Typography from '../../atoms/Typography';
import styles from './styles.module.scss';

interface Props {
  label: string;
  value: string
  className?: string;
}

const SearchResultValue = ({ value, label, className }: Props) => (
  <div className={`${styles.Container} ${className}`}>
    <Typography
      variant="h5"
      className={styles.Label}
    >
      {label}
    </Typography>
    <Typography variant="h3">
      {value}
    </Typography>
  </div>

);

SearchResultValue.defaultProps = {
  className: '',
};

export default SearchResultValue;
