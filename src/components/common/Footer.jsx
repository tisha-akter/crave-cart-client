import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock, Award, Truck, Heart, Send, Home, Store, Grid3X3, Info, HelpCircle, Package, Shield, FileText, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🍕</div>
        <div className="absolute top-32 right-20 text-4xl">🍔</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🍜</div>
        <div className="absolute bottom-10 right-10 text-3xl">🌮</div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">🍕</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">CraveCart</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Delicious food delivered right to your doorstep. Fresh, fast, and always satisfying your cravings.
            </p>
            
            {/* Key Features */}
            <div className="flex flex-col space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Clock className="h-4 w-4 text-orange-400" />
                <span>30 min delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Award className="h-4 w-4 text-orange-400" />
                <span>Quality guaranteed</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Truck className="h-4 w-4 text-orange-400" />
                <span>Free delivery over $25</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-600 rounded-lg flex items-center justify-center hover:from-sky-400 hover:to-sky-500 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Instagram className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded mr-3"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <Home className="h-4 w-4 group-hover:text-orange-400" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/menu" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <Store className="h-4 w-4 group-hover:text-orange-400" />
                  <span>Restaurants</span>
                </a>
              </li>
              <li>
                <a href="/categories" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <Grid3X3 className="h-4 w-4 group-hover:text-orange-400" />
                  <span>Categories</span>
                </a>
              </li>
              <li>
                <a href="/about" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <Info className="h-4 w-4 group-hover:text-orange-400" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/careers" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <Briefcase className="h-4 w-4 group-hover:text-orange-400" />
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded mr-3"></span>
              Customer Service
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/help" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <HelpCircle className="h-4 w-4 group-hover:text-orange-400" />
                  <span>Help Center</span>
                </a>
              </li>
              <li>
                <a href="/orders" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <Package className="h-4 w-4 group-hover:text-orange-400" />
                  <span>Track Order</span>
                </a>
              </li>
              <li>
                <a href="/returns" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <Truck className="h-4 w-4 group-hover:text-orange-400" />
                  <span>Returns & Refunds</span>
                </a>
              </li>
              <li>
                <a href="/privacy" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <Shield className="h-4 w-4 group-hover:text-orange-400" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="/terms" className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 group">
                  <FileText className="h-4 w-4 group-hover:text-orange-400" />
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="w-1 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded mr-3"></span>
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Call us</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email us</p>
                  <p className="text-white font-medium">hello@cravecart.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Visit us</p>
                  <p className="text-white font-medium">
                    123 Food Street<br />
                    Flavor City, FC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold mb-2 text-white flex items-center justify-center md:justify-start">
                  <Heart className="h-5 w-5 text-red-400 mr-2" />
                  Stay Updated
                </h4>
                <p className="text-gray-300">Get the latest offers, new restaurants, and exclusive deals delivered to your inbox.</p>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white/20 transition-all" 
                  />
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-300" />
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
                  <Send className="h-4 w-4" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 flex items-center">
              © 2025 CraveCart. All rights reserved. Made with 
              <Heart className="h-4 w-4 text-red-400 mx-1 animate-pulse" /> 
              for food lovers.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <Award className="h-4 w-4 text-orange-400" />
                <span>Quality Assured</span>
              </span>
              <span className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Secure Payments</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;