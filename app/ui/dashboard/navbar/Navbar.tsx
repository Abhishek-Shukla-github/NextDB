"use client"
import React from 'react'
import styles from "./navbar.module.css"
import { MdOutlineMessage,MdNotifications, MdAccessTime, MdSearch} from "react-icons/md";
import { usePathname } from 'next/navigation';


const Navbar = ():React.ReactNode => {
  const route= usePathname();
  console.log(route)
  return (
    <div className={styles.container}>
      <span className={styles.title}>{route.substring(1)}</span>
      <section className={styles.navSection}>
        <div className={styles.searchDiv}>
          <MdSearch />
          <input type="text" className={styles.input} />
        </div>
        <button className={styles.buttons}><MdOutlineMessage /></button>
        <button className={styles.buttons}><MdNotifications /></button>
        <button className={styles.buttons}><MdAccessTime /></button>
      </section>
    </div>
  )
}

export default Navbar