import Product from "@/types/Product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative mx-4 my-4 text-left bg-light-grey group">
      <div className="absolute inset-0 bg-dark-grey opacity-0 flex flex-col items-center justify-center group-hover:opacity-75 transition-opacity duration-300"></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="hover:cursor-pointer px-14 py-3 bg-white text-dark-golden font-semibold">
          Add to cart
        </button>
      </div>

      <img className="w-[280px]" src={product.img.src} alt="" />
      <div className="p-4">
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <span className="flex items-center">
          <h3>Rp {product.price}</h3>
          {product.oldPrice && (
            <p className="ml-auto text-dark-grey line-through opacity-50">
              Rp {product.oldPrice}
            </p>
          )}
        </span>
      </div>
    </div>
  );
}
