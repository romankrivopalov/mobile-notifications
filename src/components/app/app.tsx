import '../../index.css';
import styles from './app.module.css';

import { SideMenu } from "@components";
import { ButtonUI } from "@ui";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            mobile notification
          </h1>
          <span className={styles.subtitle}>
          Subscribe and you will receive one automatic test notification. You can unsubscribe at&nbsp;any time.
        </span>
          <nav className={styles.row}>
            <ButtonUI
              text={'Subscribe'}
              color={'purple'}
            />
            <ButtonUI
              text={'View on GitHub'}
              color={null}
            />
            <ButtonUI
              text={'Install App'}
              color={'pink'}
            />
          </nav>
        </div>
      </div>
      <SideMenu/>
    </div>
  )
}

export default App;
