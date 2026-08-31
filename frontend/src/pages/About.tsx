type AboutPageProps = {
  onExploreProducts?: () => void;
};

const values = [
  {
    title: "Thoughtful Minimalism",
    description:
      "We believe less is truly more. Every curve, line, and joint is designed with intentional simplicity to bring calm and functional beauty to your everyday space.",
    icon: "sparkles",
  },
  {
    title: "Sustainable Craft",
    description:
      "From responsibly harvested solid woods to recyclable alloy accents, our materials are eco-conscious and sourced with deep respect for the planet.",
    icon: "leaf",
  },
  {
    title: "Direct & Honest",
    description:
      "By partnering directly with master artisans, we cut out middlemen markups to deliver heirloom-grade craftsmanship at accessible, fair prices.",
    icon: "shield",
  },
  {
    title: "Built for Longevity",
    description:
      "Furniture shouldn't be disposable. Each piece undergoes rigorous stress testing and is built with durable joinery intended to last generations.",
    icon: "check",
  },
];

const stats = [
  { value: "50k+", label: "Homes Furnished" },
  { value: "99.2%", label: "Satisfaction Rate" },
  { value: "100%", label: "Sustainable Wood" },
  { value: "24/7", label: "Dedicated Support" },
];

const teamMembers = [
  {
    name: "Elena Vance",
    role: "Head of Product Design",
    bio: "Passionate about Scandinavian minimalism and tactile organic textures.",
    avatarBg: "bg-[#e2ded9]",
    avatarAccent: "bg-[#b98d5f]",
  },
  {
    name: "Marcus Chen",
    role: "Master Craftsman",
    bio: "Over 15 years perfecting precision wood joinery and sustainable finishing.",
    avatarBg: "bg-[#dedbd5]",
    avatarAccent: "bg-[#6d60d8]",
  },
  {
    name: "Sophia Laurent",
    role: "Sustainability Director",
    bio: "Ensuring every supplier meets our strict carbon-neutral and circular standards.",
    avatarBg: "bg-[#d7dfd5]",
    avatarAccent: "bg-[#5c7c43]",
  },
];

function AboutPage({ onExploreProducts }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-[#efeeeb] text-slate-900">
      <main className="mx-auto max-w-[1200px] px-4 pb-16 pt-6">
        {/* Hero Section */}
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-center py-4">
            <span className="inline-flex w-fit items-center rounded-full bg-[#e3e0f7] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#6d60d8]">
              About ShopEase
            </span>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-[#4d4a5e] sm:text-5xl md:text-[3.6rem]">
              Crafting timeless spaces with
              <span className="block text-[#4a4d9a]">intentional design</span>
            </h1>

            <p className="mt-6 max-w-[500px] text-base leading-7 text-[#5b5868]">
              At ShopEase, we believe your environment shapes how you feel,
              think, and create. We design and curate minimal, high-quality
              furniture and lifestyle essentials that blend enduring aesthetics
              with everyday comfort.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center rounded-lg bg-[#6d60d8] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5e4fd3]"
              >
                Explore Collection
              </button>

              <a
                href="#our-story"
                className="inline-flex items-center justify-center rounded-lg border border-[#d7d4d1] bg-white px-6 py-3.5 text-sm font-semibold text-[#4d4a5e] transition hover:border-[#6d60d8] hover:text-[#6d60d8]"
              >
                Our Story
              </a>
            </div>
          </div>

          {/* Hero CSS Art Showcase */}
          <div className="mx-auto w-full max-w-[540px] rounded-2xl bg-[#f1f0f0] p-4 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.03)]">
            <div className="relative h-[340px] overflow-hidden rounded-xl bg-[#f5f3f1]">
              {/* Wall Art Frame */}
              <div className="absolute right-10 top-6 h-24 w-20 rounded-md border-4 border-[#dcd7d2] bg-[#eae6e1] shadow-sm">
                <div className="absolute inset-2 flex items-center justify-center rounded bg-[#dfdad4]">
                  <div className="h-8 w-8 rounded-full bg-[#cbb8a3] opacity-60" />
                </div>
              </div>

              {/* Minimal Chair Illustration */}
              <div className="absolute bottom-6 left-12 h-[190px] w-[150px]">
                {/* Backrest */}
                <div className="absolute left-1/2 top-4 h-[75px] w-[100px] -translate-x-1/2 rounded-[22px] bg-[#d9d3ce] shadow-[0_8px_16px_rgba(0,0,0,0.04)]" />
                {/* Seat Cushion */}
                <div className="absolute left-1/2 top-[72px] h-6 w-[106px] -translate-x-1/2 rounded-full bg-[#c8a47d]" />
                {/* Legs */}
                <div className="absolute left-3 top-[92px] h-[90px] w-[12px] rounded-full bg-[#b88d5d]" />
                <div className="absolute right-3 top-[92px] h-[90px] w-[12px] rounded-full bg-[#b88d5d]" />
                <div className="absolute left-8 top-[92px] h-[85px] w-[11px] rounded-full bg-[#a3794d]" />
                <div className="absolute right-8 top-[92px] h-[85px] w-[11px] rounded-full bg-[#a3794d]" />
              </div>

              {/* Floor Lamp Illustration */}
              <div className="absolute right-14 bottom-6 h-[240px] w-[70px]">
                {/* Lamp Shade */}
                <div className="absolute left-1/2 top-2 h-[42px] w-[64px] -translate-x-1/2 rounded-t-[30px] rounded-b-[6px] bg-[#ded6cb] shadow-sm" />
                {/* Stem */}
                <div className="absolute left-1/2 top-[44px] h-[170px] w-[4px] -translate-x-1/2 rounded-full bg-[#7a6f62]" />
                {/* Lamp Base */}
                <div className="absolute bottom-0 left-1/2 h-[12px] w-[60px] -translate-x-1/2 rounded-full bg-[#b89f81]" />
              </div>

              {/* Small Wooden Side Table + Plant */}
              <div className="absolute bottom-6 left-1/2 h-[130px] w-[120px] -translate-x-1/2">
                {/* Table Top */}
                <div className="absolute bottom-[60px] left-1/2 h-[14px] w-[90px] -translate-x-1/2 rounded-full bg-[#d7c29e] shadow-sm" />
                {/* Table Legs */}
                <div className="absolute bottom-0 left-6 h-[60px] w-[8px] rounded-full bg-[#b88954]" />
                <div className="absolute bottom-0 right-6 h-[60px] w-[8px] rounded-full bg-[#b88954]" />

                {/* Plant on top of table */}
                <div className="absolute bottom-[74px] left-1/2 -translate-x-1/2">
                  <div className="relative h-[55px] w-[50px]">
                    <div className="absolute bottom-0 left-1/2 h-[22px] w-[30px] -translate-x-1/2 rounded-t-[8px] rounded-b-[4px] bg-[#e0e0dd]" />
                    <div className="absolute bottom-[18px] left-1/2 h-[24px] w-[6px] -translate-x-1/2 rounded-full bg-[#5c7c43]" />
                    <div className="absolute bottom-[22px] left-1 h-[14px] w-[16px] rounded-full bg-[#5f8c47]" />
                    <div className="absolute bottom-[22px] right-1 h-[14px] w-[16px] rounded-full bg-[#5f8c47]" />
                    <div className="absolute bottom-[30px] left-2 h-[18px] w-[18px] rounded-full bg-[#618d4b]" />
                    <div className="absolute bottom-[30px] right-2 h-[18px] w-[18px] rounded-full bg-[#618d4b]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mt-14 grid grid-cols-2 gap-4 rounded-2xl bg-[#f0f0ee] p-6 text-[#4d4a5e] md:grid-cols-4 md:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold tracking-tight text-[#4a4d9a] sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-[#5e5c70]">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* Brand Values / Philosophy Section */}
        <section className="mt-16">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-[2.2rem] font-semibold tracking-[-0.05em] text-[#4d4a5e]">
              What We Stand For
            </h2>
            <p className="mt-2 max-w-[600px] text-base text-[#5b5868]">
              Our principles guide everything we create, from initial sketch to
              the finished product inside your home.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-2xl bg-[#f7f6f5] p-6 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#6d60d8] shadow-sm">
                  {item.icon === "sparkles" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-none stroke-current stroke-[1.8]"
                    >
                      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                    </svg>
                  )}
                  {item.icon === "leaf" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-none stroke-current stroke-[1.8]"
                    >
                      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2.5 1 5.5-.5 10A7 7 0 0 1 11 20z" />
                      <path d="m2 21 7-7" />
                    </svg>
                  )}
                  {item.icon === "shield" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-none stroke-current stroke-[1.8]"
                    >
                      <path d="M12 3 5 6v5c0 4.2 2.7 8 7 10 4.3-2 7-5.8 7-10V6l-7-3z" />
                    </svg>
                  )}
                  {item.icon === "check" && (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 fill-none stroke-current stroke-[1.8]"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  )}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#383754]">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-6 text-[#5e5c70]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Story Section */}
        <section
          id="our-story"
          className="mt-16 rounded-2xl bg-[#f6f4f3] p-8 md:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6d60d8]">
                Our Story
              </span>
              <h2 className="mt-2 text-[2.2rem] font-semibold tracking-[-0.05em] text-[#4d4a5e]">
                From a small workshop to homes worldwide
              </h2>

              <p className="mt-4 text-base leading-7 text-[#5b5868]">
                ShopEase began with a simple observation: modern living was
                becoming cluttered with fast furniture that was difficult to
                assemble, quick to wear out, and harmful to the environment.
              </p>

              <p className="mt-3 text-base leading-7 text-[#5b5868]">
                We set out to change that by collaborating directly with skilled
                woodworkers and material artisans. By stripping away
                unnecessary ornamentation and focusing on form, texture, and
                ergonomics, we create pieces that enhance your space without
                overwhelming it.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-md bg-white px-3.5 py-1.5 text-xs font-medium text-[#4d4a5e] shadow-sm">
                  ✓ FSC-Certified Timber
                </span>
                <span className="rounded-md bg-white px-3.5 py-1.5 text-xs font-medium text-[#4d4a5e] shadow-sm">
                  ✓ Zero-Plastic Packaging
                </span>
                <span className="rounded-md bg-white px-3.5 py-1.5 text-xs font-medium text-[#4d4a5e] shadow-sm">
                  ✓ Carbon-Neutral Delivery
                </span>
                <span className="rounded-md bg-white px-3.5 py-1.5 text-xs font-medium text-[#4d4a5e] shadow-sm">
                  ✓ 5-Year Guarantee
                </span>
              </div>
            </div>

            {/* Visual Box */}
            <div className="space-y-4 rounded-xl border border-[#d7d4d1] bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold text-[#383754]">
                Our Studio Standards
              </div>

              <div className="space-y-3.5 text-sm text-[#5e5c70]">
                <div className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e3e0f7] text-xs font-bold text-[#6d60d8]">
                    1
                  </span>
                  <div>
                    <span className="font-semibold text-[#383754]">
                      Intentional Proportions:
                    </span>{" "}
                    Sized thoughtfully for contemporary urban apartments and
                    spacious homes alike.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e3e0f7] text-xs font-bold text-[#6d60d8]">
                    2
                  </span>
                  <div>
                    <span className="font-semibold text-[#383754]">
                      Non-Toxic Finishes:
                    </span>{" "}
                    Natural oil blends and water-based sealers that preserve wood
                    grain safely for families and pets.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e3e0f7] text-xs font-bold text-[#6d60d8]">
                    3
                  </span>
                  <div>
                    <span className="font-semibold text-[#383754]">
                      Easy Assembly:
                    </span>{" "}
                    Smart hardware engineering means your pieces are ready in
                    under 15 minutes with simple tools included.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Creators Section */}
        <section className="mt-16">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-[2.2rem] font-semibold tracking-[-0.05em] text-[#4d4a5e]">
              Meet the Makers
            </h2>
            <p className="mt-2 text-base text-[#5b5868]">
              The passionate minds designing and shaping the ShopEase
              experience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl bg-[#f7f6f5] p-6 text-center shadow-[0_1px_0_rgba(0,0,0,0.02)]"
              >
                <div
                  className={`relative flex h-20 w-20 items-center justify-center rounded-full ${member.avatarBg} text-xl font-bold text-[#4d4a5e] shadow-inner`}
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                  <div
                    className={`absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-white ${member.avatarAccent}`}
                  />
                </div>

                <div className="mt-4 text-xl font-semibold text-[#383754]">
                  {member.name}
                </div>
                <div className="text-sm font-medium text-[#6d60d8]">
                  {member.role}
                </div>
                <p className="mt-3 text-sm leading-6 text-[#5e5c70]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="mt-16 overflow-hidden rounded-2xl bg-[#3f3c53] px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Bring calm and character to your home
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-base text-[#c4c1d6]">
            Explore our latest collection of minimal furniture, warm lighting,
            and crafted decor.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={onExploreProducts}
              className="rounded-lg bg-[#6d60d8] px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-[#5d50d0]"
            >
              Shop All Products
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-black/10 bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-5 text-sm text-slate-600">
          <div className="font-semibold text-[#4d4a5e]">© 2026 ShopEase</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 no-underline hover:text-[#6d60d8]">
              Privacy
            </a>
            <a href="#" className="text-slate-600 no-underline hover:text-[#6d60d8]">
              Terms
            </a>
            <a href="#" className="text-slate-600 no-underline hover:text-[#6d60d8]">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;

