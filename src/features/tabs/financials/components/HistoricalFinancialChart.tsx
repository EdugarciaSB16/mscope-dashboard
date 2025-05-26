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

const data = [
  { year: '2012', turnover: 25, ebitda: 2.1, ebitdaMargin: 8.4 },
  { year: '2013', turnover: 28, ebitda: 2.4, ebitdaMargin: 8.6 },
  { year: '2014', turnover: 26, ebitda: 2.2, ebitdaMargin: 8.5 },
  { year: '2015', turnover: 24, ebitda: 2.0, ebitdaMargin: 8.3 },
  { year: '2016', turnover: 27, ebitda: 2.3, ebitdaMargin: 8.5 },
  { year: '2017', turnover: 29, ebitda: 2.5, ebitdaMargin: 8.6 },
  { year: '2018', turnover: 31, ebitda: 2.7, ebitdaMargin: 8.7 },
  { year: '2019', turnover: 33, ebitda: 2.9, ebitdaMargin: 8.8 },
  { year: '2020', turnover: 30, ebitda: 2.6, ebitdaMargin: 8.7 },
  { year: '2021', turnover: 32, ebitda: 2.8, ebitdaMargin: 8.8 },
  { year: '2022', turnover: 35, ebitda: 3.0, ebitdaMargin: 8.6 },
];

const HistoricalFinancialChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
        <XAxis
          dataKey="year"
          scale="point"
          tick={{ fill: '#666', fontSize: 12 }}
          axisLine={{ stroke: '#E5E7EB' }}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          tick={{ fill: '#666', fontSize: 12 }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickFormatter={(value) => `€${value}M`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fill: '#666', fontSize: 12 }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
          contentStyle={{ background: 'white', border: '1px solid #E5E7EB' }}
          formatter={(value, name) => {
            if (name === 'EBITDA Margin') return `${value}%`;
            return `€${value}M`;
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
          fill="#E5E7EB"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="ebitda"
          name="EBITDA"
          fill="#D1D5DB"
          radius={[4, 4, 0, 0]}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="ebitdaMargin"
          name="EBITDA Margin"
          stroke="#9CA3AF"
          strokeWidth={2}
          dot={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default HistoricalFinancialChart;
