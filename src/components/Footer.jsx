
import { Leaf, Globe2 } from "lucide-react";

const footerColumns = [
  {
    title: "STOREFRONT",
    links: [
      "Face Elixirs",
      "Hydrating Toners",
      "Overnight Masks",
      "Aromatics & Body",
      "Gift Ritual Sets",
    ],
  },
  {
    title: "OUR PRACTICE",
    links: [
      "Botanical Sourcing",
      "Clinical Studies",
      "Sustainability Report",
      "Skin Concierge",
      "Press & Inquiries",
    ],
  },
  {
    title: "GOVERNANCE",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Shipping & Returns",
      "Sustainability Report",
      "Press & Inquiries",
    ],
  },
];

const payments = [
  { name: "Visa", color: "text-[#454b49]" },
  { name: "Mastercard", color: "text-[#454b49]" },
  { name: "bKash", color: "text-[#e2136e]" },
  { name: "Nagad", color: "text-[#f15a24]" },
  { name: "Apple Pay", color: "text-[#454b49]" },
  { name: "Cash on Delivery", color: "text-[#063a2a]" },
];

export default function Footer() {
  return (
    <footer className="border-x border-t border-[#dedfdd] bg-[#f6f5f3] px-5 pb-8 pt-14 sm:px-8 lg:px-[3.9%] lg:pb-12 lg:pt-[85px]">
      <div className="mx-auto max-w-[1876px]">

        {/* Top footer */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.9fr_0.85fr_0.85fr_0.85fr] lg:gap-10 lg:pb-14">

          {/* Brand section */}
          <div>
            <h2 className="mb-5 font-serif text-[32px] font-medium leading-tight tracking-[-1.2px] text-[#063a2a] sm:text-[38px] lg:whitespace-nowrap lg:text-[48px]">
              AURA Living & Wellness
            </h2>

            <p className="max-w-[600px] text-[14px] leading-[1.65] text-[#484e4a] sm:text-[16px]">
              Ethical formulations, organic agriculture, and clinical
              self-care rituals designed to harmonize mind, body, and habitat.
            </p>

            {/* Sustainability badges */}
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="badge h-auto gap-2 rounded-full border-0 bg-[#e9e7e7] px-4 py-2 text-[12px] font-bold tracking-[0.5px] text-[#063a2a] sm:text-[13px]">
                <Leaf size={15} />
                100% Biodegradable
              </span>

              <span className="badge h-auto gap-2 rounded-full border-0 bg-[#e9e7e7] px-4 py-2 text-[12px] font-bold tracking-[0.5px] text-[#063a2a] sm:text-[13px]">
                <Globe2 size={15} />
                Carbon Neutral
              </span>
            </div>
          </div>

          {/* Navigation columns */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-5 text-[14px] font-bold tracking-[0.8px] text-[#063a2a] sm:text-[15px]">
                {column.title}
              </h3>

              <ul className="flex flex-col gap-4">
                {column.links.map((link, index) => (
                  <li key={`${link}-${index}`}>
                   <a
  href="#"
  className="text-[14px] leading-6 text-[#484e4a] transition-colors duration-200 hover:text-[#063a2a] sm:text-[16px]"
>
  {link}
</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#dedfdd]" />

        {/* Bottom footer */}
        <div className="flex flex-col gap-6 pt-7 lg:flex-row lg:items-start lg:justify-between lg:gap-8">

          {/* Payment methods */}
          <div className="flex max-w-[800px] flex-wrap items-center gap-2.5">
            <span className="mr-1 text-[11px] font-bold tracking-[0.7px] text-[#484e4a] sm:text-[12px]">
              Supported Secure Checkout:
            </span>

            {payments.map((payment) => (
              <span
                key={payment.name}
                className={`badge h-auto rounded-md border-0 bg-[#e5e3e3] px-3 py-2 text-[11px] font-bold tracking-[0.4px] sm:text-[12px] ${payment.color}`}
              >
                {payment.name}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="max-w-[800px] text-[13px] leading-[1.6] text-[#484e4a] sm:text-[15px] lg:text-right">
            © 2024 AURA Living & Wellness Inc. All rights reserved.
            Clean formulations crafted with ethical intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
