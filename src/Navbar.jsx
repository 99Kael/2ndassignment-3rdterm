
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.link}>
        Home
      </Link>

      <Link to="/products" className={styles.link}>
        Products
      </Link>
    </nav>
  );
}

export default Navbar;
