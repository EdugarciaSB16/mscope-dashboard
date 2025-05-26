import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { historicalFinancialData } from '@/data';

const HistoricalFinancialChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={historicalFinancialData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
        <XAxis
          dataKey="year"
          tick={{ fill: '#8F8F91', fontSize: 12 }}
          axisLine={{ stroke: '#8F8F91' }}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          tick={{ fill: '#8F8F91', fontSize: 12 }}
          axisLine={{ stroke: '#8F8F91' }}
          tickFormatter={(value) => `€${value}M`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fill: '#8F8F91', fontSize: 12 }}
          axisLine={{ stroke: '#8F8F91' }}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
          contentStyle={{ background: 'white', border: '1px solid #E5E7EB' }}
          formatter={(value, name) => {
            if (name === 'EBITDA Margin') return [`${value}%`, name];
            return [`€${value}M`, name];
          }}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          iconType="circle"
          iconSize={8}
        />
        <Bar
          yAxisId="left"
          dataKey="turnover"
          name="Turnover"
          fill="#D8D8D9"
          radius={[8, 8, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="ebitda"
          name="EBITDA"
          fill="#A0A0A1"
          radius={[8, 8, 0, 0]}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="ebitdaMargin"
          name="EBITDA Margin"
          stroke="#58585A"
          strokeWidth={2}
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default HistoricalFinancialChart;
