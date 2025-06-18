import { Shield, Rocket, Heart, Smartphone, Globe, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technology for instant loading and smooth interactions."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee and data protection you can trust."
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Perfectly designed for mobile devices with responsive layouts that adapt to any screen size."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Available worldwide with CDN support and multi-language capabilities for global audiences."
    },
    {
      icon: Heart,
      title: "User Focused",
      description: "Designed with users in mind, featuring intuitive interfaces and delightful user experiences."
    },
    {
      icon: Zap,
      title: "Powerful API",
      description: "Robust API with extensive documentation and developer tools for seamless integration."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make our platform the perfect choice for your next project. Built with modern technology and designed for success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;