import Hero from "../components/ui/Hero";
import WhyChooseUs from "../components/ui/WhyChooseUs";
import PopularRestaurants from "../components/ui/PopularRestaurants";
import Cuisines from "../components/ui/Cuisines";
import HowItWorks from "../components/ui/HowItWorks";
import Stats from "../components/ui/Stats";
import Testimonials from "../components/ui/Testimonials";

const Homepage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Cuisines />
      <PopularRestaurants />
      <WhyChooseUs />
      <Stats />
      <HowItWorks />
      <Testimonials />
    </main>
  );
};

export default Homepage;