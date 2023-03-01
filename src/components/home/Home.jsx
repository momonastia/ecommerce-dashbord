/* import styled from "styled-components"; */
import SalesReport from "../salesReport/SalesReport";
import SalesBarReport from "../salesBarReport/SalesBarReport";
import ChannelsReport from "../channelsReport/ChannelsReport";
import styles from "./styles.module.scss";

const Home = () => {
  // styled components

  /* const SalesBarCharts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    padding: 30px;
  `; */

  /* const Charts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    margin: 30px;
  `; */

  return (
    <div className={styles.main}>
      <div className={styles.TotalCharts}>
        <SalesBarReport>{"Total balance"}</SalesBarReport>
        <SalesBarReport>{"Total sales"}</SalesBarReport>
        <SalesBarReport>{"Total expenses"}</SalesBarReport>
      </div>

      <div className={styles.Charts}>
        <ChannelsReport />
        <SalesReport />
      </div>
    </div>
  );
};

export default Home;
