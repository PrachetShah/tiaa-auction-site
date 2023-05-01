const CategoryItem = ({ items }) => {
  const { id, name, imageUrl, price } = items;
  console.log(imageUrl);
  return (
    <div className="w-1/2 mx-6 my-3 px-4" id={id}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="h-80 w-64"
        href={imageUrl}
        alt={name}
      />
      <h3>Date</h3>
      <h2>{name}</h2>
      <p>Shop Now - {price}</p>
    </div>
  );
};

export default CategoryItem;
