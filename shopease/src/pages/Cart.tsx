import type { Product } from "../components/ProductCard";

export type CartItem = Product & {
  quantity: number;
};

type CartProps = {
  items: CartItem[];
  onQuantityChange: (productId: number, delta: number) => void;
  onRemove: (productId: number) => void;
};

function CartItemArt({ type }: { type: Product["imageType"] }) {
  if (type === "chair") {
    return (
      <div className="relative h-[52px] w-[52px]">
        <div className="absolute left-1/2 top-2 h-[22px] w-[32px] -translate-x-1/2 rounded-[8px] bg-[#d5d0ca]" />
        <div className="absolute left-3 top-[20px] h-[18px] w-[4px] rounded-full bg-[#b88d5d]" />
        <div className="absolute right-3 top-[20px] h-[18px] w-[4px] rounded-full bg-[#b88d5d]" />
        <div className="absolute left-1/2 top-[26px] h-2 w-[26px] -translate-x-1/2 rounded-full bg-[#c7a07a]" />
      </div>
    );
  }

  if (type === "lamp") {
    return (
      <div className="relative h-[52px] w-[52px]">
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-[#c7c7c7] bg-[#dfdfdf]" />
        <div className="absolute left-1/2 top-4 h-[18px] w-[2px] -translate-x-1/2 rounded-full bg-[#8a7c6d]" />
        <div className="absolute left-1/2 top-[18px] h-[16px] w-[24px] -translate-x-1/2 rounded-t-[12px] rounded-b-[5px] bg-[#ded6cb]" />
      </div>
    );
  }

  if (type === "plant") {
    return (
      <div className="relative h-[52px] w-[52px]">
        <div className="absolute left-1/2 bottom-0 h-[18px] w-[28px] -translate-x-1/2 rounded-t-[8px] rounded-b-[4px] bg-[#e0e0dd]" />
        <div className="absolute left-1/2 bottom-[18px] h-[18px] w-[4px] -translate-x-1/2 rounded-full bg-[#5c7c43]" />
        <div className="absolute left-[12px] bottom-[18px] h-[10px] w-[10px] rounded-full bg-[#5f8c47]" />
        <div className="absolute right-[12px] bottom-[18px] h-[10px] w-[10px] rounded-full bg-[#5f8c47]" />
      </div>
    );
  }

  return (
    <div className="relative h-[52px] w-[52px]">
      <div className="absolute left-1/2 top-1 h-[16px] w-[20px] -translate-x-1/2 rounded-[8px] bg-[#d3c0a2]" />
      <div className="absolute left-3 top-[16px] h-[18px] w-[3px] rounded-full bg-[#b88954]" />
      <div className="absolute right-3 top-[16px] h-[18px] w-[3px] rounded-full bg-[#b88954]" />
      <div className="absolute left-1/2 top-[16px] h-[3px] w-[24px] -translate-x-1/2 rounded-full bg-[#b88954]" />
    </div>
  );
}

function Cart({ items, onQuantityChange, onRemove }: CartProps) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <main className="mx-auto max-w-[980px] px-4 py-8 text-[#4d4a5e]">
      <h1 className="text-[2.4rem] font-semibold tracking-[-0.05em] text-[#4d4a5e]">
        Your Cart
      </h1>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-xl bg-[#f6f4f3] p-3 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          >
            <div className="flex h-[90px] w-[90px] items-center justify-center rounded-lg bg-[#f0efee]">
              <CartItemArt type={item.imageType} />
            </div>

            <div className="flex flex-1 items-center justify-between gap-4">
              <div>
                <div className="text-[1.06rem] font-medium text-[#4d4a5e]">
                  {item.name}
                </div>
                <div className="mt-1 text-base font-semibold text-[#4d4a5e]">
                  ${item.price.toFixed(2)}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#d8d4d0] bg-[#f7f5f3]">
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.id, -1)}
                    className="h-10 w-10 border-0 bg-transparent text-xl text-[#4d4a5e]"
                  >
                    -
                  </button>
                  <span className="flex h-10 w-10 items-center justify-center bg-white text-base font-medium text-[#4d4a5e]">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.id, 1)}
                    className="h-10 w-10 border-0 bg-transparent text-xl text-[#4d4a5e]"
                  >
                    +
                  </button>
                </div>

                <div className="w-[72px] text-right text-base font-semibold text-[#4d4a5e]">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-transparent bg-transparent text-[#4d4a5e] hover:border-[#d8d4d0]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
                    aria-hidden="true"
                  >
                    <path d="M4 7h16" />
                    <path d="M9 7V4h6v3" />
                    <path d="M7 7l1 12h8l1-12" />
                    <path d="M10 11v5M14 11v5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <div className="w-full max-w-[240px]">
          <div className="mb-3 flex items-center justify-between text-xl font-semibold text-[#4d4a5e]">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-[#6d60d8] px-4 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-[#5d50d0]"
          >
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}

export default Cart;
