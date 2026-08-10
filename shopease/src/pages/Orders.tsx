const orders = [
  { id: "#1234", date: "May 20, 2024", status: "Delivered", total: "$119.96" },
  { id: "#1233", date: "May 10, 2024", status: "Processing", total: "$59.99" },
  { id: "#1232", date: "May 1, 2024", status: "Cancelled", total: "$24.99" },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-[#dff3e8] text-[#2a8f5b]",
  Processing: "bg-[#fef3cf] text-[#b57a0a]",
  Cancelled: "bg-[#ffe2dd] text-[#d45d4d]",
};

function OrdersPage() {
  return (
    <div className="min-h-screen bg-[#f3f1ef] text-[#1f1f1f]">
      <header className="w-full border-b border-[#111111] bg-white">
        <nav className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-4">
          <div className="text-[2rem] font-bold tracking-[-0.06em] text-[#111111] leading-none">
            ShopEase
          </div>

          <div className="ml-auto mr-8 flex items-center gap-10">
            <button
              type="button"
              className="border-0 bg-transparent p-0 text-base font-medium text-[#111111]"
            >
              Home
            </button>
            <button
              type="button"
              className="border-0 bg-transparent p-0 text-base font-medium text-[#111111]"
            >
              Products
            </button>
            <button
              type="button"
              className="border-0 bg-transparent p-0 text-base font-medium text-[#111111]"
            >
              About
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="flex h-8 w-8 items-center justify-center border-0 bg-transparent p-0 text-[#111111]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="5.5" />
                <path d="M16 16L21 21" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Cart"
              className="flex h-8 w-8 items-center justify-center border-0 bg-transparent p-0 text-[#111111]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
                aria-hidden="true"
              >
                <circle cx="9" cy="18" r="1.4" />
                <circle cx="17" cy="18" r="1.4" />
                <path d="M3 4h2l2.5 10.5h9.7l2.1-7.7H7.2" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-[1140px] px-4 py-8">
        <h1 className="text-[2.4rem] font-semibold tracking-[-0.06em] text-[#2c2c2c]">
          My Orders
        </h1>

        <div className="mt-6 overflow-hidden rounded-none border-t border-[#d9d5d2] bg-transparent">
          {orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-[1.5fr_1.2fr_0.8fr_0.7fr] items-center gap-4 border-b border-[#d9d5d2] px-0 py-4"
            >
              <div>
                <div className="text-[1.05rem] font-medium text-[#303030]">
                  {order.id}
                </div>
                <div className="mt-1 text-sm text-[#5e5b58]">{order.date}</div>
              </div>

              <div className="flex justify-start">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[order.status]}`}
                >
                  {order.status}
                </span>
              </div>

              <div className="text-right text-[1.05rem] font-semibold text-[#2d2d2d]">
                {order.total}
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className="border-0 bg-transparent p-0 text-sm font-medium text-[#3f3f3f] underline underline-offset-2"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default OrdersPage;
