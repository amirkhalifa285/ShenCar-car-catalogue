import styles from "./Header.module.css";
import { MdFavorite, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom"

const Header = ({ onToggleFavorites, showFavorites, searchQuery, setSearchQuery }) => {
  return (
    <header className={styles.header}>
      {/* Logo wrapped in a Link */}
      <Link to="/" className={styles.logoLink}>
        <div className={styles.logo}>ShenCarCar</div>
      </Link>

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
        className={`${styles.favoriteIcon} ${showFavorites ? styles.favoriteActive : ""
          }`}
        onClick={onToggleFavorites}
        title={showFavorites ? "Show All Cars" : "Show Favorites"}
      />
    </header>
  );
};

export default Header;
