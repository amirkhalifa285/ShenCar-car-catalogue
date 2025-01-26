// components/FiltersSidebar/FiltersSidebar.jsx
import styles from './FiltersSidebar.module.css';
const FiltersSidebar = () => {
    // Filter state management here
    return (
      <div className={styles.sidebar}>
        <h3>Category</h3>
        <div className={styles.filterGroup}>
          <h4>Type</h4>
          {['Sport', 'SUV', 'MPV'].map(type => (
            <label key={type}>
              <input type="checkbox" />
              {type}
            </label>
          ))}
        </div>
        
        <div className={styles.filterGroup}>
          <h4>Capacity</h4>
          {[2, 4, 6].map(capacity => (
            <label key={capacity}>
              <input type="checkbox" />
              {capacity} Person
            </label>
          ))}
        </div>
        
        <div className={styles.filterGroup}>
          <h4>Price</h4>
          <input type="range" min="0" max="200" />
        </div>
      </div>
    );
  };

export default FiltersSidebar; 