import Link from 'next/link'
import React from 'react'
import styles from "./menuLink.module.css"
import { usePathname } from 'next/navigation'

const MenuLink = ({item}: {
    item: {
        title: string,
        path: string,
        icon: React.JSX.Element
        }
}) => {
  const route = usePathname();
  console.log(route)
  
  return (
    <div className={route === item.path ? `${styles.container} ${styles.active}` : `${styles.container}`}>
        <Link className={styles.link}  href="">
            {item.icon}
            <span>{item.title}</span>
        </Link>
    </div>
  )
}

export default MenuLink