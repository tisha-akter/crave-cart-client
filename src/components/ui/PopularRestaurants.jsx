import { useLanguage } from '../../hooks/useLanguage';
import { languageContent } from '../../utils/languageContent';
import { Star, Clock, ArrowRight, Award } from 'lucide-react';
import Button from '../common/Button';
import { restaurantsData } from '../../data/restaurantsData';

const PopularRestaurants = () => {
  const { language } = useLanguage();
  const t = languageContent[language];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 lg:mb-20">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-600 font-semibold text-sm mb-6 border border-orange-200">
              <Award className="w-5 h-5 mr-2" />
              Popular Choices
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              {t.popularRestaurants}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              {t.restaurantsSubtitle}
            </p>
          </div>
          <Button 
            variant="primary" 
            size="medium"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
            className="hidden lg:flex"
          >
            {t.viewAll}
          </Button>
        </div>

        {/* Restaurants grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {restaurantsData.map((restaurant) => (
            <div
              key={restaurant.id}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 overflow-hidden border border-white/50"
            >
              {/* Restaurant image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 filter brightness-105"
                />
                {restaurant.popular && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20">
                    <span className="mr-1">⭐</span>
                    Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                
                {/* Action button */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-orange-500" />
                </div>
              </div>

              {/* Restaurant info */}
              <div className="p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-6 text-sm font-medium bg-gray-50 px-3 py-1 rounded-full inline-block">
                  {t[restaurant.cuisineKey]}
                </p>

                {/* Rating and delivery */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center bg-yellow-50 px-3 py-2 rounded-full">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="ml-2 font-bold text-gray-900">
                      {restaurant.rating}
                    </span>
                    <span className="ml-1 text-gray-600 text-sm">
                      {t.rating}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-50 px-3 py-2 rounded-full">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    <span className="text-sm font-medium">
                      {restaurant.deliveryTime} {t.minDelivery}
                    </span>
                  </div>
                </div>
              </div>

              {/* Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="flex justify-center mt-12 lg:hidden">
          <Button 
            variant="primary" 
            size="large"
            icon={<Star className="w-6 h-6" />}
            iconPosition="left"
          >
            {t.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularRestaurants;