import { FC } from "react";
import styles from './device-info.module.css';
import { TDeviceInfoUIProps } from "./type";

export const DeviceInfoUI: FC<TDeviceInfoUIProps> = ({
  deviceType,
  browserName,
  osName,
  osVersion,
  isPrivate
}) => {
  return (
    <div>
      <h2 className={styles.title}>
        device information
      </h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.label}>
            deviceType
          </span>
          <span className={styles.info}>
            {deviceType}
          </span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>
            browser
          </span>
          <span className={styles.info}>
            {browserName}
          </span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>
            os
          </span>
          <span className={styles.info}>
            {osName}
          </span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>
            osVersion
          </span>
          <span className={styles.info}>
            {osVersion}
          </span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>
            isPrivate
          </span>
          <span className={styles.info}>
            {`${isPrivate}`}
          </span>
        </li>
      </ul>
    </div>
  )
}
