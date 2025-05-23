import { Card, CardContent } from '@/components/ui/card';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { subject: 'Growth', company: 90, microsector: 60, sme: 70 },
  { subject: 'Size', company: 75, microsector: 65, sme: 80 },
  { subject: 'Margins', company: 85, microsector: 72, sme: 77 },
  { subject: 'Sharpe', company: 70, microsector: 60, sme: 69 },
  { subject: 'Balance', company: 65, microsector: 50, sme: 55 },
  { subject: 'Autonomy', company: 80, microsector: 65, sme: 73 },
  { subject: 'Profit', company: 78, microsector: 67, sme: 70 },
];

const CompanyRadar = () => {
  return (
    <Card className="bg-white rounded-xl border shadow-sm h-full">
      <CardContent className="pt-6">
        <h2 className="text-base font-medium text-zinc-900 mb-4">
          mscope score indicators
        </h2>
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Company"
                dataKey="company"
                stroke="#209464"
                fill="#209464"
                fillOpacity={0.6}
              />
              <Radar
                name="Microsector"
                dataKey="microsector"
                stroke="#58585a"
                fill="#58585a"
                fillOpacity={0.3}
              />
              <Radar
                name="SME Index"
                dataKey="sme"
                stroke="#8f8f91"
                fill="#8f8f91"
                fillOpacity={0.2}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyRadar;
