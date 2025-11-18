import { Users, Store, Clock, Award, MapPin, Heart } from 'lucide-react';

export const statsData = [
  {
    id: 1,
    icon: Users,
    number: "50K+",
    labelKey: 'happyCustomers',
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50"
  },
  {
    id: 2,
    icon: Store,
    number: "500+",
    labelKey: 'restaurants',
    color: "from-blue-500 to-purple-500",
    bgColor: "from-blue-50 to-purple-50"
  },
  {
    id: 3,
    icon: Clock,
    number: "25min",
    labelEn: 'Average Delivery',
    labelBn: 'গড় ডেলিভারি',
    color: "from-green-500 to-teal-500",
    bgColor: "from-green-50 to-teal-50"
  },
  {
    id: 4,
    icon: Award,
    number: "4.8",
    labelKey: 'rating',
    labelPrefix: true,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50"
  },
  {
    id: 5,
    icon: MapPin,
    number: "12+",
    labelEn: 'Cities Covered',
    labelBn: 'শহর কভার',
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50"
  },
  {
    id: 6,
    icon: Heart,
    number: "99%",
    labelEn: 'Satisfaction Rate',
    labelBn: 'সন্তুষ্টির হার',
    color: "from-pink-500 to-red-500",
    bgColor: "from-pink-50 to-red-50"
  }
];