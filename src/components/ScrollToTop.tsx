import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = (param: ScrollBehavior | undefined) => {
    window.scrollTo({
      top: 0,
      behavior: param,
    });
  };

  useEffect(() => {
    scrollToTop("auto");
  }, [pathname]);

  return (
    <button
      className={`scrollToTopButton ${isVisible ? "visible" : ""}`}
      onClick={() => scrollToTop("smooth")}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
