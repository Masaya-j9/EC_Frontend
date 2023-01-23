import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="products">
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>¥{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>カートに入れる</button>
      </div>
    </div>
  );
}
