import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Menu, Search, MapPin, Clock, Star, X, ChevronDown, Globe, Home, Store, Grid3X3, Info, Phone, LogIn, UserPlus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const [userLocation] = useState("Dhaka, Bangladesh");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to English
    return localStorage.getItem('language') || 'en';
  });
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Language content
  const content = {
    en: {
      delivery: "Delivery in 30-45 min",
      rating: "4.8 rating",
      restaurants: "500+ restaurants",
      searchPlaceholder: "Search for restaurants, cuisines, or dishes",
      mobileSearchPlaceholder: "Search restaurants and food",
      home: "Home",
      restaurantMenu: "Restaurants", 
      bengaliFood: "Bengali Food",
      favorites: "Favorites",
      orders: "Orders",
      account: "Account",
      signIn: "Sign in",
      newUser: "New to CraveCart?",
      signUp: "Sign up",
      deliveryTab: "Delivery",
      pickupTab: "Pickup",
      bengaliFoodTab: "Bengali Food",
      beveragesTab: "Beverages"
    },
    bn: {
      delivery: "ডেলিভারি ৩০-৪৫ মিনিট",
      rating: "৪.৮ রেটিং",
      restaurants: "৫০০+ রেস্টুরেন্ট",
      searchPlaceholder: "রেস্টুরেন্ট, খাবার বা রান্নার ধরন খুঁজুন",
      mobileSearchPlaceholder: "রেস্টুরেন্ট এবং খাবার খুঁজুন",
      home: "হোম",
      restaurantMenu: "রেস্টুরেন্ট",
      bengaliFood: "বাংলা খাবার",
      favorites: "পছন্দের তালিকা",
      orders: "অর্ডার",
      account: "অ্যাকাউন্ট",
      signIn: "সাইন ইন",
      newUser: "CraveCart এ নতুন?",
      signUp: "সাইন আপ করুন",
      deliveryTab: "ডেলিভারি",
      pickupTab: "পিকআপ",
      bengaliFoodTab: "বাংলা খাবার",
      beveragesTab: "পানীয়"
    }
  };

  const t = content[language];

  // Handle language change and persist to localStorage
  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    setIsLanguageDropdownOpen(false);
  };

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
      if (!event.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Top Bar - Location & Delivery Time */}
      <div className="bg-orange-50 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-700">
              <MapPin className="h-4 w-4 text-orange-500" />
              <span className="font-medium">{userLocation}</span>
              <ChevronDown className="h-3 w-3" />
            </div>
            <div className="hidden sm:flex items-center space-x-1 text-gray-600">
              <Clock className="h-4 w-4 text-green-500" />
              <span>{t.delivery}</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span>{t.rating}</span>
            </div>
            <span>•</span>
            <span>{t.restaurants}</span>
            
            {/* Language Selector */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'বাং'}</span>
                <ChevronDown className={`h-3 w-3 text-gray-600 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2 ${language === 'en' ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700'}`}
                  >
                    <span>🇺🇸</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('bn')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2 ${language === 'bn' ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700'}`}
                  >
                    <span>🇧🇩</span>
                    <span>বাংলা</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">🍕</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                CraveCart
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Food Delivery</p>
            </div>
            <span className="sm:hidden text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              CraveCart
            </span>
          </div>

          {/* Search Bar - Center */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-3 pl-12 pr-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Cart */}
            <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-all duration-200 group">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* User Account */}
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-all duration-200">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-medium">{t.signIn}</span>
              </button>
            </div>
          </div>

          {/* Mobile Action Buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Cart */}
            <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Menu Button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Search Bar for Tablet/Mobile */}
        {isSearchOpen && (
          <div className="lg:hidden border-t border-white/20 py-3 bg-white/10 backdrop-blur-sm">
            <div className="relative">
              <input 
                type="text" 
                placeholder={t.mobileSearchPlaceholder} 
                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all" 
                autoFocus
              />
              <Search className="absolute left-3 top-3.5 h-4 w-4 text-white/70" />
            </div>
          </div>
        )}

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className="mobile-menu-container lg:hidden border-t border-white/20 py-4 bg-white/10 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-2">
              {/* Navigation Links */}
              <nav className="space-y-1">
                <a href="#home" className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation" onClick={() => setIsMenuOpen(false)}>
                  <Home className="h-5 w-5" />
                  <span>{t.home}</span>
                </a>
                <a href="#restaurants" className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation" onClick={() => setIsMenuOpen(false)}>
                  <Store className="h-5 w-5" />
                  <span>{t.restaurantMenu}</span>
                </a>
                <a href="#categories" className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation" onClick={() => setIsMenuOpen(false)}>
                  <Grid3X3 className="h-5 w-5" />
                  <span>{t.bengaliFood}</span>
                </a>
                <a href="#about" className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation" onClick={() => setIsMenuOpen(false)}>
                  <Info className="h-5 w-5" />
                  <span>{t.favorites}</span>
                </a>
                <a href="#contact" className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="h-5 w-5" />
                  <span>{t.orders}</span>
                </a>
              </nav>
              
              {/* Auth Section */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <button className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation">
                  <LogIn className="h-5 w-5" />
                  <span>{t.signIn}</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-white text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg touch-manipulation">
                  <UserPlus className="h-5 w-5" />
                  <span>{t.signUp}</span>
                </button>
                
                {/* Language Selector for Mobile */}
                <div className="px-4 py-2 border-t border-white/20 mt-2">
                  <p className="text-sm text-white/70 mb-2">Language / ভাষা</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        handleLanguageChange('en');
                        setIsMenuOpen(false);
                      }}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        language === 'en' ? 'bg-orange-500 text-white' : 'bg-white/20 text-white/90 hover:bg-white/30'
                      }`}
                    >
                      🇺🇸 English
                    </button>
                    <button
                      onClick={() => {
                        handleLanguageChange('bn');
                        setIsMenuOpen(false);
                      }}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        language === 'bn' ? 'bg-orange-500 text-white' : 'bg-white/20 text-white/90 hover:bg-white/30'
                      }`}
                    >
                      🇧🇩 বাংলা
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;