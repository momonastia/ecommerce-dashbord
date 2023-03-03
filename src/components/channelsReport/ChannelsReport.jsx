import { data01, data02 } from "../../constants/chartsData.js";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import styles from "./styles.module.scss";

const ChannelsReport = () => {
  return (
    <div className={styles.mainChannelsReport}>
      <h3>Channels</h3>
      <ResponsiveContainer height="100%">
        <PieChart width={290} height={220}>
          <Pie
            data={data01}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={40}
            fill="#f15b5d"
          />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#0ebe75"
            label
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChannelsReport;
