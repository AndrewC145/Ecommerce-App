function ProductCard({ image, title, price }) {
  return (
    <div className="flex flex-col items-center gap-2 font-roboto">
      <img className="" src={image} alt={title} />
      <h5>{title}</h5>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
