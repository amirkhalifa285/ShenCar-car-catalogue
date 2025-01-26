import styles from './Header.module.css';
import { MdFavorite ,MdSearch} from "react-icons/md";

const Header = ({ searchQuery, setSearchQuery }) => {
    return (
        // In Header.jsx
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <div className={styles.logo}>ShenCarCar</div>
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
            </div>
            <MdFavorite size={24} className={styles.favoriteIcon} />
        </header>
    );
};

export default Header;