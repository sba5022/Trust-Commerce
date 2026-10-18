
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Restorative Botanical Face Serum",
    description:
      "Cold-pressed Bakuchiol and organic Sea Buckthorn for collagen density.",
    image: "/products/face-serum.jpg",
    rating: "4.9",
    reviews: 248,
    price: 68,
    oldPrice: 80,
    badge: "Bestseller",
    discount: "-15%",
  },
  {
    id: 2,
    name: "Dewy Rosewater Essence Mist",
    description:
      "Distilled organic Damascus rose petals paired with alpine snow mushroom.",
    image: "/products/rosewater-mist.jpg",
    rating: "4.8",
    reviews: 192,
    price: 42,
    badge: "Bestseller",
  },
  {
    id: 3,
    name: "Centella Soothing Cream Gel",
    description:
      "Bio-fermented Asiatic pennywort to immediately calm irritation and redness.",
    image: "/products/centella-gel.jpg",
    rating: "4.9",
    reviews: 310,
    price: 54,
    oldPrice: 64,
    discount: "-15%",
  },
  {
    id: 4,
    name: "Golden Glow Marula Oil",
    description:
      "Wild-harvested, non-comedogenic oil rich in omegas 6 and 9 for lit-from-within glow.",
    image: "/products/marula-oil.jpg",
    rating: "5.0",
    reviews: 178,
    price: 76,
    badge: "Bestseller",
  },
];

export default function BestSellers() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const addToCart = (id) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <main className="min-h-screen bg-[#fbfaf9] px-5 py-16 text-[#073b2b] sm:px-8 lg:px-[3.9%] lg:pb-[102px] lg:pt-[118px]">
      <section className="mx-auto max-w-[1244px]">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-[50px] max-w-[760px] text-center"
        >
          <p className="mb-[19px] text-[10px] font-semibold uppercase tracking-[1.35px] text-[#895018]">
            Award-winning clean formulations
          </p>

          <h1 className="mb-[13px] font-serif text-[38px] font-semibold leading-[1.12] tracking-[-1.1px] text-[#063a2a] sm:text-[42px]">
            Best Sellers Collection
          </h1>

          <p className="mx-auto max-w-[710px] text-[15px] leading-[1.65] text-[#4d514e] sm:text-base">
            Rooted in clinical botany and time-tested Ayurvedic principles.
            Every blend is batch-numbered and third-party certified.
          </p>
        </motion.header>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[33px]">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -4 }}
              className="card flex min-w-0 flex-col overflow-hidden rounded-[17px] border border-[#e1e2df] bg-white p-[17px] shadow-sm"
            >
              {/* Image */}
              <div className="relative aspect-[250/313] overflow-hidden rounded-[13px] bg-[#f1eee7]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />

                {product.badge && (
                  <span className="badge absolute left-3 top-[13px] h-auto rounded-full border-0 bg-[#e0e6df]/95 px-[11px] py-1 text-[10px] font-bold text-[#183b2d]">
                    {product.badge}
                  </span>
                )}

                {product.discount && (
                  <span className="badge absolute left-3 top-[38px] h-auto min-w-[74px] rounded-full border-0 bg-[#ffc77d] px-[11px] py-1 text-[10px] text-[#75430e]">
                    {product.discount}
                  </span>
                )}

                <button
                  type="button"
                  aria-label="Toggle favorite"
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute right-3 top-[13px] flex h-[42px] w-[38px] items-center justify-center rounded-full bg-[#fbfaf7] transition hover:scale-105 ${
                    favorites.includes(product.id)
                      ? "text-[#a74c43]"
                      : "text-[#727873]"
                  }`}
                >
                  <Heart
                    size={17}
                    fill={
                      favorites.includes(product.id)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col pt-[15px]">
                <div className="flex min-h-[17px] items-center gap-[9px] whitespace-nowrap">
                  <span className="text-[17px] leading-none tracking-[-1.1px] text-[#8c5418]">
                    ★★★★★
                  </span>
                  <span className="truncate text-[10px] tracking-[0.45px] text-[#444b46]">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <h2 className="mt-3 mb-[7px] line-clamp-2 min-h-[59px] font-serif text-[21px] font-semibold leading-[1.4] tracking-[-0.35px] text-[#063a2a]">
                  {product.name}
                </h2>

                <p className="line-clamp-2 min-h-[44px] text-[13px] leading-[1.62] text-[#4d514e]">
                  {product.description}
                </p>

                {/* Price and button */}
                <div className="mt-[9px] flex min-h-[51px] items-center justify-between gap-2 border-t border-[#ecece9] pt-3">
                  <div className="flex items-center gap-[10px] whitespace-nowrap">
                    <span className="text-[15px] font-bold text-[#063a2a]">
                      ${product.price}
                    </span>

                    {product.oldPrice && (
                      <span className="text-[13px] text-[#858b86] line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(product.id)}
                    className="btn btn-sm min-h-[34px] h-[34px] shrink-0 gap-[7px] rounded-full border-0 bg-[#1b4535] px-[15px] text-[11px] font-medium normal-case text-white shadow-none hover:bg-[#0e3325]"
                  >
                    <ShoppingBag size={13} strokeWidth={1.8} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {cart.length > 0 && (
          <p className="mt-5 text-right text-sm text-[#315d49]" role="status">
            {cart.length} {cart.length === 1 ? "item" : "items"} added to your cart
          </p>
        )}
      </section>
    </main>
  );
}
