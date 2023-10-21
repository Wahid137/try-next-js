const SingleProduct = ({ product }) => {
  const { title, id, price } = product;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default SingleProduct;
