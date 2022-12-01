import { LocalError } from '../../types/localError';
import styles from './Error.module.css';

type ErrorProps = {
  error: LocalError;
};

const Error = ({ error }: ErrorProps) => {
  return (
    <div className={styles.error}>
      Ошибочка {error.status}. {error.message}
    </div>
  );
};

export default Error;
