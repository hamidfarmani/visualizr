import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { useAppContext } from "../context/AppContext";

const DashboardPage = () => {
  const { infoState } = useAppContext();

  const data =
    infoState &&
    infoState.array &&
    infoState.array.map((item, index) => {
      return { index: index, number: item };
    });
  return (
    <ResponsiveContainer height="50%" width="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="number" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default DashboardPage;
