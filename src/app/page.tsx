"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import PublicSection from "@/components/PublicSection";
import NewsSection from "@/components/NewsSection";
import MembershipSection from "@/components/MembershipSection";
import Footer from "@/components/Footer";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <PublicSection />
        <NewsSection />
        <MembershipSection />
      </main>
      <Footer />
    </>
  );
}
