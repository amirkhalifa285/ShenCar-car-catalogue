import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import carsData from "./car_data/cars.json";
import Header from "./components/Header/Header";
import FiltersSidebar from "./components/FiltersSidebar/FiltersSidebar";
import CarGrid from "./components/CarGrid/CarGrid";
import CarDetails from "./components/CarDetails/CarDetails";
import Footer from "./components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/plus-jakarta-sans";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  },
});

function App() {
  const [cars, setCars] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    types: ["Sport", "SUV", "MPV"],
    capacities: [2, 4, 6],
    maxPrice: 200,
  });

  useEffect(() => {
    if (carsData) {
      setCars(carsData);
    }
  }, []);

  const handleAddToFavorites = (car) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === car.id)) {
        return prevFavorites.filter((fav) => fav.id !== car.id);
      } else {
        return [...prevFavorites, car];
      }
    });
  };

  const toggleShowFavorites = () => {
    setShowFavorites((prev) => !prev);
  };

  // Filtering logic with default behavior if filters are empty
  const filteredCars = showFavorites
    ? favorites.filter((car) => car.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : cars.filter(
        (car) =>
          car.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (filters.types.length === 0 || filters.types.includes(car.type)) &&
          (filters.capacities.length === 0 || filters.capacities.includes(car.capacity)) &&
          car.price <= filters.maxPrice
      );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <Header
            onToggleFavorites={toggleShowFavorites}
            showFavorites={showFavorites}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="main-wrapper">
            <main className="main-content">
              <FiltersSidebar filters={filters} setFilters={setFilters} />
              <div className="car-grid-wrapper">
                <Routes>
                  <Route
                    path="/"
                    element={<CarGrid cars={filteredCars} onAddToFavorites={handleAddToFavorites} favorites={favorites} />}
                  />
                  <Route
                    path="/car/:id"
                    element={<CarDetails favorites={favorites} onAddToFavorites={handleAddToFavorites} />}
                  />
                </Routes>
              </div>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;