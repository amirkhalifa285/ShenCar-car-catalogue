import { useState, useEffect } from "react";
import carsData from "./car_data/cars.json";
import Header from "./components/Header/Header";
import FiltersSidebar from "./components/FiltersSidebar/FiltersSidebar";
import CarGrid from "./components/CarGrid/CarGrid";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  const [cars, setCars] = useState([]);
  const [favorites, setFavorites] = useState([]); // State for favorite cars
  const [filters, setFilters] = useState({
    types: [],
    capacities: [],
    maxPrice: 200,
  });

  useEffect(() => {
    if (carsData) {
      const uniqueCars = carsData.map((car, index) => ({
        ...car,
        id: car.id || Date.now() + index,
      }));
      setCars(uniqueCars);
    }
  }, []);

  const handleAddToFavorites = (car) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === car.id)) {
        // Remove from favorites if already added
        return prevFavorites.filter((fav) => fav.id !== car.id);
      } else {
        // Add to favorites if not already in the list
        return [...prevFavorites, car];
      }
    });
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <FiltersSidebar filters={filters} setFilters={setFilters} />
        <CarGrid
          cars={cars}
          onAddToFavorites={handleAddToFavorites}
          favorites={favorites}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
