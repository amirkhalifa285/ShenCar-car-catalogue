import React from "react";
import CarCard from "../CarCard/CarCard";
import styles from "./CarGrid.module.css";
import { Box, Typography } from "@mui/material";

const CarGrid = ({ cars, onAddToFavorites, favorites }) => {
  return (
    <div className={styles.carGridWrapper}>
      {/* 🔹 Cars Catalogue Header */}
      <Box className={styles.carCatalogueHeader}>
        <Typography variant="h5" className={styles.headerText}>
          Cars Catalogue
        </Typography>
      </Box>

      {/* Grid of Cars */}
      <div className={styles.carGrid}>
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onAddToFavorites={onAddToFavorites}
            favorites={favorites} 
          />
        ))}
      </div>
    </div>
  );
};

export default CarGrid;
