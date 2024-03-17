import '../../index.css';
import styles from './app.module.css';

import { SideMenu } from "@components";

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>mobile notification</h1>
      <SideMenu />
    </div>
  )
}

export default App;
