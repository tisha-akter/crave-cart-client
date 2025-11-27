import { useLanguage } from "../../hooks/useLanguage";
import { languageContent } from "../../utils/languageContent";
import { Users, Trophy, TrendingUp } from "lucide-react";
import CTA from "../common/CTA";
import { statsData } from "../../data/statsData";
import CountUp from "react-countup";

const Stats = () => {
  const { language } = useLanguage();
  const t = languageContent[language];

  const getStatLabel = (stat) => {
    if (stat.labelKey) {
      return stat.labelPrefix
        ? `${language === "en" ? "Average" : "গড়"} ${t[stat.labelKey]}`
        : t[stat.labelKey];
    }
    return language === "en" ? stat.labelEn : stat.labelBn;
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/5 to-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-orange-300 font-semibold text-sm mb-6 border border-white/20">
            <TrendingUp className="w-5 h-5 mr-2" />
            {language === "en" ? "Our Achievements" : "আমাদের অর্জন"}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {language === "en" ? "Numbers That" : "পরিসংখ্যান যা"}{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              {language === "en" ? "Matter" : "গুরুত্বপূর্ণ"}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "See why thousands of customers choose CraveCart for their food delivery needs"
              : "দেখুন কেন হাজার হাজার গ্রাহক তাদের খাবার ডেলিভারির জন্য CraveCart বেছে নেন"}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} p-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <div
                    className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${stat.color} opacity-30 blur-xl group-hover:blur-2xl transition-all duration-500`}
                  ></div>
                </div>

                {/* Number */}
                <div
                  className={`text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                >
                  <CountUp
                    end={stat.number}
                    duration={10}
                    separator=","
                    suffix={stat.suffix || ""}
                  />
                </div>

                {/* Label */}
                <p className="text-gray-300 font-medium text-sm lg:text-base group-hover:text-white transition-colors duration-300">
                  {getStatLabel(stat)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <CTA
          variant="primary"
          className="mt-16 lg:mt-20"
          primaryButton={{
            text:
              language === "en"
                ? "Join Our Community"
                : "আমাদের কমিউনিটিতে যোগ দিন",
            variant: "primary",
            size: "large",
            icon: <Users className="w-6 h-6" />,
            iconPosition: "left",
          }}
        />
      </div>
    </section>
  );
};

export default Stats;
