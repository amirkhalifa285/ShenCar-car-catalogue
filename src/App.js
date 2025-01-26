import { useState, useEffect } from 'react';
import carsData from './car_data/cars.json'; // Corrected path
import Header from './components/Header/Header';
import FiltersSidebar from './components/FiltersSidebar/FiltersSidebar';
import CarGrid from './components/CarGrid/CarGrid';
import './App.css';

function App() {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    maxPrice: 200
  });

  useEffect(() => {
    if (carsData) { // Null check
      setCars(carsData);
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <FiltersSidebar filters={filters} setFilters={setFilters} />
        <CarGrid cars={cars} />
      </div>
    </div>
  );
}

export default App;