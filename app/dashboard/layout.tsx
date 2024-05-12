import React from 'react'
import Sidebar from "../ui/dashboard/sidebar/Sidebar"
import Navbar from "../ui/dashboard/navbar/Navbar"
import Card from "../ui/dashboard/card/Card"
import Chart from "../ui/dashboard/chart/Chart"
import Rightbar from "../ui/dashboard/rightbar/Rightbar"
import styles from "../ui/dashboard/dashboard.module.css"

const Layout = ({children}:{
    children: React.ReactNode
}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar />
        </div>
        <div className={styles.content}>
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default Layout