import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import { scoreIndicators } from '@/data';

const CompanyRadar = () => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-base font-medium text-zinc-900 mb-4">
        mscope score indicators
      </h2>
      <div className="w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={scoreIndicators}
            margin={{ top: 0, right: 5, bottom: 0, left: 5 }}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill: '#8f8f91',
                fontSize: 11,
              }}
            />
            <PolarRadiusAxis tick={{ fontSize: 10 }} />

            <Tooltip
              wrapperStyle={{ fontSize: '12px' }}
              formatter={(value, name) => [`${value}`, name]}
            />
            <Radar
              name="Company"
              dataKey="company"
              stroke="#209464"
              fill="#209464"
              fillOpacity={0.6}
              dot={{ r: 3 }}
            />
            <Radar
              name="Microsector"
              dataKey="microsector"
              stroke="#58585A"
              fill="#58585A"
              fillOpacity={0.3}
              dot={{ r: 3 }}
            />
            <Radar
              name="SME Index"
              dataKey="sme"
              stroke="#D8D8D9"
              fill="#D8D8D9"
              fillOpacity={0.2}
              dot={{ r: 3 }}
            />
            <Legend
              wrapperStyle={{
                fontSize: '11px',
                paddingTop: '8px',
              }}
              iconSize={8}
              align="center"
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CompanyRadar;
