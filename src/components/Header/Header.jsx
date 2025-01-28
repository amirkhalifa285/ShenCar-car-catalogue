import styles from "./Header.module.css";
import { MdFavorite, MdSearch } from "react-icons/md";

const Header = ({ onToggleFavorites, showFavorites, searchQuery, setSearchQuery }) => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>ShenCarCar</div>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search cars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <MdSearch className={styles.searchIcon} />
      </div>

      {/* Heart Icon */}
      <MdFavorite
        size={24}
        className={`${styles.favoriteIcon} ${
          showFavorites ? styles.favoriteActive : ""
        }`}
        onClick={onToggleFavorites}
        title={showFavorites ? "Show All Cars" : "Show Favorites"}
      />
    </header>
  );
};

export default Header;
