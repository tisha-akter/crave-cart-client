import { useLanguage } from '../../hooks/useLanguage';
import { languageContent } from '../../utils/languageContent';
import Button from '../common/Button';
import { ArrowRight, Utensils, Flame, Star, ChefHat } from 'lucide-react';
import { cuisinesData } from '../../data/cuisinesData';

const Cuisines = () => {
  const { language } = useLanguage();
  const t = languageContent[language];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-orange-50 to-red-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-600 font-semibold text-sm mb-6 border border-orange-200">
            <Utensils className="w-5 h-5 mr-2" />
            {language === 'en' ? 'Explore Cuisines' : 'রান্নার ধরন দেখুন'}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'en' ? 'Every' : 'প্রতিটি'}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {language === 'en' ? 'Cuisine' : 'রান্না'}
            </span>{' '}
            {language === 'en' ? 'You Love' : 'যা আপনি পছন্দ করেন'}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'From traditional Bengali dishes to international favorites, discover a world of flavors'
              : 'ঐতিহ্যবাহী বাংলা খাবার থেকে আন্তর্জাতিক পছন্দের খাবার পর্যন্ত, স্বাদের জগত আবিষ্কার করুন'
            }
          </p>
        </div>

        {/* Cuisines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cuisinesData.map((cuisine) => (
            <div
              key={cuisine.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-white/50"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={cuisine.image}
                  alt={language === 'en' ? cuisine.nameEn : cuisine.nameBn}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {cuisine.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Flame className="w-3 h-3 mr-1" />
                    {language === 'en' ? 'Popular' : 'জনপ্রিয়'}
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {cuisine.restaurants}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {language === 'en' ? cuisine.nameEn : cuisine.nameBn}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {language === 'en' ? cuisine.descriptionEn : cuisine.descriptionBn}
                </p>

                {/* Button */}
                <Button 
                  variant="outline" 
                  size="small" 
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {language === 'en' ? 'Explore' : 'দেখুন'}
                </Button>
              </div>

              {/* Accent */}
              <div className={`h-1 bg-gradient-to-r ${cuisine.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-16 lg:mt-20">
          <Button 
            variant="primary" 
            size="large"
            icon={<ChefHat className="w-6 h-6" />}
            iconPosition="left"
          >
            {language === 'en' ? 'View All Cuisines' : 'সব রান্নার ধরন দেখুন'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cuisines;