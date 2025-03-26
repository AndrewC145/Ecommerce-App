function CategoryHeader({ category }) {
  return (
    <div className="py-10 text-center sm:py-12 md:py-14 lg:py-20 xl:py-28">
      <p className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">{category}</p>
    </div>
  );
}

export default CategoryHeader;
