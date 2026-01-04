import CompanyOverview from "@/components/CompanyOverview";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/hero";
import OfficeAndCertificates from "@/components/OfficeAndCertificates";

export default function Home() {
  return (
    <div className="min-h-[150vh] bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <CompanyOverview />
      <OfficeAndCertificates />
      <ContactUs />
    </div>
  );
}
