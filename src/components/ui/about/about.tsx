import styles from './about.module.css';

export const AboutUI = () => {
  return (
    <div>
      <h2 className={styles.title}>
        what?
      </h2>
      <p className={styles.text}>
        This is&nbsp;a&nbsp;demo of&nbsp;a&nbsp;web application for push notifications on&nbsp;all platforms. The
        application does not use any personal information. The code is&nbsp;open source, you can use it&nbsp;for your
        product!
      </p>
    </div>
  )
}
