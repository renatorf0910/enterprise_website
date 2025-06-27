import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative max-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
          <span className="text-sm font-medium text-purple-800">Welcome to the Future</span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Build Something
          <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Extraordinary
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Experience the next generation of web applications with cutting-edge technology, beautiful design, and seamless performance across all devices.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            size="lg"
            title="This is a example"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            title="This is a example"
            className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
      <div className="absolute top-20 left-10 animate-bounce" style={{ animationDelay: '1s' }}>
        <Zap className="w-8 h-8 text-yellow-500" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-6 h-6 text-pink-500" />
      </div>
    </section>
  );
};

export default Hero;