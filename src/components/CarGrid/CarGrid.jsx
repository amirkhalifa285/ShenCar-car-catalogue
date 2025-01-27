import React from "react";
import CarCard from "../CarCard/CarCard";
import styles from "./CarGrid.module.css";

const CarGrid = ({ cars, onAddToFavorites, favorites }) => {
  return (
    <div className={styles.carGrid}>
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          onAddToFavorites={onAddToFavorites}
          favorites={favorites} // Pass favorites to each CarCard
        />
      ))}
    </div>
  );
};

export default CarGrid;
