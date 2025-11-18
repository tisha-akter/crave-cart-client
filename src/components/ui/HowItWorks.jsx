import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { languageContent } from '../../utils/languageContent';
import { Search, ShoppingCart, Truck } from 'lucide-react';
import CTA from '../common/CTA';

// Add floating animation styles
const floatingStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

const HowItWorks = () => {
  const { language } = useLanguage();
  const t = languageContent[language];

  const steps = [
    {
      icon: Search,
      title: t.step1Title,
      description: t.step1Desc,
      color: "from-blue-500 to-purple-500",
      number: "01"
    },
    {
      icon: ShoppingCart,
      title: t.step2Title,
      description: t.step2Desc,
      color: "from-green-500 to-teal-500",
      number: "02"
    },
    {
      icon: Truck,
      title: t.step3Title,
      description: t.step3Desc,
      color: "from-orange-500 to-red-500",
      number: "03"
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: floatingStyles }} />
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Modern background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f97316" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating elements - hidden on mobile for better performance */}
        <div className="hidden md:block absolute top-20 right-10 lg:right-20 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full opacity-60 animate-float"></div>
        <div className="hidden md:block absolute bottom-32 left-8 lg:left-16 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="hidden lg:block absolute top-1/2 left-1/3 w-4 h-4 bg-orange-400 rounded-full opacity-40 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-600 font-semibold text-xs lg:text-sm mb-6 lg:mb-8 border border-orange-200">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 lg:mr-3 animate-pulse"></div>
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent px-4">
            {t.howItWorks}
          </h2>
          <div className="w-24 lg:w-32 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full mx-auto mb-6 lg:mb-8"></div>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {t.howItWorksSubtitle}
          </p>
        </div>

        {/* Modern steps timeline */}
        <div className="relative max-w-6xl mx-auto pt-8">
          {/* Timeline line - only on desktop */}
          <div className="hidden lg:block absolute top-28 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-red-200 to-pink-200"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative group">
                  {/* Card */}
                  <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 relative mx-4 md:mx-0">
                    {/* Background accent */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}></div>
                    
                    {/* Step number - positioned inside card */}
                    <div className="flex justify-center mb-4">
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 -mt-2`}>
                        <span className="text-white font-bold text-lg lg:text-xl">{step.number}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-16 h-16 lg:w-18 lg:h-18 rounded-xl lg:rounded-2xl bg-gradient-to-br ${step.color} p-4 lg:p-4 group-hover:scale-105 lg:group-hover:scale-110 group-hover:rotate-2 lg:group-hover:rotate-3 transition-all duration-300 lg:duration-500 shadow-lg opacity-80`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3 lg:space-y-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-300 px-2">
                        {step.title}
                      </h3>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 px-2">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  </div>

                  {/* Arrow connector - only on large screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-28 -right-2 xl:-right-4 z-10">
                      <div className="w-8 h-8 bg-white rounded-full border-4 border-orange-200 flex items-center justify-center shadow-lg">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Mobile/Tablet connector line */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-orange-300 to-red-300 relative rounded-full">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <CTA
          title="Ready to get started?"
          description="Join thousands of satisfied customers and experience the easiest way to order your favorite food."
          variant="gradient"
          className="mt-12 lg:mt-24"
          primaryButton={{
            text: t.orderNow,
            variant: 'primary',
            size: 'large',
            icon: <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6" />,
            iconPosition: 'left'
          }}
          secondaryButton={{
            text: 'Browse Restaurants',
            variant: 'outline',
            size: 'large',
            icon: <Search className="w-5 h-5 lg:w-6 lg:h-6" />,
            iconPosition: 'left'
          }}
        />
      </div>
    </section>
    </>
  );
};

export default HowItWorks;