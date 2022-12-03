import styles from './Error.module.css';

const Error = () => {
  return (
    <div className={styles.error}>
      <h2>Произошла ошибка. Попробуйте перезагрузить.</h2>
      <div>
        <button
          className={styles.button}
          onClick={() => window.location.reload()}
        >
          Перезагрузить
        </button>
      </div>
    </div>
  );
};

export default Error;
