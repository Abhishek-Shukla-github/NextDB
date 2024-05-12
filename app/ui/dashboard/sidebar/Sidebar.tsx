"use client"
import React from 'react';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import styles from "./sidebar.module.css"
import MenuLink from './menuLink/MenuLink';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {



  return (
    <div className={styles.container}>
      <div className={styles.imageBanner}>
        <Image className={styles.avatar} src={"/noavatar.png"} alt='' height={40} width={40} />
        <div className={styles.title}>
          <p className={styles.name}>John Doe</p>
          <p className={styles.role}>Admin</p>
        </div>
      </div>
      {menuItems.map(cat => {
        return (<li className={styles.list} key={cat.title}>
          <span className={styles.cat}>{cat.title}</span>
          {cat.list.map((list)=> (
              <MenuLink item={list} key={list.title}/>
          ))}
        </li>)
      })}
    </div>
  )
}

export default Sidebar