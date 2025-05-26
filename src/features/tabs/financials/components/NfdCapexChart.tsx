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

const data = [
  { year: '2012', nfdEbitda: 2.4, capexEbitda: 0.8 },
  { year: '2013', nfdEbitda: 2.6, capexEbitda: 0.95 },
  { year: '2014', nfdEbitda: 3.5, capexEbitda: 0.82 },
  { year: '2015', nfdEbitda: 2.3, capexEbitda: 0.78 },
  { year: '2016', nfdEbitda: 2.4, capexEbitda: 0.8 },
  { year: '2017', nfdEbitda: 2.0, capexEbitda: 0.82 },
  { year: '2018', nfdEbitda: 2.8, capexEbitda: 0.85 },
  { year: '2019', nfdEbitda: 2.7, capexEbitda: 0.88 },
  { year: '2020', nfdEbitda: 3.0, capexEbitda: 1.1 },
  { year: '2021', nfdEbitda: 3.5, capexEbitda: 0.87 },
  { year: '2022', nfdEbitda: 2.6, capexEbitda: 0.85 },
];

const NfdCapexChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
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
          stroke="#58585A"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="capexEbitda"
          name="CAPEX/EBITDA"
          stroke="#D8D8D9"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default NfdCapexChart;
