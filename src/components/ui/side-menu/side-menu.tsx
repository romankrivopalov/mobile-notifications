import styles from './side-menu.module.css';
import { DeviceInfo, About } from "@components";

export const SideMenuUI = () => {
  return (
    <aside className={styles.aside_menu}>
      <DeviceInfo />
      <About />
    </aside>
  )
}
