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


