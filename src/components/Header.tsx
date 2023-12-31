import { useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import Burger from "./Burger";
import Modal from "./Modal";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);
  const scrollThreshold = 200;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenBurger = () => {
    setBurgerOpen(!burgerOpen);
  };

  const redirectToHome = (section: string) => {
    navigate("/");

    setTimeout(() => {
      scroller.scrollTo(section, {
        duration: 1000,
        delay: 0,
        smooth: "ease",
        offset: -150,
      });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`headerBlock ${isFixed ? "fixed" : ""}`}>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

        <p className="companyName">
          <RouteLink
            to="/"
            className="companyNameLink"
            style={{
              color: location.pathname === "/projects/" ? "#1b1a1a" : "#f2f2f2",
            }}
          >
            ArchiVision
          </RouteLink>
        </p>
        <div className={`headerBtnsBlock ${burgerOpen ? "" : "hidden"}`}>
          {location.pathname === "/" ? (
            <ul className="headerList">
              <li className="headerLink">
                <ScrollLink
                  to="featuredProjects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={1000}
                  className="linkToPage"
                >
                  Projects
                </ScrollLink>
              </li>
              <li className="headerLink">
                <ScrollLink
                  to="ourFirm"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="linkToPage"
                >
                  About
                </ScrollLink>
              </li>
              <li className="headerLink">
                <ScrollLink
                  to="ourTeam"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={1000}
                  className="linkToPage"
                >
                  Team
                </ScrollLink>
              </li>
              <li className="headerLink">
                <ScrollLink
                  to="getInTouch"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  className="linkToPage"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          ) : (
            <>
              <ul
                className={`headerList ${
                  location.pathname === "/projects/" ? "projectsLinks" : ""
                }`}
              >
                <li className="headerLink">
                  {location.pathname !== "/projects/" ? (
                    <RouteLink to="/projects/" className="linkToPage">
                      Projects
                    </RouteLink>
                  ) : (
                    <ScrollLink
                      to="allProjectsSection"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                      className="linkToPage"
                    >
                      Projects
                    </ScrollLink>
                  )}
                </li>
                <li className="headerLink">
                  <RouteLink
                    to="/"
                    className="linkToPage"
                    onClick={() => redirectToHome("ourFirm")}
                  >
                    About
                  </RouteLink>
                </li>
                <li className="headerLink">
                  <RouteLink
                    to="/"
                    className="linkToPage"
                    onClick={() => redirectToHome("ourTeam")}
                  >
                    Team
                  </RouteLink>
                </li>
                <li className="headerLink">
                  <RouteLink
                    to="/"
                    className="linkToPage"
                    onClick={() => redirectToHome("getInTouch")}
                  >
                    Contact
                  </RouteLink>
                </li>
              </ul>
            </>
          )}
          <button className="getTemplateBtn" onClick={handleOpenModal}>
            Get Template
          </button>
        </div>
      </header>
      <button className="burgerWrapper" onClick={handleOpenBurger}>
        <Burger burgerOpen={burgerOpen} isFixed={isFixed} />
      </button>
    </>
  );
};

export default Header;
