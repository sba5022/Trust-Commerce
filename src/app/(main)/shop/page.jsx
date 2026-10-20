
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    Search,
    Heart,
    ShoppingBag,
    SlidersHorizontal,
    ChevronLeft,
    ChevronRight,
    Star,
    Leaf,
    X,
} from "lucide-react";

const categories = [
    { name: "All Products", count: 12 },
    { name: "Face Elixirs", count: 3 },
    { name: "Hydrating Toners", count: 2 },
    { name: "Creams & Gels", count: 2 },
    { name: "Overnight Masks", count: 2 },
    { name: "Aromatics & Body", count: 3 },
];

const products = [
    {
        id: 1,
        name: "Restorative Botanical Face Serum",
        category: "Face Elixirs",
        price: 68,
        oldPrice: 80,
        rating: 4.9,
        reviews: 248,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
        description: "Cold-pressed Bakuchiol and organic Sea Buckthorn for collagen density.",
    },
    {
        id: 2,
        name: "Dewy Rosewater Essence Mist",
        category: "Hydrating Toners",
        price: 42,
        oldPrice: null,
        rating: 4.8,
        reviews: 192,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85",
        description: "Distilled organic Damask rose petals paired with alpine snow mushroom.",
    },
    {
        id: 3,
        name: "Centella Soothing Cream Gel",
        category: "Creams & Gels",
        price: 54,
        oldPrice: 64,
        rating: 4.9,
        reviews: 310,
        badge: "-15%",
        image:
            "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85",
        description: "Bio-fermented Asiatic pennywort to calm irritation and hydrate skin.",
    },
    {
        id: 4,
        name: "Golden Glow Marula Oil",
        category: "Face Elixirs",
        price: 76,
        oldPrice: null,
        rating: 5.0,
        reviews: 178,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=85",
        description: "Wild-harvested, non-comedogenic oil rich in omega 6 and 9.",
    },
    {
        id: 5,
        name: "Midnight Renewal Sleeping Mask",
        category: "Overnight Masks",
        price: 58,
        oldPrice: 68,
        rating: 4.8,
        reviews: 126,
        badge: "-15%",
        image:
            "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=700&q=85",
        description: "An overnight botanical treatment for softer, replenished skin.",
    },
    {
        id: 6,
        name: "Calendula Barrier Repair Balm",
        category: "Creams & Gels",
        price: 49,
        oldPrice: null,
        rating: 4.7,
        reviews: 94,
        badge: "New",
        image:
            "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85",
        description: "A nourishing botanical balm that supports the skin moisture barrier.",
    },
    {
        id: 7,
        name: "Neroli Botanical Body Oil",
        category: "Aromatics & Body",
        price: 62,
        oldPrice: null,
        rating: 4.9,
        reviews: 154,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
        description: "A silky body oil infused with delicate neroli and plant oils.",
    },
    {
        id: 8,
        name: "Alpine Hydration Toner",
        category: "Hydrating Toners",
        price: 38,
        oldPrice: 45,
        rating: 4.6,
        reviews: 87,
        badge: "-15%",
        image:
            "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=85",
        description: "A refreshing daily toner formulated to replenish skin moisture.",
    },
    {
        id: 9,
        name: "Velvet Rose Night Treatment",
        category: "Overnight Masks",
        price: 72,
        oldPrice: null,
        rating: 4.9,
        reviews: 205,
        badge: "Popular",
        image:
            "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85",
        description: "A rich night treatment for a rested, supple-looking complexion.",
    },
    {
        id: 10,
        name: "Pure Bakuchiol Face Elixir",
        category: "Face Elixirs",
        price: 84,
        oldPrice: 96,
        rating: 5.0,
        reviews: 163,
        badge: "-12%",
        image:
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=85",
        description: "A lightweight botanical elixir for a smoother-looking complexion.",
    },
    {
        id: 11,
        name: "Botanical Hand & Body Cream",
        category: "Aromatics & Body",
        price: 36,
        oldPrice: null,
        rating: 4.7,
        reviews: 112,
        badge: "New",
        image:
            "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=700&q=85",
        description: "A comforting cream made for everyday hand and body nourishment.",
    },
    {
        id: 12,
        name: "Calming Aromatic Bath Ritual",
        category: "Aromatics & Body",
        price: 45,
        oldPrice: null,
        rating: 4.8,
        reviews: 138,
        badge: "Popular",
        image:
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
        description: "A botanical-inspired bathing ritual for a peaceful evening.",
    },
];

const PRODUCTS_PER_PAGE = 8;

export default function ProductsPage() {
    const [category, setCategory] = useState("All Products");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("featured");
    const [page, setPage] = useState(1);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [mobileFilters, setMobileFilters] = useState(false);
    const [notice, setNotice] = useState("");

    const filteredProducts = useMemo(() => {
        let result = products.filter((product) => {
            const matchesCategory =
                category === "All Products" || product.category === category;

            const matchesSearch =
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.category.toLowerCase().includes(search.toLowerCase());

            return matchesCategory && matchesSearch;
        });

        if (sort === "price-low") {
            result.sort((a, b) => a.price - b.price);
        } else if (sort === "price-high") {
            result.sort((a, b) => b.price - a.price);
        } else if (sort === "rating") {
            result.sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [category, search, sort]);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE)
    );

    const currentPage = Math.min(page, totalPages);

    const visibleProducts = filteredProducts.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    function selectCategory(name) {
        setCategory(name);
        setPage(1);
        setMobileFilters(false);
    }

    function toggleWishlist(id) {
        setWishlist((previous) =>
            previous.includes(id)
                ? previous.filter((item) => item !== id)
                : [...previous, id]
        );
    }

    function addToCart(product) {
        setCart((previous) => [...previous, product]);
        setNotice(`${product.name} added to your bag.`);
        window.setTimeout(() => setNotice(""), 2500);
    }

    function changePage(nextPage) {
        setPage(nextPage);
        document
            .getElementById("product-list")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <main className="min-h-screen bg-[#faf9f7] text-[#063a2a]">
            {/* Announcement bar */}
            <div className="bg-[#153f30] px-4 py-2.5 text-center text-[10px] tracking-[1.2px] text-white sm:text-xs">
                COMPLIMENTARY SHIPPING ON DOMESTIC ORDERS OVER $75
            </div>

            {/* Page header */}
            {/* <header className="border-b border-[#e7e6e2] bg-[#faf9f7]">
                <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12">
                    <Link
                        href="/"
                        className="font-serif text-2xl font-medium tracking-tight sm:text-3xl"
                    >
                        AURA
                        <span className="ml-2 text-[9px] font-sans font-medium uppercase tracking-[2px] text-[#727872] sm:text-[10px]">
                            Living & Wellness
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-8 text-xs font-medium text-[#454b46] lg:flex">
                        <Link href="/" className="transition hover:text-[#a16a29]">
                            Home
                        </Link>
                        <Link
                            href="/products"
                            className="border-b border-[#063a2a] pb-1 text-[#063a2a]"
                        >
                            Shop All
                        </Link>
                        <a href="/products" className="transition hover:text-[#a16a29]">
                            Our Practice
                        </a>
                        <a href="/products" className="transition hover:text-[#a16a29]">
                            Sustainability
                        </a>
                    </nav>

                    <div className="flex items-center gap-3">
                        <label className="hidden h-10 items-center gap-2 rounded-full border border-[#e1e1dc] bg-white px-3 md:flex">
                            <Search size={15} className="text-[#747b74]" />
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                }}
                                placeholder="Search products"
                                className="w-28 bg-transparent text-xs outline-none placeholder:text-[#969b95] lg:w-36"
                            />
                        </label>

                        <button
                            type="button"
                            aria-label="Shopping bag"
                            onClick={() =>
                                setNotice(
                                    cart.length
                                        ? `Your bag contains ${cart.length} item(s).`
                                        : "Your shopping bag is empty."
                                )
                            }
                            className="btn btn-circle btn-ghost btn-sm relative"
                        >
                            <ShoppingBag size={19} />
                            {cart.length > 0 && (
                                <span className="absolute -right-0.5 -top-0.5 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-[#1b4535] px-1 text-[9px] text-white">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </header> */}

            {/* Hero */}
            {/* <section className="mx-auto max-w-[1500px] px-5 pb-9 pt-12 text-center sm:px-8 sm:pb-12 sm:pt-16 lg:px-12 lg:pt-[76px]">
                <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#986020]">
                    Thoughtfully made. Naturally effective.
                </p>

                <h1 className="mt-4 font-serif text-4xl tracking-[-1.5px] sm:text-5xl lg:text-[60px]">
                    The Botanical Collection
                </h1>

                <p className="mx-auto mt-4 max-w-[590px] text-sm leading-7 text-[#555b56] sm:text-base">
                    Discover conscious skincare crafted with botanical ingredients,
                    clinical care, and a deep respect for nature.
                </p>

                <div className="mt-6 flex items-center justify-center gap-5 text-[10px] uppercase tracking-[1px] text-[#59635b]">
                    <span className="flex items-center gap-1.5">
                        <Leaf size={14} />
                        Clean Formulations
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#b58b58]" />
                    <span>Consciously Crafted</span>
                </div>
            </section> */}

            {/* Product listing */}
            <section
                id="product-list"
                className="mx-auto max-w-[1500px] scroll-mt-5 px-5 pb-20 sm:px-8 lg:px-12"
            >
                {/* Toolbar */}
                <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-y border-[#e5e5e0] py-4">
                    <div className="flex items-center gap-3">
                        <p className="text-sm text-[#454b46]">
                            <span className="font-semibold text-[#063a2a]">
                                {filteredProducts.length}
                            </span>{" "}
                            products
                        </p>

                        <button
                            type="button"
                            onClick={() => setMobileFilters((prev) => !prev)}
                            className="btn btn-sm rounded-full border-[#deded8] bg-white text-xs font-medium text-[#063a2a] lg:hidden"
                        >
                            {mobileFilters ? <X size={15} /> : <SlidersHorizontal size={15} />}
                            Categories
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <label className="flex h-9 items-center gap-2 rounded-lg border border-[#e2e2dc] bg-white px-3 md:hidden">
                            <Search size={15} className="text-[#737b74]" />
                            <input
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                }}
                                placeholder="Search..."
                                className="w-28 bg-transparent text-xs outline-none"
                            />
                        </label>

                        <label className="flex items-center gap-2 text-xs text-[#555b56]">
                            <span className="hidden sm:inline">Sort by</span>
                            <select
                                value={sort}
                                onChange={(e) => {
                                    setSort(e.target.value);
                                    setPage(1);
                                }}
                                className="select select-bordered select-sm w-[145px] rounded-lg border-[#e2e2dc] bg-white text-xs text-[#063a2a] focus:outline-none"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                    {/* Category sidebar */}
                    <aside
                        className={`${mobileFilters ? "block" : "hidden"
                            } lg:sticky lg:top-6 lg:block lg:self-start`}
                    >
                        <div className="rounded-xl border border-[#e6e5df] bg-white p-5">
                            <h2 className="mb-5 font-serif text-xl">Shop by Category</h2>

                            <ul className="menu menu-sm -mx-2 gap-1 p-0">
                                {categories.map((item) => {
                                    const active = category === item.name;

                                    return (
                                        <li key={item.name}>
                                            <button
                                                type="button"
                                                onClick={() => selectCategory(item.name)}
                                                className={`flex justify-between rounded-lg px-3 py-3 text-left text-xs ${active
                                                        ? "bg-[#eaf0eb] font-semibold text-[#063a2a]"
                                                        : "text-[#555b56] hover:bg-[#f7f6f2]"
                                                    }`}
                                            >
                                                <span>{item.name}</span>
                                                <span className="text-[10px] text-[#838981]">
                                                    {item.count}
                                                </span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="mt-7 border-t border-[#ecece7] pt-5">
                                <p className="font-serif text-lg">The AURA Promise</p>
                                <p className="mt-2 text-xs leading-6 text-[#626961]">
                                    Thoughtful ingredients, responsible packaging, and skincare
                                    rituals inspired by nature.
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.7px] text-[#063a2a]">
                                    <Leaf size={15} />
                                    Conscious beauty
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product grid and pagination */}
                    <div className="min-w-0">
                        {category !== "All Products" && (
                            <div className="mb-5 flex items-center gap-2">
                                <span className="text-xs text-[#727872]">Category:</span>
                                <span className="badge rounded-full border-0 bg-[#eaf0eb] px-3 py-3 text-xs text-[#063a2a]">
                                    {category}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => selectCategory("All Products")}
                                    className="text-xs text-[#8c5118] underline underline-offset-2"
                                >
                                    Clear
                                </button>
                            </div>
                        )}

                        {visibleProducts.length > 0 ? (
                            <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
                                {visibleProducts.map((product) => (
                                    <article
                                        key={product.id}
                                        className="group flex min-w-0 flex-col overflow-hidden rounded-[13px] border border-[#e3e3df] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(20,40,30,0.07)]"
                                    >
                                        {/* Product image */}
                                        <div className="relative m-3 mb-0 overflow-hidden rounded-[10px] bg-[#f0eee8]">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                loading="lazy"
                                                className="aspect-[4/4.7] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                                            />

                                            {product.badge && (
                                                <span
                                                    className={`badge absolute left-3 top-3 h-auto border-0 px-3 py-2 text-[9px] font-semibold ${product.badge.includes("%")
                                                            ? "bg-[#ffc77e] text-[#69421b]"
                                                            : "bg-[#e5e9e4] text-[#063a2a]"
                                                        }`}
                                                >
                                                    {product.badge}
                                                </span>
                                            )}

                                            <button
                                                type="button"
                                                onClick={() => toggleWishlist(product.id)}
                                                aria-label={
                                                    wishlist.includes(product.id)
                                                        ? "Remove from wishlist"
                                                        : "Add to wishlist"
                                                }
                                                className="btn btn-circle btn-sm absolute right-3 top-3 border-0 bg-[#faf9f5]/95 text-[#677068] shadow-none hover:bg-white"
                                            >
                                                <Heart
                                                    size={17}
                                                    className={
                                                        wishlist.includes(product.id)
                                                            ? "fill-[#a44840] text-[#a44840]"
                                                            : ""
                                                    }
                                                />
                                            </button>
                                        </div>

                                        {/* Product details */}
                                        <div className="flex flex-1 flex-col px-3 pb-3 pt-4 sm:px-4">
                                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                                <div className="flex items-center gap-0.5 text-[#94601d]">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star
                                                            key={star}
                                                            size={12}
                                                            className="fill-current"
                                                        />
                                                    ))}
                                                </div>

                                                <span className="text-[10px] text-[#444b45]">
                                                    {product.rating.toFixed(1)} ({product.reviews})
                                                </span>
                                            </div>

                                            <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.9px] text-[#8c6a43]">
                                                {product.category}
                                            </p>

                                            <h3 className="mt-1 font-serif text-lg leading-snug text-[#063a2a]">
                                                {product.name}
                                            </h3>

                                            <p className="mt-2 line-clamp-2 min-h-[40px] text-[11px] leading-[1.7] text-[#626961]">
                                                {product.description}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#ededea] pt-3">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="text-sm font-bold text-[#063a2a]">
                                                        ${product.price}
                                                    </span>
                                                    {product.oldPrice && (
                                                        <span className="text-xs text-[#8b918a] line-through">
                                                            ${product.oldPrice}
                                                        </span>
                                                    )}
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => addToCart(product)}
                                                    className="btn btn-sm h-8 min-h-8 rounded-full border-0 bg-[#1b4535] px-3 text-[10px] font-medium normal-case text-white hover:bg-[#103526]"
                                                >
                                                    <ShoppingBag size={13} />
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-dashed border-[#d9dcd5] bg-white px-5 py-20 text-center">
                                <Search className="mx-auto text-[#879086]" size={30} />
                                <h3 className="mt-4 font-serif text-2xl">
                                    No products found
                                </h3>
                                <p className="mt-2 text-sm text-[#6b726b]">
                                    Try another search or explore all our botanical products.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSearch("");
                                        selectCategory("All Products");
                                    }}
                                    className="btn mt-5 rounded-full border-0 bg-[#1b4535] text-white hover:bg-[#103526]"
                                >
                                    View all products
                                </button>
                            </div>
                        )}

                        {/* Pagination */}
                        {filteredProducts.length > 0 && (
                            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#e5e5e0] pt-6 sm:flex-row">
                                <p className="text-xs text-[#666d66]">
                                    Showing{" "}
                                    <span className="font-semibold text-[#063a2a]">
                                        {(currentPage - 1) * PRODUCTS_PER_PAGE + 1}
                                    </span>
                                    {" – "}
                                    <span className="font-semibold text-[#063a2a]">
                                        {Math.min(
                                            currentPage * PRODUCTS_PER_PAGE,
                                            filteredProducts.length
                                        )}
                                    </span>{" "}
                                    of{" "}
                                    <span className="font-semibold text-[#063a2a]">
                                        {filteredProducts.length}
                                    </span>{" "}
                                    products
                                </p>

                                <div className="join">
                                    <button
                                        type="button"
                                        aria-label="Previous page"
                                        disabled={currentPage === 1}
                                        onClick={() => changePage(currentPage - 1)}
                                        className="btn btn-sm join-item border-[#e2e2dc] bg-white text-[#063a2a] hover:bg-[#eaf0eb] disabled:bg-[#f4f3f0]"
                                    >
                                        <ChevronLeft size={16} />
                                    </button>

                                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                                        (pageNumber) => (
                                            <button
                                                key={pageNumber}
                                                type="button"
                                                aria-label={`Page ${pageNumber}`}
                                                aria-current={
                                                    currentPage === pageNumber ? "page" : undefined
                                                }
                                                onClick={() => changePage(pageNumber)}
                                                className={`btn btn-sm join-item border-[#e2e2dc] ${currentPage === pageNumber
                                                        ? "bg-[#1b4535] text-white hover:bg-[#103526]"
                                                        : "bg-white text-[#063a2a] hover:bg-[#eaf0eb]"
                                                    }`}
                                            >
                                                {pageNumber}
                                            </button>
                                        )
                                    )}

                                    <button
                                        type="button"
                                        aria-label="Next page"
                                        disabled={currentPage === totalPages}
                                        onClick={() => changePage(currentPage + 1)}
                                        className="btn btn-sm join-item border-[#e2e2dc] bg-white text-[#063a2a] hover:bg-[#eaf0eb] disabled:bg-[#f4f3f0]"
                                    >
                                        <ChevronRight size={16} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="bg-[#e9eee8] px-5 py-14 text-center sm:py-16">
                <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#8c602e]">
                    A little goodness in your inbox
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                    Make room for your ritual.
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#555e55]">
                    Discover botanical notes, skincare insights, and thoughtful offers
                    from AURA.
                </p>
                <Link
                    href="/"
                    className="btn mt-6 rounded-full border-0 bg-[#1b4535] px-7 text-xs font-medium normal-case text-white hover:bg-[#103526]"
                >
                    Explore AURA
                </Link>
            </section>

            {/* Toast */}
            {notice && (
                <div
                    role="status"
                    className="toast toast-end toast-bottom z-50"
                >
                    <div className="alert border border-[#d9e2d8] bg-white text-[#063a2a] shadow-lg">
                        <span className="text-sm">{notice}</span>
                        <button
                            type="button"
                            aria-label="Dismiss notification"
                            onClick={() => setNotice("")}
                            className="btn btn-ghost btn-xs btn-circle"
                        >
                            <X size={14} />
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
