import React from "react";
import Card from "../ui/dashboard/card/Card";
import Chart from "../ui/dashboard/chart/Chart";
import Rightbar from "../ui/dashboard/rightbar/Rightbar";
import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.chart}>
        <Chart />
      </div>
      <div className={styles.rightBar}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
