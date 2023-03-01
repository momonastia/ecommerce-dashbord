import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../constants/chartsData.js";
import styles from "./styles.module.scss";

const SalesReport = () => {
  return (
    <div className={styles.mainSalesReport}>
      <h3>Sales report</h3>
      <ResponsiveContainer width="100%">
        <AreaChart
          className={styles.AreaChart}
          width={600}
          height={150}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f15b5d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f15b5d" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ebe75" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0ebe75" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#f15b5d"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#0ebe75"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesReport;
