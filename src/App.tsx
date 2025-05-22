import Header from '@/components/layout/Header';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <p className="text-sm">Contenido principal</p>
      </main>
    </div>
  );
};

export default App;
