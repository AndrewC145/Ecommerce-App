function ProductCard({ image, title, price }) {
  return (
    <div className="flex flex-col items-center gap-2 font-roboto">
      <img className="h-[85%] w-full object-cover" src={image} alt={title} />
      <div className="flex w-full justify-between">
        <h5>{title}</h5>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
