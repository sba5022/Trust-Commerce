
"use client";

import { motion } from "framer-motion";

const CheckIcon = () => (
    <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);

const LeafIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M11 20A7 7 0 0 1 4 13V4h9a7 7 0 0 1 7 7c0 5-4 9-9 9Z" />
        <path d="M8 8c2 3 5 6 9 7" />
    </svg>
);

const BunnyIcon = () => (
    <svg
        width="21"
        height="21"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M8 11 5 3c-.5-1.5-2.5-1-2 1l2 9" />
        <path d="m16 11 3-8c.5-1.5 2.5-1 2 1l-2 9" />
        <ellipse cx="12" cy="14" rx="7" ry="8" />
        <circle cx="9.5" cy="13" r=".7" fill="currentColor" />
        <circle cx="14.5" cy="13" r=".7" fill="currentColor" />
        <path d="M11 16h2l-1 1.5Z" />
        <path d="M9 20c1.8 1 4.2 1 6 0" />
    </svg>
);

const ArrowIcon = () => (
    <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

const benefits = [
    {
        icon: CheckIcon,
        lines: ["Dermatologist", "Tested"],
    },
    {
        icon: LeafIcon,
        lines: ["100% Vegan Purity"],
    },
    {
        icon: BunnyIcon,
        lines: ["Leaping Bunny", "Certified"],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Hero() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#FAF9F7] text-[#073B2B]">
            <section className="mx-auto grid min-h-[690px] w-full max-w-[1800px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 md:px-10 lg:grid-cols-[1.2fr_0.85fr] lg:gap-14 lg:px-[4vw] lg:py-16 xl:gap-[7.7vw] xl:py-[72px]">

                {/* Left content */}
                <motion.div
                    className="w-full max-w-[670px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Eyebrow */}
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex min-h-7 items-center gap-2.5 rounded-full border border-[#D9DCD6] bg-[#F0F0ED] px-3.5 py-1.5 text-[10px] font-bold tracking-[1.2px] text-[#183D2E]"
                    >
                        <LeafIcon />
                        <span>100% RAW BIOACTIVE FORMULATIONS</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        variants={fadeUp}
                        className="mt-7 mb-6 flex flex-col font-serif text-[clamp(42px,5vw,60px)] font-normal leading-[1.12] tracking-[-2px] text-[#073B2B] lg:mt-[39px] lg:mb-7"
                    >
                        <span>Nourish Your</span>
                        <span className="whitespace-normal italic">
                            Natural Radiance
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeUp}
                        className="max-w-[610px] text-[15px] leading-[1.75] tracking-[0.05px] text-[#4C514E] md:text-base lg:text-[18px] lg:leading-[1.7]"
                    >
                        Cold-pressed botanical elixirs and clean organic
                        rituals, formulated with sustainably harvested active
                        ingredients designed to restore balance and luminous
                        skin barrier harmony.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-[41px]"
                    >
                        <motion.a
                            href="#collection"
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn h-[50px] min-h-[50px] rounded-full border border-[#1C4836] bg-[#1C4836] px-6 text-sm font-semibold normal-case text-white shadow-none transition-colors hover:border-[#073B2B] hover:bg-[#073B2B] hover:text-white"
                        >
                            Shop Botanical Collection
                            <ArrowIcon />
                        </motion.a>

                        <motion.a
                            href="#story"
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn h-[50px] min-h-[50px] rounded-full border border-[#073B2B] bg-transparent px-6 text-sm font-semibold normal-case text-[#073B2B] shadow-none transition-colors hover:bg-[#073B2B] hover:text-white"
                        >
                            Explore Our Story
                        </motion.a>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-7 grid grid-cols-3 items-center gap-2 border-t border-[#E8E5DF] pt-5 sm:gap-4 lg:mt-[33px] lg:gap-[18px] lg:pt-[25px]"
                    >
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.8 + index * 0.12,
                                        duration: 0.5,
                                    }}
                                    className="flex min-w-0 items-center gap-1.5 text-[#151A17] sm:gap-2.5 lg:gap-3"
                                >
                                    <span className="shrink-0 text-[#1C4836]">
                                        <Icon />
                                    </span>

                                    <span className="flex flex-col text-[9px] leading-[1.5] tracking-[0.2px] sm:text-[11px] lg:text-xs">
                                        {benefit.lines.map((line) => (
                                            <span key={line}>{line}</span>
                                        ))}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* Right product image */}
                <motion.div
                    initial={{ opacity: 0, x: 36 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full min-w-0"
                >
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.35 }}
                        className="relative aspect-[0.91] w-full overflow-hidden rounded-[17px] bg-[#E9E3D8] shadow-[0_15px_35px_rgba(47,44,31,0.12)] sm:aspect-[1.05] lg:aspect-[0.91]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1200&q=90"
                            alt="Botanical skincare products arranged in natural light"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />

                        {/* Floating product card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.65 }}
                            className="absolute right-[4.5%] bottom-[4.5%] left-[4.5%] flex min-h-[78px] items-center justify-between gap-3 rounded-xl border border-[#E6E1D7]/80 bg-[#FFFEFB]/[0.97] px-3.5 py-3.5 shadow-[0_5px_18px_rgba(30,30,20,0.09)] sm:px-4"
                        >
                            <div className="min-w-0">
                                <span className="mb-1 block text-[9px] font-bold tracking-[0.65px] text-[#9C6E3E] sm:text-[10px]">
                                    LIMITED SPRING HARVEST
                                </span>

                                <h2 className="font-serif text-[15px] font-semibold leading-tight text-[#073B2B] sm:text-lg xl:text-[21px]">
                                    Prickly Pear &amp; Neroli Elixir
                                </h2>
                            </div>

                            <span className="shrink-0 text-sm font-bold text-[#073B2B] sm:text-[15px]">
                                $94
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}
