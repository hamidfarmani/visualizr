import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Visualizr = ({ data }) => {
  return (
    <>
      <ResponsiveContainer height="80%" width="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="number" fill="#8884d8">
            {data &&
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default Visualizr;
