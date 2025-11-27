import  { useState, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { languageContent } from '../../utils/languageContent';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Use centralized language system
  const { language } = useLanguage();
  const t = languageContent[language];
  
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop&crop=center",
      alt: "Delicious Food",
      title: () => t.freshTasty
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/05/15/09/01/foodora-3402507_1280.jpg",
      alt: "Delivery Rider",
      title: () => t.fastDelivery
    },
    {
      src: "https://img.freepik.com/premium-photo/young-woman-paying-parcel-received-from-courier_392895-101979.jpg",
      alt: "Customer Receiving Parcel",
      title: () => t.happyCustomers
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-green-300/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-28 h-28 bg-purple-300/20 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
            <div className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left content */}
                <div className="lg:col-span-7 text-center lg:text-left space-y-6 lg:space-y-8">
                  {/* Badge */}
                  <div className="animate-fadeInUp">
                    <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-yellow-300 font-semibold text-sm border border-white/20">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      {t.badge}
                    </span>
                  </div>
                  
                  {/* Heading */}
                  <div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                      <span className="block mb-2">{t.heading1}</span>
                      <span className="block text-yellow-300">{t.heading2}</span>
                    </h1>
                  </div>
                  
                  {/* Description */}
                  <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {t.description}
                    </p>
                  </div>
                  
                  {/* Search bar */}
                  <div className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
                    <div className="bg-white rounded-2xl p-1.5 shadow-2xl max-w-md mx-auto lg:mx-0">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 flex items-center px-4 py-3">
                          <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <input
                            type="text"
                            placeholder={t.addressPlaceholder}
                            className="flex-1 text-gray-800 placeholder-gray-500 outline-none text-sm sm:text-base"
                          />
                        </div>
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 sm:px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex-shrink-0">
                          <svg className="w-5 h-5 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          <span className="hidden sm:inline">{t.findFood}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                      <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 inline mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-8v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v.93" />
                        </svg>
                        {t.orderNow}
                      </button>
                      <button className="group bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:border-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {t.browseMenu}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hero image */}
                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div className="relative max-w-lg mx-auto">
                    {/* Carousel images */}
                    <div className="animate-slideInRight relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-red-300/20 rounded-full blur-2xl animate-pulse"></div>
                      
                      <div className="relative">
                        {/* Main image */}
                        <div className="relative rounded-3xl w-full max-w-lg mx-auto bg-white/10 backdrop-blur-sm" style={{minHeight: '400px'}}>
                          {carouselImages.map((image, index) => (
                            <div 
                              key={index}
                              className={`absolute inset-0 transition-all duration-1000 transform ${
                                index === currentImageIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                              }`}
                            >
                              <img 
                                src={image.src} 
                                alt={image.alt}
                                className="w-full h-auto object-contain rounded-3xl drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                                onError={(e) => {
                                  console.log(`Failed to load image: ${image.src}`);
                                  // Fallback images
                                  if (index === 1) {
                                    e.target.src = "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=800&h=600&fit=crop&crop=center";
                                  } else if (index === 2) {
                                    e.target.src = "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=600&fit=crop&crop=center";
                                  }
                                }}
                              />
                            </div>
                          ))}
                        </div>
                        
                        {/* Image title */}
                        <div className="absolute bottom-8 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-3 text-center">
                          <h3 className="text-white font-bold text-lg">
                            {carouselImages[currentImageIndex].title()}
                          </h3>
                        </div>
                        
                        {/* Indicators */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {carouselImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentImageIndex 
                                  ? 'bg-orange-500 shadow-lg' 
                                  : 'bg-gray-300 hover:bg-orange-300'
                              }`}
                            />
                          ))}
                        </div>
                        
                        {/* Navigation */}
                        <button
                          onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? carouselImages.length - 1 : currentImageIndex - 1)}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all duration-300 group"
                        >
                          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button
                          onClick={() => setCurrentImageIndex(currentImageIndex === carouselImages.length - 1 ? 0 : currentImageIndex + 1)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-all duration-300 group"
                        >
                          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Floating icons */}
                    <div className="hidden lg:block absolute -top-6 -right-6 animate-float" style={{animationDelay: '0.6s'}}>
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                        <span className="text-2xl">🍕</span>
                      </div>
                    </div>
                    
                    <div className="hidden lg:block absolute -bottom-6 -left-6 animate-float" style={{animationDelay: '0.8s'}}>
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                        <span className="text-2xl">🥗</span>
                      </div>
                    </div>
                    
                    <div className="hidden lg:block absolute top-1/2 -right-8 animate-float" style={{animationDelay: '1s'}}>
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                        <span className="text-2xl">🍝</span>
                      </div>
                    </div>
                    
                    <div className="hidden lg:block absolute top-20 -left-8 animate-float" style={{animationDelay: '1.2s'}}>
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                        <span className="text-2xl">🍣</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" className="w-full h-14 sm:h-16 lg:h-20 fill-gray-50" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;