import { ThreeCircles } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ThreeCircles
        height='100'
        width='100'
        color='#ffffff'
        visible={true}
        ariaLabel='three-circles-rotating'
      />
    </div>
  );
};

export default Loader;
