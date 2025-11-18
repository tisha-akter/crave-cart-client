// Centralized language content for the entire application
export const languageContent = {
  en: {
    // Header content
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
    beveragesTab: "Beverages",
    
    // Hero content
    badge: "#1 Food Delivery App",
    heading1: "Craving Something",
    heading2: "Delicious?",
    description: "Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep in minutes.",
    addressPlaceholder: "Enter delivery address",
    findFood: "Find Food",
    orderNow: "Order Now",
    browseMenu: "Browse Menu",
    customers: "Happy Customers",
    freshTasty: "Fresh & Tasty",
    fastDelivery: "Fast Delivery",
    happyCustomers: "Happy Customers"
  },
  bn: {
    // Header content
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
    beveragesTab: "পানীয়",
    
    // Hero content
    badge: "#১ খাবার ডেলিভারি অ্যাপ",
    heading1: "কিছু সুস্বাদু",
    heading2: "খাবারের জন্য আকুল?",
    description: "আপনার প্রিয় রেস্টুরেন্ট থেকে অর্ডার করুন এবং মিনিটের মধ্যে তাজা, গরম খাবার আপনার দোরগোড়ায় পৌঁছে দিন।",
    addressPlaceholder: "ডেলিভারি ঠিকানা প্রবেশ করুন",
    findFood: "খাবার খুঁজুন",
    orderNow: "এখনই অর্ডার করুন",
    browseMenu: "মেনু দেখুন",
    customers: "খুশি গ্রাহক",
    freshTasty: "তাজা ও সুস্বাদু",
    fastDelivery: "দ্রুত ডেলিভারি",
    happyCustomers: "খুশি গ্রাহকরা"
  }
};

// Helper function to get translation
export const getTranslation = (language, key) => {
  return languageContent[language]?.[key] || languageContent.en[key] || key;
};