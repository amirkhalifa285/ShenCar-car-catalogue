import React, { useEffect } from "react";
import styles from "./FiltersSidebar.module.css";

const FiltersSidebar = ({ filters, setFilters }) => {
  useEffect(() => {
    setFilters({ types: [], capacities: [], maxPrice: 200 });
  }, [setFilters]);

  // Handle Type Filter
  const handleTypeChange = (type) => {
    setFilters((prevFilters) => {
      const updatedTypes = prevFilters.types.includes(type)
        ? prevFilters.types.filter((t) => t !== type)
        : [...prevFilters.types, type];
      return { ...prevFilters, types: updatedTypes };
    });
  };

  // Handle Capacity Filter
  const handleCapacityChange = (capacity) => {
    setFilters((prevFilters) => {
      const updatedCapacities = prevFilters.capacities.includes(capacity)
        ? prevFilters.capacities.filter((c) => c !== capacity)
        : [...prevFilters.capacities, capacity];
      return { ...prevFilters, capacities: updatedCapacities };
    });
  };

  // Handle Price Range Filter
  const handlePriceChange = (event) => {
    setFilters((prevFilters) => ({ ...prevFilters, maxPrice: event.target.value }));
  };

  return (
    <div className={styles.sidebar}>
      <h3>Category</h3>
      <div className={styles.filterGroup}>
        <h4>Type</h4>
        {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={filters.types.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
            {type}
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <h4>Capacity</h4>
        {[2, 4, 6].map((capacity) => (
          <label key={capacity}>
            <input
              type="checkbox"
              checked={filters.capacities.includes(capacity)}
              onChange={() => handleCapacityChange(capacity)}
            />
            {capacity} Person
          </label>
        ))}
      </div>

      <div className={styles.filterGroup}>
        <h4>Price</h4>
        <input
          type="range"
          min="0"
          max="200"
          value={filters.maxPrice}
          onChange={handlePriceChange}
        />
        <span>Max Price: ${filters.maxPrice}</span>
      </div>
    </div>
  );
};

export default FiltersSidebar;
