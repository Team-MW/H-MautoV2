import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmergencyBanner from "@/components/EmergencyBanner";
import PosterShowcase from "@/components/PosterShowcase";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import AppointmentForm from "@/components/AppointmentForm";
import Reviews from "@/components/Reviews";
import FaqSection from "@/components/FaqSection";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const { homeFaq } = siteConfig;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <EmergencyBanner />
        <PosterShowcase />
        <Services />
        <WhyUs />
        <AppointmentForm />
        <Reviews />
        <FaqSection
          eyebrow={homeFaq.eyebrow}
          title={homeFaq.title}
          subtitle={homeFaq.subtitle}
          items={homeFaq.items}
          ctaLabel="Prendre rendez-vous ou demander un devis"
          ctaHref="/contact"
        />
        <ContactLocation />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
