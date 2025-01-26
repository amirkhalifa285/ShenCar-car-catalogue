// components/CarGrid/CarGrid.jsx
import React from 'react';
import CarCard from '../CarCard/CarCard';
import styles from './CarGrid.module.css';

const CarGrid = ({ cars }) => {
  return (
    <div className={styles.carGrid}>
      {cars.length > 0 ? (
        cars.map((car) => (
          <CarCard 
            key={car.id}
            car={car}
          />
        ))
      ) : (
        <div className={styles.noResults}>
          <h3>No cars found matching your criteria</h3>
          <p>Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  );
};

export default CarGrid;