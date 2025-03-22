function ProductCard({ image, title, price }) {
  return (
    <div className="flex flex-col items-center gap-2 font-roboto">
      <img className="h-[85%] w-full object-cover" src={image} alt={title} />
      <div className="flex w-full flex-col justify-between md:flex-row md:items-center md:gap-2">
        <h5 className="text-sm sm:text-base">{title}</h5>
        <p className="text-sm sm:text-base">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
