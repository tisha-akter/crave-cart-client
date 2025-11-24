import React, { useState, useEffect } from "react";
import {
  ShoppingCart,
  User,
  Menu,
  Search,
  MapPin,
  Clock,
  Star,
  X,
  ChevronDown,
  Globe,
  Home,
  Store,
  Grid3X3,
  Info,
  Phone,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { languageContent } from "../../utils/languageContent";
import Login from "../../pages/Authentication/Login";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const [userLocation] = useState("Dhaka, Bangladesh");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Use centralized language system
  const { language, changeLanguage } = useLanguage();
  const t = languageContent[language];

  // Handle language change
  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setIsLanguageDropdownOpen(false);
  };

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".language-dropdown")) {
        setIsLanguageDropdownOpen(false);
      }
      if (!event.target.closest(".mobile-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Top bar */}
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

            {/* Language selector */}
            <div className="relative language-dropdown">
              <button
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium">
                  {language === "en" ? "EN" : "বাং"}
                </span>
                <ChevronDown
                  className={`h-3 w-3 text-gray-600 transition-transform ${
                    isLanguageDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 animate-fadeIn">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
                      language === "en"
                        ? "bg-orange-50 text-orange-600 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    <span>🇺🇸</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange("bn")}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2 ${
                      language === "bn"
                        ? "bg-orange-50 text-orange-600 font-medium"
                        : "text-gray-700"
                    }`}
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

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Logo></Logo>

          {/* Search bar */}
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

          {/* Desktop buttons */}
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

            {/* User account */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
              >
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-medium">{t.signIn}</span>
              </button>
            </div>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile cart */}
            <button className="relative p-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Menu button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search */}
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu-container lg:hidden border-t border-white/20 py-4 bg-white/10 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-2">
              {/* Navigation */}
              <nav className="space-y-1">
                <a
                  href="#home"
                  className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Home className="h-5 w-5" />
                  <span>{t.home}</span>
                </a>
                <a
                  href="#restaurants"
                  className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Store className="h-5 w-5" />
                  <span>{t.restaurantMenu}</span>
                </a>
                <a
                  href="#categories"
                  className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Grid3X3 className="h-5 w-5" />
                  <span>{t.bengaliFood}</span>
                </a>
                <a
                  href="#about"
                  className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Info className="h-5 w-5" />
                  <span>{t.favorites}</span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  <span>{t.orders}</span>
                </a>
              </nav>

              {/* Auth section */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <button className="flex items-center space-x-3 text-white/90 hover:text-white hover:bg-white/20 px-3 py-3 rounded-lg transition-all duration-300 font-medium touch-manipulation">
                  <LogIn className="h-5 w-5" />
                  <span>{t.signIn}</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-white text-orange-500 hover:bg-orange-50 px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg touch-manipulation">
                  <UserPlus className="h-5 w-5" />
                  <span>{t.signUp}</span>
                </button>

                {/* Language selector */}
                <div className="px-4 py-2 border-t border-white/20 mt-2">
                  <p className="text-sm text-white/70 mb-2">Language / ভাষা</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        changeLanguage("en");
                        setIsMenuOpen(false);
                      }}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        language === "en"
                          ? "bg-orange-500 text-white"
                          : "bg-white/20 text-white/90 hover:bg-white/30"
                      }`}
                    >
                      🇺🇸 English
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage("bn");
                        setIsMenuOpen(false);
                      }}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        language === "bn"
                          ? "bg-orange-500 text-white"
                          : "bg-white/20 text-white/90 hover:bg-white/30"
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

      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 relative w-full max-w-md">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            <Login setShowLoginModal={setShowLoginModal}  onClose={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
