import React from 'react'
import styles from "./card.module.css"
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <section className={styles.logo}>
        <MdSupervisedUserCircle />
      </section>
      <section className={styles.detail}>
        <p className={styles.title}>Total Users</p>
        <p className={styles.stat}>10.273</p>
        <p className={styles.info}>
          <span className={styles.delta}>12% </span>
          more than previous week
        </p>
      </section>
    </div>
  )
}

export default Card