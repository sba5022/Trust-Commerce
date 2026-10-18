import BenefitsSection from "@/components/BenefitsSection";
import BestSellers from "@/components/BestSellers";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SkincareCategories from "@/components/SkinCareCategories";
import Image from "next/image";

export default function Home() {
  return (
   <>
    <Hero/>
   <SkincareCategories/>
   <BestSellers/>
   <BenefitsSection/>
   <Footer/>
   </>
  
  );
}
