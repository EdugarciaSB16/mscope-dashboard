import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { nfdCapexData } from '@/data';

const NfdCapexChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={nfdCapexData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
        <XAxis
          dataKey="year"
          tick={{ fill: '#8F8F91', fontSize: 12 }}
          axisLine={{ stroke: '#8F8F91' }}
        />
        <YAxis
          tick={{ fill: '#8F8F91', fontSize: 12 }}
          axisLine={{ stroke: '#8F8F91' }}
          tickFormatter={(value) => `${value}x`}
        />
        <Tooltip
          contentStyle={{ background: 'white', border: '1px solid #E5E7EB' }}
          formatter={(value) => `${value}x`}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          iconType="line"
          iconSize={20}
        />
        <Line
          type="monotone"
          dataKey="nfdEbitda"
          name="NFD/EBITDA"
          stroke="#D8D8D9"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="capexEbitda"
          name="CAPEX/EBITDA"
          stroke="#58585A"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default NfdCapexChart;
