import PRODUCTS from "@/models/Products";
import ProductCard from "../cards/ProductCard";

export default function ProductBrowser() {
  return (
    <div className="flex flex-col text-center mx-28 items-center">
      <h1>Our Products</h1>
      <ol className="flex my-6 justify-center flex-wrap">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ol>
    </div>
  );
}
