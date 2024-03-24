import { FC } from "react";
import styles from './button.module.css';
import { TButtonUIProps } from "./type";

export const ButtonUI: FC<TButtonUIProps> = ({ text, color }) => {
  const btnClass = `${styles.button} ${color ? styles['button_' + color] : ''}`

  return (
    <button className={btnClass}>
      {text}
    </button>
  )
}
