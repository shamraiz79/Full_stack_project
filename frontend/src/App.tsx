import { useState } from "react";
import Navbar from "./components/Navbar";
import type { Product } from "./components/ProductCard";
import AboutPage from "./pages/About";
import Cart, { type CartItem } from "./pages/Cart";
import LoginPage from "./pages/Login";
import OrdersPage from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import RegisterPage from "./pages/Register";

const featureList = [
  { title: "Free Shipping", subtitle: "On all orders over $50", icon: "truck" },
  { title: "Money Guarantee", subtitle: "30 day money back", icon: "shield" },
  { title: "Online Support", subtitle: "24/7 support", icon: "headset" },
];

const products = [
  { id: 1, name: "Minimal Chair", price: 49.99, type: "chair" },
  { id: 2, name: "Wooden Table", price: 89.99, type: "table" },
  { id: 3, name: "Desk Lamp", price: 24.99, type: "lamp" },
  { id: 4, name: "Plant Pot", price: 19.99, type: "plant" },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-[#efeeeb] text-slate-900">
      <main className="mx-auto max-w-[1200px] px-4 pb-10 pt-5">
        <section className="grid items-center gap-8 md:grid-cols-[1.02fr_1.08fr]">
          <div className="flex flex-col justify-center px-2 py-5">
            <h1 className="max-w-[430px] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#4d4a5e] md:text-[4rem]">
              Find the best
              <span className="block text-[#4a4d9a]">products for</span>
              <span className="block">you</span>
            </h1>

            <p className="mt-6 max-w-[420px] text-base leading-7 text-[#5b5868]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <button
              type="button"
              className="mt-7 inline-flex w-fit items-center justify-center rounded-md bg-[#6d60d8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5e4fd3]"
            >
              Shop Now
            </button>
          </div>

          <div className="mx-auto w-full max-w-[560px] rounded-xl bg-[#f1f0f0] p-4 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.03)]">
            <div className="relative h-[320px] overflow-hidden rounded-lg bg-[#f3f2f1]">
              <div className="absolute left-1/2 top-1/2 h-[220px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-[50px] bg-[#d9d3ce] shadow-[0_18px_30px_rgba(0,0,0,0.08)]">
                <div className="absolute inset-x-10 top-6 h-14 rounded-full bg-[#dfe0df]" />
                <div className="absolute left-5 top-20 h-[110px] w-[30px] rounded-[14px] bg-[#d7d1ca]" />
                <div className="absolute right-5 top-20 h-[110px] w-[30px] rounded-[14px] bg-[#d7d1ca]" />
                <div className="absolute left-8 top-24 h-24 w-20 rounded-t-[42px] rounded-b-[18px] bg-[#e9e2dc] shadow-inner" />
                <div className="absolute left-[18px] top-[132px] h-[70px] w-[18px] rounded-full bg-[#be9f82]" />
                <div className="absolute right-[18px] top-[132px] h-[70px] w-[18px] rounded-full bg-[#be9f82]" />
                <div className="absolute left-12 top-[172px] h-6 w-[80px] rounded-full bg-[#b98d5f] opacity-80" />
              </div>

              <div className="absolute right-[58px] bottom-[2px] h-[130px] w-[110px] rounded-t-[26px] rounded-b-[8px] bg-[#d7d0c6] shadow-[0_10px_18px_rgba(0,0,0,0.06)]">
                <div className="absolute left-1/2 top-4 h-9 w-9 -translate-x-1/2 rounded-full border-[8px] border-[#b1b5b0] bg-[#b6b3ae]" />
                <div className="absolute left-[50%] top-[46px] h-[50px] w-[10px] -translate-x-1/2 rounded-full bg-[#b5a890]" />
                <div className="absolute bottom-0 left-1/2 h-3 w-[68px] -translate-x-1/2 rounded-full bg-[#c2a08a]" />
              </div>

              <div className="absolute left-[74px] bottom-[18px] h-[50px] w-[120px] rounded-t-[50%] rounded-b-[12px] bg-[#d7d0c6] shadow-[0_10px_18px_rgba(0,0,0,0.06)]" />
              <div className="absolute left-[130px] bottom-[10px] h-[120px] w-[98px] rounded-t-[18px] rounded-b-[4px] bg-[#d9d8d4]" />
              <div className="absolute left-[152px] bottom-[22px] h-[70px] w-[54px] rounded-t-[5px] rounded-b-[14px] bg-[#d8d4d0] shadow-inner" />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-[2.2rem] font-semibold tracking-[-0.06em] text-[#4d4a5e]">
              Featured Products
            </h2>
            <button
              type="button"
              className="border-0 bg-transparent p-0 text-lg font-medium text-[#6d60d8]"
            >
              View All
            </button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-xl bg-[#f5f3f1]"
              >
                <div className="relative h-[230px] bg-[#efefee]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {product.type === "chair" && (
                      <div className="relative h-[140px] w-[120px]">
                        <div className="absolute left-1/2 top-3 h-[60px] w-[80px] -translate-x-1/2 rounded-[18px] bg-[#d8d4ce]" />
                        <div className="absolute left-3 top-[58px] h-[70px] w-[12px] rounded-full bg-[#b88d5d]" />
                        <div className="absolute right-3 top-[58px] h-[70px] w-[12px] rounded-full bg-[#b88d5d]" />
                        <div className="absolute left-7 top-[58px] h-[70px] w-[12px] rounded-full bg-[#b88d5d]" />
                        <div className="absolute right-7 top-[58px] h-[70px] w-[12px] rounded-full bg-[#b88d5d]" />
                        <div className="absolute left-1/2 top-[88px] h-5 w-[80px] -translate-x-1/2 rounded-full bg-[#c8a47d]" />
                      </div>
                    )}

                    {product.type === "table" && (
                      <div className="relative h-[145px] w-[170px]">
                        <div className="absolute left-1/2 top-0 h-[58px] w-[110px] -translate-x-1/2 rounded-[35px] bg-[#d7c29e]" />
                        <div className="absolute left-4 top-[54px] h-[70px] w-[12px] rounded-full bg-[#b88954]" />
                        <div className="absolute right-4 top-[54px] h-[70px] w-[12px] rounded-full bg-[#b88954]" />
                        <div className="absolute left-1/2 top-[46px] h-[18px] w-[120px] -translate-x-1/2 rounded-full bg-[#b4895d]" />
                      </div>
                    )}

                    {product.type === "lamp" && (
                      <div className="relative h-[145px] w-[150px]">
                        <div className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border-[7px] border-[#c7c7c7] bg-[#dfdfdf]" />
                        <div className="absolute left-1/2 top-8 h-[60px] w-[4px] -translate-x-1/2 rounded-full bg-[#8a7c6d]" />
                        <div className="absolute left-1/2 top-[68px] h-[52px] w-[86px] -translate-x-1/2 rounded-t-[40px] rounded-b-[10px] bg-[#ded6cb]" />
                        <div className="absolute left-1/2 top-[118px] h-[16px] w-[70px] -translate-x-1/2 rounded-full bg-[#d1b388]" />
                      </div>
                    )}

                    {product.type === "plant" && (
                      <div className="relative h-[150px] w-[130px]">
                        <div className="absolute left-1/2 bottom-0 h-[62px] w-[80px] -translate-x-1/2 rounded-t-[22px] rounded-b-[8px] bg-[#e0e0dd]" />
                        <div className="absolute left-1/2 bottom-[52px] h-[60px] w-[16px] -translate-x-1/2 rounded-full bg-[#5c7c43]" />
                        <div className="absolute left-[32px] bottom-[54px] h-[26px] w-[32px] rounded-full bg-[#5f8c47] blur-[1px]" />
                        <div className="absolute right-[30px] bottom-[54px] h-[24px] w-[26px] rounded-full bg-[#5f8c47] blur-[1px]" />
                        <div className="absolute left-[22px] bottom-[70px] h-[32px] w-[38px] rounded-full bg-[#618d4b]" />
                        <div className="absolute right-[20px] bottom-[72px] h-[32px] w-[38px] rounded-full bg-[#618d4b]" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-4 pb-4 pt-3">
                  <div className="text-xl font-medium text-[#49475d]">
                    {product.name}
                  </div>
                  <div className="mt-1 text-[1.05rem] font-semibold text-[#4d4a5e]">
                    ${product.price.toFixed(2)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-3 rounded-2xl bg-[#f0f0ee] p-4 text-[#4c4b5f] md:grid-cols-3">
          {featureList.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4 rounded-xl bg-[#f7f6f5] p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6d60d8] shadow-sm">
                {feature.icon === "truck" && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current stroke-[1.8]"
                  >
                    <path d="M3 7h11v8H3zM14 9h3l3 3v3h-6z" />
                    <circle cx="8" cy="17" r="1.7" />
                    <circle cx="18" cy="17" r="1.7" />
                  </svg>
                )}
                {feature.icon === "shield" && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current stroke-[1.8]"
                  >
                    <path d="M12 3 5 6v5c0 4.2 2.7 8 7 10 4.3-2 7-5.8 7-10V6l-7-3z" />
                  </svg>
                )}
                {feature.icon === "headset" && (
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-none stroke-current stroke-[1.8]"
                  >
                    <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2v-7h4" />
                    <path d="M4 12v5a2 2 0 0 0 2 2h2v-7H4z" />
                  </svg>
                )}
              </div>
              <div>
                <div className="text-lg font-semibold text-[#383754]">
                  {feature.title}
                </div>
                <div className="text-sm text-[#5e5c70]">{feature.subtitle}</div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="mt-8 border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-5 text-sm text-slate-600">
          <div className="font-semibold text-[#4d4a5e]">© 2026 ShopEase</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 no-underline">
              Privacy
            </a>
            <a href="#" className="text-slate-600 no-underline">
              Terms
            </a>
            <a href="#" className="text-slate-600 no-underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState<
    "home" | "products" | "about" | "cart" | "orders"
  >("orders");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [authView, setAuthView] = useState<"login" | "register" | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Minimal Chair",
      price: 49.99,
      category: "Chairs",
      imageType: "chair",
      quantity: 1,
    },
    {
      id: 3,
      name: "Desk Lamp",
      price: 24.99,
      category: "Lamps",
      imageType: "lamp",
      quantity: 2,
    },
    {
      id: 4,
      name: "Plant Pot",
      price: 19.99,
      category: "Decor",
      imageType: "plant",
      quantity: 1,
    },
  ]);

  const handleNavigate = (
    tab: "home" | "products" | "about" | "cart" | "orders",
  ) => {
    setActiveTab(tab);
    setAuthView(null);
    if (tab !== "products" && tab !== "cart") {
      setSelectedProduct(null);
    }
    if (tab === "cart" || tab === "orders") {
      setSelectedProduct(null);
    }
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab("products");
    setAuthView(null);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((current) => {
      const itemExists = current.find((item) => item.id === product.id);

      if (itemExists) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setSelectedProduct(null);
    setActiveTab("cart");
    setAuthView(null);
  };

  const handleQuantityChange = (productId: number, delta: number) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((current) => current.filter((item) => item.id !== productId));
  };

  const renderMainContent = () => {
    if (authView === "login") {
      return <LoginPage onSwitchToRegister={() => setAuthView("register")} />;
    }

    if (authView === "register") {
      return <RegisterPage onSwitchToLogin={() => setAuthView("login")} />;
    }

    if (activeTab === "cart") {
      return (
        <Cart
          items={cartItems}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemoveItem}
        />
      );
    }

    if (activeTab === "orders") {
      return <OrdersPage />;
    }

    if (selectedProduct) {
      return (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      );
    }

    if (activeTab === "home") {
      return <HomePage />;
    }

    if (activeTab === "products") {
      return <Products onSelectProduct={handleProductSelect} />;
    }

    if (activeTab === "about") {
      return (
        <AboutPage onExploreProducts={() => handleNavigate("products")} />
      );
    }

    return null;
  };

  return (
    <>
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenLogin={() => setAuthView("login")}
      />
      {renderMainContent()}
    </>
  );
}

export default App;
