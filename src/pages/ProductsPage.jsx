
import { Link } from "react-router-dom";
import styles from "./ProductDetail.module.css";

const products = [
  { id: 1, name: "Wireless Headphones", price: 299000 },
  { id: 2, name: "Mechanical Keyboard", price: 450000 },
  { id: 3, name: "Gaming Mouse", price: 175000 },
];

function Products() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>

      <div className={styles.productList}>
        {products.map((product) => (
          <div className={styles.productCard} key={product.id}>
            <h2>{product.name}</h2>

            <p className={styles.price}>
              Rp {product.price.toLocaleString("id-ID")}
            </p>

            <Link
              className={styles.link}
              to={`/products/${product.id}`}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
