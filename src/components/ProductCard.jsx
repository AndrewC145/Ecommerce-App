function ProductCard({ image, title, price }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
