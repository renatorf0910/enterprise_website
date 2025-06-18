import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import Hero from "../components/Hero";


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-200">
      <Hero />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Index;