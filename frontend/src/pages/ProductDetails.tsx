import type { Product } from "../components/ProductCard";

type ProductDetailsProps = {
  product?: Product;
  onBack?: () => void;
  onAddToCart?: (product: Product) => void;
};

const fallbackProduct: Product = {
  id: 1,
  name: "Minimal Chair",
  price: 49.99,
  category: "Chairs",
  imageType: "chair",
};

function ProductDetails({
  product = fallbackProduct,
  onBack,
  onAddToCart,
}: ProductDetailsProps) {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <main className="mx-auto max-w-[1200px] px-4 pb-10 pt-6 text-[#4d4a5e]">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-2 rounded-md border border-[#d7d4d1] bg-white px-3 py-2 text-sm font-medium text-[#4d4a5e]"
        >
          ← Back to products
        </button>
      )}

      <div className="mb-5 flex items-center gap-2 text-sm text-[#4d4a5e]">
        <span>Home</span>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <span className="font-medium text-[#2f2e3a]">{product.name}</span>
      </div>

      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="rounded-xl bg-[#efefef] p-6 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.02)]">
          <div className="relative mx-auto h-[430px] w-full max-w-[520px] overflow-hidden rounded-lg bg-[#f1f0f0]">
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-[55px] bg-[#d9d3ce] shadow-[0_18px_30px_rgba(0,0,0,0.08)]">
              <div className="absolute inset-x-12 top-7 h-16 rounded-full bg-[#dfe0df]" />
              <div className="absolute left-8 top-[90px] h-[150px] w-[30px] rounded-[14px] bg-[#d7d1ca]" />
              <div className="absolute right-8 top-[90px] h-[150px] w-[30px] rounded-[14px] bg-[#d7d1ca]" />
              <div className="absolute left-10 top-[105px] h-28 w-24 rounded-t-[48px] rounded-b-[16px] bg-[#e9e2dc] shadow-inner" />
              <div className="absolute left-[18px] top-[182px] h-[90px] w-[18px] rounded-full bg-[#be9f82]" />
              <div className="absolute right-[18px] top-[182px] h-[90px] w-[18px] rounded-full bg-[#be9f82]" />
              <div className="absolute left-[38px] top-[238px] h-8 w-[20px] rounded-full bg-[#b98d5f]" />
              <div className="absolute right-[38px] top-[238px] h-8 w-[20px] rounded-full bg-[#b98d5f]" />
              <div className="absolute left-12 top-[244px] h-6 w-[120px] rounded-full bg-[#c9a47c] opacity-90" />
            </div>
          </div>
        </div>

        <div className="pt-2">
          <h1 className="text-[3rem] font-semibold leading-none tracking-[-0.06em] text-[#44415d]">
            {product.name}
          </h1>
          <div className="mt-5 text-[2.2rem] font-semibold tracking-[-0.04em] text-[#44415d]">
            ${product.price.toFixed(2)}
          </div>

          <p className="mt-5 max-w-[420px] text-base leading-7 text-[#5b5868]">
            {description}
          </p>

          <div className="mt-6">
            <div className="mb-3 text-base font-medium text-[#4d4a5e]">
              Quantity
            </div>
            <div className="flex w-fit items-center border border-[#d8d4d0] bg-[#f7f5f3]">
              <button
                type="button"
                className="h-12 w-12 border-0 bg-transparent text-xl text-[#4d4a5e]"
              >
                -
              </button>
              <span className="flex h-12 w-12 items-center justify-center bg-white text-lg font-medium text-[#4d4a5e]">
                1
              </span>
              <button
                type="button"
                className="h-12 w-12 border-0 bg-transparent text-xl text-[#4d4a5e]"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#6d60d8] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-[#5d50d0]"
          >
            Add to Cart
          </button>
        </div>
      </section>

      <section className="mt-8 border-t border-[#d7d4d1] pt-6">
        <h2 className="text-[2.1rem] font-semibold tracking-[-0.05em] text-[#4d4a5e]">
          Description
        </h2>
        <p className="mt-4 max-w-[1000px] text-base leading-7 text-[#5b5868]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>
    </main>
  );
}

export default ProductDetails;
