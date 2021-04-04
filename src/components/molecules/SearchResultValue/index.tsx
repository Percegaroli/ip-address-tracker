import React from 'react';
import UseResolution from '../../../hooks/UseResolution';
import Typography from '../../atoms/Typography';
import styles from './styles.module.scss';

interface Props {
  label: string;
  value: string
  className?: string;
}

const SearchResultValue = ({ value, label, className }: Props) => {
  const resolution = UseResolution();
  return (
    <div className={`${styles.Container} ${className}`}>
      <Typography
        variant="h5"
        className={styles.Label}
      >
        {label}
      </Typography>
      <Typography variant={resolution === 'Mobile' ? 'h3' : 'h2'}>
        {value}
      </Typography>
    </div>

  );
};

SearchResultValue.defaultProps = {
  className: '',
};

export default SearchResultValue;
