import CallToAction from "../components/CallToAction";
import Features from "../components/Features";
import Hero from "../components/Hero";


const Index = () => {
  return (
    <>
    <div className="bg-gradient-to-br from-slate-50 to-slate-200">
      <Hero />
      <Features />
      <CallToAction />
    </div>
    </>
  );
};

export default Index;