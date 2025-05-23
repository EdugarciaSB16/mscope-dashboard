import Header from '@/components/layout/Header';
import CompanyHeader from './features/company/CompanyHeader';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <CompanyHeader />
      </main>
    </div>
  );
};

export default App;
