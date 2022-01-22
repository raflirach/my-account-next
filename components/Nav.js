import styles from "../styles/Nav.module.css"
import Toggle from "./Toggle";

export default function Nav() {
  
  return (
    <nav className={styles.nav}>
      <div className={styles.navBody}>
        <div className={styles.navContent}>
          <div className="mr-4 dark:white">Home</div>
          <a>Warehouse</a>
          <div className="flex gap-4 ml-auto">
            <Toggle />

            <a>Logout</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
