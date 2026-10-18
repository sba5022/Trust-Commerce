
"use client";

const ArrowRight = () => (
    <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
    </svg>
);

const ArrowUpRight = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
    </svg>
);

const categories = [
    {
        title: "Face Oils & Serums",
        subtitle: "12 Essential Blends",
        image:
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
        alt: "Botanical face serum and natural ingredients",
        href: "/collections/face-oils-serums",
    },
    {
        title: "Hydrating Cleansers",
        subtitle: "6 Gentle Washes",
        image:
            "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85",
        alt: "Clean skincare and hydrating products",
        href: "/collections/cleansers",
    },
    {
        title: "Restorative Night Masks",
        subtitle: "4 Deep Treatments",
        image:
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
        alt: "Restorative skincare treatment",
        href: "/collections/night-masks",
    },
    {
        title: "Body & Wellness",
        subtitle: "8 Bath & Body Elixirs",
        image:
            "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85",
        alt: "Natural body care and wellness products",
        href: "/collections/body-wellness",
    },
];

export default function SkincareCategories() {
    return (
        <section
            id="collection"
            className="min-h-screen bg-[#F8F6F4] px-5 py-16 text-[#073B2B] sm:px-8 sm:py-20 lg:px-[3.55%] lg:py-[104px]"
        >
            <div className="mx-auto w-full max-w-[1600px]">
                {/* Section heading */}
                <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between lg:mb-[48px]">
                    <div>
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#96602E]">
                            Mindful Curations
                        </p>

                        <h2 className="font-serif text-[34px] font-medium leading-tight tracking-[-1.1px] sm:text-[40px] lg:text-[42px]">
                            Holistic Skincare Categories
                        </h2>
                    </div>

                    <a
                        href="/collections"
                        className="group inline-flex w-fit items-center gap-2 pb-1 text-[14px] font-semibold text-[#073B2B] transition-colors hover:text-[#96602E]"
                    >
                        Explore All 24 Formulations

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            <ArrowRight />
                        </span>
                    </a>
                </div>

                {/* Category cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {categories.map((category) => (
                        <a
                            key={category.title}
                            href={category.href}
                            className="group card overflow-hidden rounded-[17px] border border-[#E8E6E2] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(29,54,41,0.09)]"
                        >
                            {/* Image */}
                            <figure className="aspect-[1.08/1] overflow-hidden rounded-none bg-[#EAE5DC]">
                                <img
                                    src={category.image}
                                    alt={category.alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />
                            </figure>

                            {/* Card content */}
                            <div className="flex min-h-[96px] items-center justify-between gap-3 px-5 py-4">
                                <div className="min-w-0">
                                    <h3 className="font-serif text-[20px] font-semibold leading-[1.35] tracking-[-0.35px] text-[#073B2B] sm:text-[21px]">
                                        {category.title}
                                    </h3>

                                    <p className="mt-1 text-[13px] leading-tight text-[#515651]">
                                        {category.subtitle}
                                    </p>
                                </div>

                                <span className="shrink-0 text-[#BEC9C0] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#073B2B]">
                                    <ArrowUpRight />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
