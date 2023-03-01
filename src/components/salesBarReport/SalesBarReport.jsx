import {
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Bar,
} from "recharts";
import { data03 } from "../../constants/chartsData.js";
import styles from "./styles.module.scss";

const SalesBarReport = ({ children }) => {
  return (
    <div className={styles.mainSalesBarReport}>
      <h4>{children}</h4>
      <BarChart width={280} height={100} data={data03}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#f15b5d" />
        <Bar dataKey="uv" fill="#0ebe75" />
      </BarChart>
    </div>
  );
};

export default SalesBarReport;
