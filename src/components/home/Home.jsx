import styled from "styled-components";
import SalesReport from "../salesReport/SalesReport";
import SalesBarReport from "../salesBarReport/SalesBarReport";
import ChannelsReport from "../channelsReport/ChannelsReport";
import styles from "./styles.module.scss";

const Home = () => {
  // styled components

  const SalesBarCharts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    padding: 30px;
  `;

  const Charts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    width: 100%;
    margin: 30px;
  `;

  return (
    <div className={styles.main}>
      <SalesBarCharts>
        <SalesBarReport>{"Total balance"}</SalesBarReport>
        <SalesBarReport>{"Total sales"}</SalesBarReport>
        <SalesBarReport>{"Total expenses"}</SalesBarReport>
      </SalesBarCharts>
      <Charts>
        <ChannelsReport />
        <SalesReport />
      </Charts>
    </div>
  );
};

export default Home;
