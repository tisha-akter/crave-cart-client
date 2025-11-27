import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { languageContent } from "../../utils/languageContent";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  MessageCircle,
} from "lucide-react";
import {
  testimonialsData,
  testimonialStatsData,
} from "../../data/testimonialsData";
import CountUp from "react-countup";

const Testimonials = () => {
  const { language } = useLanguage();
  const t = languageContent[language];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const getTestimonialData = (testimonial) => ({
    text: t[testimonial.textKey],
    name: t[testimonial.nameKey],
    location: t[testimonial.locationKey],
    rating: testimonial.rating,
    avatar: testimonial.avatar,
  });

  const getStatLabel = (stat) => {
    if (stat.labelKey) {
      return t[stat.labelKey];
    }
    return language === "en" ? stat.labelEn : stat.labelBn;
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const currentTestimonialData = getTestimonialData(
    testimonialsData[currentTestimonial]
  );

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-yellow-100/20 to-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-600 font-semibold text-sm mb-6 border border-orange-200">
            <MessageCircle className="w-5 h-5 mr-2" />
            Customer Reviews
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            {t.testimonials}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 lg:p-16 overflow-hidden border border-white/50">
            {/* Quote icon */}
            <div className="absolute top-8 left-8 text-orange-200">
              <Quote className="w-16 h-16" />
            </div>
            <div className="absolute top-8 right-8 text-orange-100 rotate-180">
              <Quote className="w-12 h-12" />
            </div>

            {/* Testimonial content */}
            <div className="relative z-10 text-center">
              {/* Rating stars */}
              <div className="flex justify-center mb-8">
                {[...Array(currentTestimonialData.rating)].map((_, index) => (
                  <div key={index} className="relative mx-1">
                    <Star className="w-8 h-8 text-yellow-400 fill-current" />
                    <div className="absolute inset-0 w-8 h-8 bg-yellow-400 rounded-full opacity-20 blur-sm"></div>
                  </div>
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-10 min-h-[150px] flex items-center justify-center font-medium italic">
                <span className="relative">
                  "{currentTestimonialData.text}"
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
                </span>
              </blockquote>

              {/* Customer info */}
              <div className="flex items-center justify-center space-x-6">
                <div className="relative">
                  <img
                    src={currentTestimonialData.avatar}
                    alt={currentTestimonialData.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-gradient-to-r ring-orange-200 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm">✓</span>
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-xl mb-1">
                    {currentTestimonialData.name}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    {currentTestimonialData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-orange-50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group border border-white/50"
            >
              <ChevronLeft className="w-7 h-7 text-gray-600 group-hover:text-orange-500 group-hover:-translate-x-0.5 transition-all duration-300" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm hover:bg-orange-50 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group border border-white/50"
            >
              <ChevronRight className="w-7 h-7 text-gray-600 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all duration-300" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-10 space-x-4">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`relative transition-all duration-500 ${
                  index === currentTestimonial
                    ? "w-12 h-4 bg-gradient-to-r from-orange-500 to-red-500 shadow-lg scale-110"
                    : "w-4 h-4 bg-gray-300 hover:bg-orange-300 scale-100"
                } rounded-full`}
              >
                {index === currentTestimonial && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse opacity-60"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 lg:mt-24">
          {testimonialStatsData.map((stat, index) => (
            <div key={stat.id} className="text-center group">
              <div className="relative mb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 mb-4`}
                >
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div
                  className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl opacity-30 blur-xl group-hover:blur-2xl transition-all duration-300 mx-auto`}
                ></div>
              </div>
              <div
                className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <CountUp
                  end={stat.number}
                  duration={10}
                  separator=","
                  suffix={stat.suffix || ""}
                />
              </div>

              <p className="text-gray-600 font-medium text-sm lg:text-base group-hover:text-gray-800 transition-colors duration-300">
                {getStatLabel(stat)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
