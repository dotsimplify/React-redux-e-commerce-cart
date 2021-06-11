import ProductItem from "./ProductItem";

const ProductsDisplay = ({ products, filter, cart }) => {
  const filteredArray =
    filter.length > 0
      ? products.filter((item) => filter.includes(item.category))
      : null;
  return (
    <>
      <h2 className="total-headline">Общее {cart} </h2>
      <div className="product-grid">
        {filter.length === 0
          ? products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))
          : filteredArray.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
      </div>
    </>
  );
};

export default ProductsDisplay;
