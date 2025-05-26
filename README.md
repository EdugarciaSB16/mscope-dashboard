# MScope Financial Dashboard

A modern, responsive financial dashboard application built with React, TypeScript, and TailwindCSS. This application provides comprehensive financial data visualization and analysis tools, designed to deliver key financial metrics and insights in an intuitive interface.

## 🚀 Features

- **Interactive Financial Charts**: Visualize key financial metrics with Recharts
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Data Export**: Export financial data to Excel with a single click
- **Modern UI**: Clean, professional interface built with TailwindCSS and shadcn/ui
- **Type Safety**: Full TypeScript support for better developer experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: TailwindCSS with shadcn/ui components
- **Data Visualization**: Recharts
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Excel Export**: xlsx and file-saver

## 📁 Project Structure

```
src/
├── assets/            # Static assets
├── components/        # Reusable UI components
│   ├── layout/       # Layout components
│   └── ui/           # shadcn/ui components
├── data/             # Application data and mock data
├── features/         # Feature-based modules
│   ├── company/      # Company profile components
│   └── tabs/         # Main dashboard tabs
│       └── financials/ # Financial statements and metrics
├── lib/              # Utility functions and configs
└── pages/            # Page components
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/mscope-dashboard.git
   cd mscope-dashboard
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Key Components

### `CompanyHeader`

Displays company information including name, ticker, and key metrics.

### `CompanyTabs`

Navigation component for switching between different financial views.

### `IncomeStatementTable`

Interactive table displaying detailed income statement with sorting and export capabilities.

### `HistoricalFinancialChart`

Visual representation of financial trends over time using Recharts.

### `NfdCapexChart`

Dual-axis chart showing Net Financial Debt and CAPEX metrics.

### `CompanyRadar`

Radar chart for comparing company metrics against sector averages.

## 📊 Data Management

Financial data is centrally managed in `src/data/index.ts`, making it easy to update and maintain. The application follows a feature-based architecture for better code organization and scalability.

## 📱 Responsive Design

The application is built with mobile-first principles and adapts to different screen sizes, ensuring a consistent experience across devices.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Future Improvements

- Add user authentication
- Implement real-time data updates
- Add more financial metrics and visualizations
- Enhance accessibility features
- Add unit and integration tests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📬 Contact

For any questions or feedback, please open an issue on GitHub.
