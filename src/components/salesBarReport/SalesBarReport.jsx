import {
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { data03 } from "../../constants/chartsData.js";
import styles from "./styles.module.scss";

const SalesBarReport = ({ children }) => {
  return (
    <div className={styles.mainSalesBarReport}>
      <h4>{children}</h4>
      <ResponsiveContainer width="100%">
        <BarChart width={300} height={120} data={data03}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#f15b5d" />
          <Bar dataKey="uv" fill="#0ebe75" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesBarReport;
