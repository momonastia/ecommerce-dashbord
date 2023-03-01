import SalesReport from "../salesReport/SalesReport";
import SalesBarReport from "../salesBarReport/SalesBarReport";
import ChannelsReport from "../channelsReport/ChannelsReport";
import styles from "./styles.module.scss";

const Home = () => {
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
