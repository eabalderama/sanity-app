import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FaqSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1 mx-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* Blog Section */}
        <BlogSection />

        {/* Contact Form Section */}
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
