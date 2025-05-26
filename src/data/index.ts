export const navigationLinks = [
  {
    href: '/dashboard',
    label: 'Dashboard',
  },
  {
    href: '/explorer',
    label: 'Explorer',
  },
  {
    href: '/companies',
    label: 'Companies',
  },
  {
    href: '/microsectors',
    label: 'Microsectors',
  },
  {
    href: '/list',
    label: 'List',
  },
  {
    href: '/analysis',
    label: 'Analysis',
    isBeta: true,
  },
];

export const company = {
  name: 'Company name',
  description:
    'Company specializes in the development and manufacturing of weaving machines and technology. Known for its advanced and efficient looms, Company integrates cutting-edge technology in its products to enhance textile production capabilities.',
  cif: 'B08245671',
  location: 'Madrid, Spain',
  founded: 2022,
  website: 'www.companyname.es',
  microsector: 'High growth SME index',
  score: 'A1',
  turnover: 30000000,
  growthCAGR: 6.1,
  ebitda: 5000000,
  ebitdaCAGR: 4.3,
  ebitdaMargin: 8.5,
  nfdToEbitda: 2.4,
  indicators: {
    Growth: 4,
    Size: 3,
    Margins: 4,
    Sharpe: 2,
    Balance: 3,
    Autonomy: 5,
    Profit: 4,
  },
};

export const historicalFinancialData = [
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

export const incomeStatement = [
  {
    label: 'Turnover',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
    bold: true,
  },
  {
    label: 'Cost of sales',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Gross profit',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
    bold: true,
  },
  {
    label: 'Admin & Op. Expenses',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Other operating Income/Cost',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Normalized EBITDA',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
    bold: true,
  },
  {
    label: 'Extraordinary Items',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Other asset-related works',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'EBIT',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
    bold: true,
  },
  {
    label: 'Financial income',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Financial expenses',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'EBT',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
    bold: true,
  },
  {
    label: 'Taxes',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
  },
  {
    label: 'Net profit',
    cagr: '27.2',
    turnoverPct: '100',
    values: Array(12).fill('5.2'),
    bold: true,
  },
];

export const years = [
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
];

export const nfdCapexData = [
  { year: '2012', nfdEbitda: 0.8, capexEbitda: 2.4 },
  { year: '2013', nfdEbitda: 0.95, capexEbitda: 2.6 },
  { year: '2014', nfdEbitda: 0.82, capexEbitda: 3.5 },
  { year: '2015', nfdEbitda: 0.78, capexEbitda: 2.3 },
  { year: '2016', nfdEbitda: 0.8, capexEbitda: 2.4 },
  { year: '2017', nfdEbitda: 0.82, capexEbitda: 2.0 },
  { year: '2018', nfdEbitda: 0.85, capexEbitda: 2.8 },
  { year: '2019', nfdEbitda: 0.88, capexEbitda: 2.7 },
  { year: '2020', nfdEbitda: 1.1, capexEbitda: 3.0 },
  { year: '2021', nfdEbitda: 0.87, capexEbitda: 3.5 },
  { year: '2022', nfdEbitda: 0.85, capexEbitda: 2.6 },
];
