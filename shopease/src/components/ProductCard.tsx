export type Product = {
  id: number;
  name: string;
  price: number;
  category: "Chairs" | "Tables" | "Lamps" | "Decor";
  imageType: "chair" | "table" | "lamp" | "plant" | "shelf" | "comfort";
};

type ProductCardProps = {
  product: Product;
  onSelect?: (product: Product) => void;
};

function ProductCard({ product, onSelect }: ProductCardProps) {
  const handleClick = () => {
    onSelect?.(product);
  };

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleClick();
        }
      }}
      className="cursor-pointer overflow-hidden rounded-xl bg-[#f5f3f1] shadow-[0_1px_0_rgba(0,0,0,0.02)] transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#6d60d8]"
    >
      <div className="relative h-[200px] bg-[#efefee]">
        <div className="absolute inset-0 flex items-center justify-center">
          {product.imageType === "chair" && (
            <div className="relative h-[120px] w-[120px]">
              <div className="absolute left-1/2 top-2 h-[52px] w-[72px] -translate-x-1/2 rounded-[18px] bg-[#d8d4ce]" />
              <div className="absolute left-3 top-[48px] h-[58px] w-[10px] rounded-full bg-[#b88d5d]" />
              <div className="absolute right-3 top-[48px] h-[58px] w-[10px] rounded-full bg-[#b88d5d]" />
              <div className="absolute left-7 top-[48px] h-[58px] w-[10px] rounded-full bg-[#b88d5d]" />
              <div className="absolute right-7 top-[48px] h-[58px] w-[10px] rounded-full bg-[#b88d5d]" />
              <div className="absolute left-1/2 top-[75px] h-4 w-[72px] -translate-x-1/2 rounded-full bg-[#c8a47d]" />
            </div>
          )}

          {product.imageType === "table" && (
            <div className="relative h-[130px] w-[150px]">
              <div className="absolute left-1/2 top-0 h-[48px] w-[92px] -translate-x-1/2 rounded-[38px] bg-[#d7c29e]" />
              <div className="absolute left-5 top-[44px] h-[62px] w-[10px] rounded-full bg-[#b88954]" />
              <div className="absolute right-5 top-[44px] h-[62px] w-[10px] rounded-full bg-[#b88954]" />
              <div className="absolute left-1/2 top-[38px] h-[16px] w-[100px] -translate-x-1/2 rounded-full bg-[#b4895d]" />
            </div>
          )}

          {product.imageType === "lamp" && (
            <div className="relative h-[130px] w-[130px]">
              <div className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border-[7px] border-[#c7c7c7] bg-[#dfdfdf]" />
              <div className="absolute left-1/2 top-8 h-[52px] w-[4px] -translate-x-1/2 rounded-full bg-[#8a7c6d]" />
              <div className="absolute left-1/2 top-[60px] h-[44px] w-[76px] -translate-x-1/2 rounded-t-[36px] rounded-b-[8px] bg-[#ded6cb]" />
              <div className="absolute left-1/2 top-[104px] h-[12px] w-[62px] -translate-x-1/2 rounded-full bg-[#d1b388]" />
            </div>
          )}

          {product.imageType === "plant" && (
            <div className="relative h-[130px] w-[110px]">
              <div className="absolute left-1/2 bottom-0 h-[48px] w-[68px] -translate-x-1/2 rounded-t-[18px] rounded-b-[8px] bg-[#e0e0dd]" />
              <div className="absolute left-1/2 bottom-[42px] h-[48px] w-[12px] -translate-x-1/2 rounded-full bg-[#5c7c43]" />
              <div className="absolute left-[32px] bottom-[46px] h-[24px] w-[26px] rounded-full bg-[#5f8c47]" />
              <div className="absolute right-[28px] bottom-[46px] h-[22px] w-[24px] rounded-full bg-[#5f8c47]" />
              <div className="absolute left-[22px] bottom-[62px] h-[28px] w-[30px] rounded-full bg-[#618d4b]" />
              <div className="absolute right-[18px] bottom-[62px] h-[28px] w-[30px] rounded-full bg-[#618d4b]" />
            </div>
          )}

          {product.imageType === "comfort" && (
            <div className="relative h-[120px] w-[130px]">
              <div className="absolute left-1/2 top-1 h-[48px] w-[78px] -translate-x-1/2 rounded-[16px] bg-[#d1d0d1]" />
              <div className="absolute left-3 top-[46px] h-[54px] w-[10px] rounded-full bg-[#b88d5d]" />
              <div className="absolute right-3 top-[46px] h-[54px] w-[10px] rounded-full bg-[#b88d5d]" />
              <div className="absolute left-1/2 top-[64px] h-[14px] w-[78px] -translate-x-1/2 rounded-full bg-[#c4a180]" />
            </div>
          )}

          {product.imageType === "shelf" && (
            <div className="relative h-[130px] w-[120px]">
              <div className="absolute left-1/2 bottom-0 h-[50px] w-[82px] -translate-x-1/2 rounded-[10px] bg-[#d3b28c]" />
              <div className="absolute left-1/2 bottom-[50px] h-[52px] w-[70px] -translate-x-1/2 rounded-b-[6px] bg-[#f0e7d8]" />
              <div className="absolute bottom-[58px] left-4 h-[38px] w-[16px] rounded-full bg-[#d7b48b]" />
              <div className="absolute bottom-[58px] right-4 h-[38px] w-[16px] rounded-full bg-[#d7b48b]" />
            </div>
          )}
        </div>
      </div>

      <div className="px-4 pb-4 pt-3">
        <div className="text-xl font-medium text-[#49475d]">{product.name}</div>
        <div className="mt-1 text-[1.05rem] font-semibold text-[#4d4a5e]">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
