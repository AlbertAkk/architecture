import React from "react";
import { useLocation } from "react-router-dom";

interface BurgerProps {
  burgerOpen: boolean;
  isFixed: boolean;
}

const Burger: React.FC<BurgerProps> = ({ burgerOpen, isFixed }) => {
  const location = useLocation();
  const projectsPage = location.pathname === "/projects/";
  return (
    <div
      className={`burgerNav ${isFixed ? "fixed" : ""} ${
        projectsPage ? "black" : ""
      }`}
    >
      <div className={`burger burger1 ${burgerOpen ? "open" : ""}`}></div>
      <div className={`burger burger2 ${burgerOpen ? "open" : ""}`}></div>
      <div className={`burger burger3 ${burgerOpen ? "open" : ""}`}></div>
    </div>
  );
};

export default Burger;
