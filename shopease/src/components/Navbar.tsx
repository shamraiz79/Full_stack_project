type NavbarProps = {
  activeTab: "home" | "products" | "about";
  onNavigate: (tab: "home" | "products" | "about") => void;
};

const navItems: Array<{ label: string; value: "home" | "products" | "about" }> =
  [
    { label: "Home", value: "home" },
    { label: "Products", value: "products" },
    { label: "About", value: "about" },
  ];

function Navbar({ activeTab, onNavigate }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between px-4"
      >
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="border-0 bg-transparent p-0 text-left text-[2rem] font-bold tracking-[-0.06em] text-black leading-none"
        >
          ShopEase
        </button>

        <div className="ml-auto mr-8 flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeTab === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => onNavigate(item.value)}
                className={`border-0 bg-transparent p-0 text-base font-medium ${
                  isActive ? "text-[#6d60d8]" : "text-black"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          className="flex items-center gap-2"
          aria-label="Search and cart actions"
        >
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center text-black"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-[22px] w-[22px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
            >
              <circle cx="11" cy="11" r="5.5" />
              <path d="M16 16L21 21" />
            </svg>
          </button>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center text-black"
            aria-label="Cart"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-[22px] w-[22px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
            >
              <circle cx="9" cy="18" r="1.4" />
              <circle cx="17" cy="18" r="1.4" />
              <path d="M3 4h2l2.5 10.5h9.7l2.1-7.7H7.2" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
