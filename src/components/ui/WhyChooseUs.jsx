import { useLanguage } from '../../hooks/useLanguage';
import { languageContent } from '../../utils/languageContent';
import { whyChooseUsData } from '../../data/whyChooseUsData';

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = languageContent[language];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Subtle floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-600 font-semibold text-sm mb-6 border border-orange-200">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.whyChoose}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.featuresSubtitle}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyChooseUsData.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Clean top accent */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>

                {/* Simple icon container */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-4 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {t[feature.titleKey]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t[feature.descriptionKey]}
                  </p>
                </div>

                {/* Subtle hover indicator */}
                <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA section */}
        <div className="text-center mt-16 lg:mt-20">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span className="mr-3">Ready to experience the difference?</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;