
"use client";

import { motion } from "framer-motion";
import {
  Truck,
  RefreshCw,
  Recycle,
  Headset,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Truck,
    title: "Free Express Delivery",
    description:
      "Complimentary insulated carbon-neutral transit on all domestic orders over $75.",
  },
  {
    id: 2,
    icon: RefreshCw,
    title: "30-Day Ritual Guarantee",
    description:
      "Experience skin transformation or receive a seamless full refund without hesitation.",
  },
  {
    id: 3,
    icon: Recycle,
    title: "Zero Plastic Packaging",
    description:
      "100% infinitely recyclable amber glass, FSC-certified boxes, and algae-ink labels.",
  },
  {
    id: 4,
    icon: Headset,
    title: "24/7 Skin Concierge",
    description:
      "Certified holistic estheticians ready to formulate your bespoke ritual anytime.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="min-h-screen bg-[#f6f5f3] px-5 py-16 sm:px-8 lg:px-[3.8%] lg:py-[104px]">
      <div className="mx-auto grid max-w-[1870px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[51px]">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <motion.article
              key={benefit.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="card min-h-[300px] rounded-[25px] border border-[#e2e5e2] bg-white px-[38px] py-[38px] shadow-none sm:min-h-[350px] lg:min-h-[382px] lg:px-[39px] lg:py-[38px]"
            >
              {/* Icon */}
              <div className="mb-[23px] flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#e7ecea] text-[#073b2b]">
                <Icon size={32} strokeWidth={2} />
              </div>

              {/* Heading */}
              <h2 className="mb-[19px] font-serif text-[27px] font-semibold leading-[1.35] tracking-[-0.5px] text-[#063a2a] sm:text-[29px]">
                {benefit.title}
              </h2>

              {/* Description */}
              <p className="text-[17px] leading-[1.6] tracking-[0.05px] text-[#484e4a] sm:text-[18px]">
                {benefit.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
