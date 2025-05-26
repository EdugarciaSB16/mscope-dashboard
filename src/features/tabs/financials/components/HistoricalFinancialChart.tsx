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
  { year: '2012', turnover: 10, ebitda: 2.1, ebitdaMargin: 2.4 },
  { year: '2013', turnover: 28, ebitda: 4.4, ebitdaMargin: 3.6 },
  { year: '2014', turnover: 26, ebitda: 10, ebitdaMargin: 4.5 },
  { year: '2015', turnover: 24, ebitda: 3.0, ebitdaMargin: 5.3 },
  { year: '2016', turnover: 27, ebitda: 4.3, ebitdaMargin: 6.5 },
  { year: '2017', turnover: 29, ebitda: 7.5, ebitdaMargin: 5.6 },
  { year: '2018', turnover: 31, ebitda: 6.7, ebitdaMargin: 8.7 },
  { year: '2019', turnover: 33, ebitda: 12.9, ebitdaMargin: 9.8 },
  { year: '2020', turnover: 30, ebitda: 9.6, ebitdaMargin: 10 },
  { year: '2021', turnover: 32, ebitda: 25, ebitdaMargin: 12 },
  { year: '2022', turnover: 35, ebitda: 18, ebitdaMargin: 11 },
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
