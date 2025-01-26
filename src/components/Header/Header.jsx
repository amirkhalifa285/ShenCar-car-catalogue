import styles from './Header.module.css';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>CarRental</div>
      <input
        type="text"
        placeholder="Search cars..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
    </header>
  );
};

export default Header;