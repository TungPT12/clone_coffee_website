import Link from 'next/link';
import styles from './404.module.scss';

const Custom404 = () => {
    return (
      <div className={styles['error-container']}>
        <h1 className={styles['error-heading']}>404 - Page Not Found</h1>
        <p className={styles['error-message']}>The page you are looking for does not exist.</p>
        <Link href="/">
          <p className={styles['error-link']}>Go back to the homepage</p>
        </Link>
      </div>
    );
  };

export default Custom404;