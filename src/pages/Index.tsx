import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Packages from "@/components/Packages";
import Reviews  from "@/components/reviews";
import AdvertisementVideos from "@/components/Advertisementvedios";
import CaseStudies from "@/components/CaseStudies";
import Clients from "@/components/Clients";
import Blog from "@/components/Blog";
import FAQ from "@/components/Faq";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Services />
        <About />
        <Reviews />

        <AdvertisementVideos />

        <CaseStudies />

        <Clients />

        <Blog />

        <FAQ />

        <section id="packages">
        <Packages />
        </section>

       
      
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
