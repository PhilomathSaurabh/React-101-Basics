import React from "react";
import styles from "./Product.module.css";

// function Product(props) {
// One more method to do the above thing is that add one extra curly braces and directly add names of items and classes
function Product({ name, description, price }) {
  return (
    <div className={styles.product}>
      <h1>{name}</h1>
      <h2 className={styles.error}>An error occured</h2>
      <h3>{description}</h3>
      <h5 className="product__price">${price}</h5>
    </div>
  );
}

export default Product;
