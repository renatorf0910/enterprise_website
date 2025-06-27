import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have transformed their business with our platform. Start your journey today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="https://renatorf0910.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              See my projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>

          <a
            href="https://wa.me/5512991752296"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-grey hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Contact Sales
            </Button>
          </a>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-md mx-auto">
          <div className="flex items-center justify-center text-white">
            <Mail className="w-5 h-5 mr-3" />
            <span>renatorf0910@gmail.com</span>
          </div>
          <div className="flex items-center justify-center text-white">
            <Phone className="w-5 h-5 mr-3" />
            <span>+55 (12) 991752296</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default CallToAction;