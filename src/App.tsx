import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes as needed */}
            <Route path="*" element={<HomePage />} />
            <Route path="projects" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;