import HeroSection from "@/components/client/HeroSection";
import MainContent from "@/components/client/MainContent";
import CompanySection from "@/components/client/CompanySection";
import KnowMoreSection from "@/components/client/KnowMoreSection";
import TrustedSection from "@/components/client/TrustedSection";
import Footer from "@/components/client/Footer";

import { employee } from "@/data/employee";
import { company } from "@/data/company";

function BusinessCard() {
  return (
    <main className="bg-[#FAF9FF] text-slate-900">

      <HeroSection
        employee={employee}
        company={company}
      />

      <MainContent employee={employee} />

      <CompanySection company={company} />

      <KnowMoreSection />

      <TrustedSection />

      <Footer />

    </main>
  );
}

export default BusinessCard;

