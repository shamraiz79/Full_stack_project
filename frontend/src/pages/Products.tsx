import { useMemo, useState } from "react";
import ProductCard, { type Product } from "../components/ProductCard";

type ProductsPageProps = {
  onSelectProduct: (product: Product) => void;
};

const products: Product[] = [
  {
    id: 1,
    name: "Minimal Chair",
    price: 49.99,
    category: "Chairs",
    imageType: "chair",
  },
  {
    id: 2,
    name: "Wooden Table",
    price: 89.99,
    category: "Tables",
    imageType: "table",
  },
  {
    id: 3,
    name: "Desk Lamp",
    price: 24.99,
    category: "Lamps",
    imageType: "lamp",
  },
  {
    id: 4,
    name: "Plant Pot",
    price: 19.99,
    category: "Decor",
    imageType: "plant",
  },
  {
    id: 5,
    name: "Comfort Chair",
    price: 59.99,
    category: "Chairs",
    imageType: "comfort",
  },
  {
    id: 6,
    name: "Bookshelf",
    price: 99.99,
    category: "Decor",
    imageType: "shelf",
  },
];

const categoryOptions = ["All", "Chairs", "Tables", "Lamps", "Decor"] as const;
const priceOptions = [
  { label: "All", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "$0 - $25", min: 0, max: 25 },
  { label: "$25 - $50", min: 25, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100+", min: 100, max: Number.POSITIVE_INFINITY },
] as const;

function ProductsPage({ onSelectProduct }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categoryOptions)[number]>("All");
  const [selectedPrice, setSelectedPrice] =
    useState<(typeof priceOptions)[number]["label"]>("All");
  const [sortBy, setSortBy] = useState("latest");

  const visibleProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    const priceRange =
      priceOptions.find((option) => option.label === selectedPrice) ??
      priceOptions[0];
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange.min && product.price < priceRange.max,
    );

    if (sortBy === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "latest") {
      filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [selectedCategory, selectedPrice, sortBy]);

  return (
    <div className="min-h-screen bg-[#efeeeb] text-slate-900">
      <main className="mx-auto max-w-[1200px] px-4 pb-10 pt-5">
        <div className="mb-6 flex items-center justify-between border-b border-[#d7d4d1] pb-3">
          <div className="text-[1.9rem] font-semibold text-[#49475d]">
            All Products
          </div>

          <label className="flex items-center gap-2 text-sm font-medium text-[#4d4a5e]">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-md border border-[#d7d4d1] bg-white px-3 py-2 text-sm text-[#4d4a5e] outline-none"
            >
              <option value="latest">Latest</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </label>
        </div>

        <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="space-y-6 rounded-xl bg-transparent p-1">
            <div>
              <h3 className="mb-3 text-2xl font-semibold text-[#4d4a5e]">
                Filters
              </h3>

              <div className="space-y-3">
                <p className="text-lg font-semibold text-[#4d4a5e]">Category</p>
                {categoryOptions.map((category) => (
                  <label
                    key={category}
                    className="flex cursor-pointer items-center gap-2 text-[#4d4a5e]"
                  >
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="h-4 w-4 accent-[#6d60d8]"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-lg font-semibold text-[#4d4a5e]">Price</p>
              {priceOptions.map((option) => (
                <label
                  key={option.label}
                  className="flex cursor-pointer items-center gap-2 text-[#4d4a5e]"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={selectedPrice === option.label}
                    onChange={() => setSelectedPrice(option.label)}
                    className="h-4 w-4 accent-[#6d60d8]"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </aside>

          <div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onSelectProduct}
                />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold ${
                    page === 1
                      ? "bg-[#6d60d8] text-white"
                      : "bg-white text-[#4d4a5e]"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;
