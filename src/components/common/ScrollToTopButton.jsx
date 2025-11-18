import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full text-white shadow-lg transition-all duration-300 
        bg-gradient-to-r from-orange-500 z-50 to-red-500
        hover:shadow-xl hover:scale-110
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <ArrowUp size={20} />
    </button>
  );
}
