import styles from "./HomePage.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Product Catalog
      </h1>

      <p className={styles.description}>
        Discover our collection of products.
      </p>
    </div>
  );
}

export default Home;
