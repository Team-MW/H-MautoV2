import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EmergencyBanner from "@/components/EmergencyBanner";
import PosterShowcase from "@/components/PosterShowcase";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import AppointmentForm from "@/components/AppointmentForm";
import Reviews from "@/components/Reviews";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export default function Home() {
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
        <ContactLocation />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
