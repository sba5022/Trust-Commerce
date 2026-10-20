"use client";

import Link from "next/link";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { TbLeaf } from "react-icons/tb";
import { useState } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
   const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header className="w-full border-b border-[#e8e7e3] bg-[#fdfcf9]">
      {/* ================= DESKTOP / TABLET HEADER ================= */}
      <div className="mx-auto flex h-[78px] items-center gap-3 px-4 sm:px-6 lg:h-[108px] lg:px-10 xl:px-14">

        {/* LOGO */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 text-[#173f32]"
        >
          <TbLeaf className="text-[27px] sm:text-[30px]" />

          <span className="font-serif text-[23px] font-semibold tracking-[-1.2px] sm:text-[26px] lg:text-[29px]">
            AURA
          </span>

          <span className="hidden font-serif text-[25px] font-medium tracking-[-1.2px] sm:inline lg:text-[29px]">
            Living & Wellness
          </span>
        </Link>

       <nav className="ml-6 hidden h-full items-center gap-6 lg:flex xl:ml-8 xl:gap-9">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      aria-current={isActive(link.href) ? "page" : undefined}
      className={`relative flex h-full items-center text-[17px] font-medium transition-colors duration-200 xl:text-[18px] ${
        isActive(link.href)
          ? "text-[#173f32]"
          : "text-[#5c625f] hover:text-[#173f32]"
      }`}
    >
      {link.name}

      <span
        className={`absolute bottom-[30px] left-0 h-[2px] w-full bg-[#164536] transition-all duration-300 ${
          isActive(link.href)
            ? "scale-x-100 opacity-100"
            : "scale-x-0 opacity-0"
        }`}
      />
    </Link>
  ))}
</nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="ml-auto flex items-center gap-3 sm:gap-4 lg:gap-5 xl:gap-7">

          {/* SEARCH - desktop only */}
          <div className="hidden h-[44px] w-[220px] items-center rounded-full border border-[#dededb] bg-white px-4 xl:flex xl:w-[276px]">
            <FiSearch className="mr-3 shrink-0 text-[20px] text-[#737875]" />

            <input
              type="text"
              placeholder="Search organic elixirs..."
              className="w-full bg-transparent text-[15px] text-[#333] outline-none placeholder:text-[#858985]"
            />
          </div>

          {/* SEARCH ICON - tablet */}
          <button className="hidden items-center justify-center lg:flex xl:hidden">
            <FiSearch className="text-[23px] text-[#34433d]" />
          </button>

          {/* WISHLIST */}
          <button className="relative flex items-center justify-center">
            <FiHeart className="text-[22px] text-[#34433d] sm:text-[24px]" />

            <span className="absolute -right-[8px] -top-[9px] flex h-[19px] min-w-[19px] items-center justify-center rounded-full bg-[#986021] px-1 text-[10px] font-semibold text-white">
              3
            </span>
          </button>

          {/* CART */}
          <button className="flex h-[44px] items-center gap-2 rounded-full border border-[#dfdfdc] bg-[#f2f2ef] px-3 sm:h-[50px] sm:px-4 lg:h-[54px] lg:px-5">
            <div className="relative">
              <FiShoppingBag className="text-[21px] text-[#34433d] sm:text-[24px]" />

              <span className="absolute -right-[8px] -top-[8px] flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#244d3e] px-1 text-[10px] font-bold text-white">
                2
              </span>
            </div>

            <span className="text-[15px] font-semibold text-[#303632] sm:text-[16px] lg:text-[17px]">
              $148
            </span>
          </button>

          {/* PROFILE - desktop/tablet */}
          {/* <button className="hidden h-[44px] w-[44px] items-center justify-center rounded-full border border-[#e1e1de] bg-[#fafaf8] sm:flex lg:h-[48px] lg:w-[48px]">
            <FiUser className="text-[21px] text-[#53605a] lg:text-[23px]" />
          </button> */}
          <div className="dropdown dropdown-end hidden sm:block">
  <button
    tabIndex={0}
    role="button"
    aria-label="Account menu"
    className="flex h-[44px] w-[44px] items-center justify-center rounded-full border border-[#e1e1de] bg-[#fafaf8] transition hover:border-[#1b4535] hover:bg-[#f0f3ef] lg:h-[48px] lg:w-[48px]"
  >
    <FiUser className="text-[21px] text-[#53605a] lg:text-[23px]" />
  </button>

  <ul
    tabIndex={0}
    className="dropdown-content menu z-[100] mt-3 w-52 rounded-xl border border-[#e5e5e1] bg-white p-2 shadow-lg"
  >
    <li>
      <Link
        href="/login"
        className="rounded-lg px-4 py-3 text-sm font-medium text-[#063a2a] hover:bg-[#f1f4f1]"
      >
        Sign In
      </Link>
    </li>

    <li>
      <Link
        href="/signup"
        className="rounded-lg px-4 py-3 text-sm font-medium text-[#063a2a] hover:bg-[#f1f4f1]"
      >
        Dashboard
      </Link>
    </li>
  </ul>
</div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#e1e1de] bg-[#fafaf8] lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="text-[22px] text-[#34433d]" />
            ) : (
              <FiMenu className="text-[22px] text-[#34433d]" />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="border-t border-[#e8e7e3] bg-[#fdfcf9] px-5 py-5 lg:hidden">

          {/* Mobile Search */}
          <div className="mb-5 flex h-[46px] w-full items-center rounded-full border border-[#dededb] bg-white px-4">
            <FiSearch className="mr-3 text-[20px] text-[#737875]" />

            <input
              type="text"
              placeholder="Search organic elixirs..."
              className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#858985]"
            />
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#e8e7e3] py-4 font-medium text-[#173f32]"
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#e8e7e3] py-4 text-[#5c625f]"
            >
              Shop
            </Link>

            <Link
              href="/categories"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#e8e7e3] py-4 text-[#5c625f]"
            >
              Categories
            </Link>

            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[#e8e7e3] py-4 text-[#5c625f]"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="py-4 text-[#5c625f]"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Profile */}
          <button className="mt-4 flex w-full items-center gap-3 rounded-xl border border-[#e1e1de] bg-white px-4 py-3">
            <FiUser className="text-[21px] text-[#53605a]" />
            <span className="text-sm font-medium text-[#34433d]">
              My Account
            </span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;