import React from 'react';

const Logo = () => {
    return (
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
    );
};

export default Logo;