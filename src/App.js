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
import "@fontsource/plus-jakarta-sans"; // Import font for Material-UI compatibility
import "./index.css"; // Ensure global styles are applied

const theme = createTheme({
  typography: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
  },
});

function App() {
  const [cars, setCars] = useState([]);
  const [favorites, setFavorites] = useState([]); // State for favorite cars
  const [showFavorites, setShowFavorites] = useState(false); // Toggle to show favorites
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
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

  const toggleShowFavorites = () => {
    setShowFavorites((prev) => !prev); // Toggle favorites view
  };

  // Filter cars based on search query
  const filteredCars = showFavorites
    ? favorites.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cars.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
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

          {/* Wrapper for the main content */}
          <div className="main-wrapper">
            <main className="main-content">
              <FiltersSidebar filters={filters} setFilters={setFilters} />
              <div className="car-grid-wrapper">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <CarGrid
                        cars={filteredCars}
                        onAddToFavorites={handleAddToFavorites}
                        favorites={favorites}
                      />
                    }
                  />
                  <Route
                    path="/car/:id"
                    element={
                      <CarDetails
                        favorites={favorites}
                        onAddToFavorites={handleAddToFavorites}
                      />
                    }
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
