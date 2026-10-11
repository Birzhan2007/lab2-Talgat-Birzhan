function ProductCard({ product, onAdd }) {
  return (
    <article className="product">
      <img className="product__img" src={product.image} alt={product.name} />
      <h3 className="product__title">{product.name}</h3>
      <p className="product__price">{product.price} тг</p>
      <button className="product__btn" onClick={() => onAdd(product)}>
        В корзину
      </button>
    </article>
  );
}

export default ProductCard;
