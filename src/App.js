import { useState, useEffect } from 'react';
import carsData from './car_data/cars.json';
import Header from './components/Header/Header';
import FiltersSidebar from './components/FiltersSidebar/FiltersSidebar';
import CarGrid from './components/CarGrid/CarGrid';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    maxPrice: 200
  });

  useEffect(() => {
    if (carsData) {
      const uniqueCars = carsData.map((car, index) => ({
        ...car,
        id: car.id || Date.now() + index
      }));
      setCars(uniqueCars);
    }
  }, []);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <FiltersSidebar filters={filters} setFilters={setFilters} />
        <CarGrid cars={cars} />
      </main>

      <Footer />
    </div>
  );
}

export default App;