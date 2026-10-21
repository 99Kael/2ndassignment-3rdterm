import { useParams } from "react-router-dom"
import styles from "./ProductDetail.module.css";

const products = [
  { id: 1, name: "Wireless Headphones", price: 299000 },
  { id: 2, name: "Mechanical Keyboard", price: 450000 },
  { id: 3, name: "Gaming Mouse", price: 175000 },
];

function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found!</h1>;
  }

  return (
  <div className={styles.container}>
    <h1 className={styles.title}>{product.name}</h1>
    <p className={styles.price}>
      Price: Rp {product.price.toLocaleString("id-ID")}
    </p>
    <p className={styles.id}>Product ID: {product.id}</p>
  </div>
);
}

export default ProductDetail;
