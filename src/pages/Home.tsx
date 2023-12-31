import React, { useEffect, useRef, useState } from "react";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { projectsMocks } from "../mocks/projectsMocks";
import Person from "../components/Person";

const Home = () => {
  const blockRefs = useRef<(HTMLElement | null)[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    blockRefs.current.forEach((blockRef) => {
      if (blockRef) {
        observer.observe(blockRef);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* First Block  */}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="firstHomeWrapper">
        <div className="firstBlockHome">
          <div className="firstBlockDesc">
            <h2 className="descHeading">
              The home of
              <br /> <span className="yellow">beautiful</span> architecture
            </h2>
          </div>
          <div className="firstBlockImage"></div>
        </div>
      </div>

      {/* Our Firm Block */}

      <section
        id="ourFirm"
        className="ourFirmBlock"
        ref={(ref) => (blockRefs.current[0] = ref)}
      >
        <div className="nameWrapper">
          <p className="nameFirm">Our Firm</p>
        </div>
        <div className="ourFirmDesc">
          <p className="ourFirmText">
            Welcome to ArchiVision, an innovative and dynamic architecture firm
            dedicated to transforming visions into breathtaking reality.
            Established in 1996, our firm has rapidly emerged as a leader in the
            industry, bringing together a diverse team of architects, designers,
            and planners who share a common vision of pushing boundaries and
            redefining the built environment.
          </p>
          <br />
          <p className="ourFirmText">
            At ArchiVision, we believe in the power of collaboration. Our
            multidisciplinary team thrives on the exchange of ideas, fostering a
            creative and inclusive environment that inspires groundbreaking
            solutions. With a portfolio spanning residential, commercial, and
            institutional projects, we take pride in our ability to tailor our
            designs to meet the unique needs and aspirations of each client.
          </p>
          <br />
          <p className="ourFirmText">
            As a client-centered firm, we prioritize clear communication and
            transparency throughout the design and construction process. Our
            commitment to excellence is reflected not only in the aesthetic
            appeal of our projects but also in their functionality and long-term
            sustainability. At ArchiVision, we are not just architects; we are
            partners in realizing your dreams and creating spaces that stand the
            test of time.
          </p>
          <div className="person">
            <div className="personImage"></div>
            <div className="personNamePos">
              <p className="personName">Stephen Collier</p>
              <p className="personPosition">Senior Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reeding House */}

      <div className="reedingImage">
        <div className="textBlock" ref={(ref) => (blockRefs.current[1] = ref)}>
          <p className="archName">REEDING HOUSE</p>
          <p className="archText">
            Elevating the urban landscape, our innovative architectural
            masterpiece seamlessly blends form and function.
          </p>
        </div>
      </div>

      {/* Our Process  */}

      <div className="ourProcessBlock">
        <p className="ourProcess" ref={(ref) => (blockRefs.current[3] = ref)}>
          Our Process
        </p>
        <h3 className="howWeDo" ref={(ref) => (blockRefs.current[4] = ref)}>
          How we do what we do.
        </h3>
        <div className="ourProcessTypes">
          <div
            className="ourProcessTypeBlock"
            ref={(ref) => (blockRefs.current[5] = ref)}
          >
            <div className="sketchingImage"></div>
            <p className="type">Sketching</p>
            <p className="typeText">
              Transforming concepts into visual poetry, our sketching process
              captures the essence of design, laying the foundation for the
              architectural narrative that follows.
            </p>
          </div>
          <div
            className="ourProcessTypeBlock"
            ref={(ref) => (blockRefs.current[6] = ref)}
          >
            <div className="finalizingImage"></div>
            <p className="type">Finalizing</p>
            <p className="typeText">
              The meticulous refinement of every detail defines our finalizing
              phase, where innovative ideas converge with precision, shaping a
              cohesive vision ready for realization.
            </p>
          </div>
          <div
            className="ourProcessTypeBlock"
            ref={(ref) => (blockRefs.current[7] = ref)}
          >
            <div className="buildingImage"></div>
            <p className="type">Building</p>
            <p className="typeText">
              Guided by precision and a commitment to craftsmanship, our
              building process transforms blueprints into tangible structures,
              bringing architectural dreams to life with unwavering dedication.
            </p>
          </div>
        </div>
      </div>

      {/* The marble staircase */}

      <div className="marbleImage">
        <div className="textBlock" ref={(ref) => (blockRefs.current[8] = ref)}>
          <p className="archName">The marble staircase</p>
          <p className="archText">
            Elevating the urban landscape, our innovative architectural
            masterpiece seamlessly blends form and function.
          </p>
        </div>
      </div>

      {/* Happy Customers  */}

      <div className="customersBackgr">
        <div className="customersBlock">
          <div
            className="customersText"
            ref={(ref) => (blockRefs.current[9] = ref)}
          >
            <p className="priorCustomers">PRIOR CLIENTS</p>
            <h4 className="happyCustomers">Happy Customers</h4>
            <p className="aboutCustomers">
              Join the chorus of satisfied clients who have experienced the
              unparalleled craftsmanship of ArchiVision. Our success is measured
              not just in structures, but in smiles.
            </p>
          </div>
          <div className="customersIconsBlock">
            <div className="customersSmaller">
              <div
                className="hillHayes"
                ref={(ref) => (blockRefs.current[10] = ref)}
              ></div>
              <div
                className="riksgransen"
                ref={(ref) => (blockRefs.current[11] = ref)}
              ></div>
            </div>
            <div className="customersSmaller">
              <div
                className="studioCali"
                ref={(ref) => (blockRefs.current[12] = ref)}
              ></div>
              <div
                className="chillIndustries"
                ref={(ref) => (blockRefs.current[13] = ref)}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Swirling Staircase  */}

      <div className="swirlStairsImage">
        <div className="textBlock" ref={(ref) => (blockRefs.current[14] = ref)}>
          <p className="archName">THE SWIRLING STAIRCASE</p>
          <p className="archText">
            Elevating the urban landscape, our innovative architectural
            masterpiece seamlessly blends form and function.
          </p>
        </div>
      </div>

      {/* Featured Projects  */}

      <section id="featuredProjects" className="featProjectsWrapper">
        <div
          className="featProjBlock"
          ref={(ref) => (blockRefs.current[15] = ref)}
        >
          <h4 className="featProjects">Featured projects</h4>
          <p className="featProjText">
            Some of the latest and greatest projects from us here at ArchiVision
          </p>
          <div className="projectList">
            {projectsMocks.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="projectElement"
                style={{
                  backgroundImage: `url(${require(`./../assets/${project.backgroundImage[0].image}`)})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Link
                  to={"/projects/id/" + project.id.toString()}
                  className="projectLink"
                >
                  <div className="projectHidden">
                    <div>
                      <p className="projName">{project.name}</p>
                      <p className="projCity">{project.city}</p>
                    </div>
                    <div className="projReadMore">Read more</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="featProjBtnWrapper">
            <Link to="/projects/" className="viewProjectsBtn">
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* Meet our team  */}

      <section id="ourTeam" className="meetTeamWrapper">
        <div
          className="meetTeamBlock"
          ref={(ref) => (blockRefs.current[16] = ref)}
        >
          <p className="meetTeam">Meet our team</p>
          <p className="meetTeamText">
            Welcome to the creative minds behind ArchiVision. Our team is a
            harmonious blend of visionary architects, dedicated designers, and
            meticulous project managers, all driven by a shared passion for
            transforming spaces into living works of art.
          </p>
          <button className="meetTeamBtn">See Team</button>
        </div>
        <div
          className="teamMembers"
          ref={(ref) => (blockRefs.current[17] = ref)}
        >
          <Person name="Stephen Collier" position="Senior Partner" />
          <Person name="Nolan Peters" position="Partner" />
          <Person name="Ferris Wonder" position="Associate" />
          <Person name="Aria Stone" position="Senior Partner" />
          <Person name="Niko Ferry" position="Partner" />
        </div>
      </section>

      {/* Get in Touch  */}

      <section id="getInTouch" className="getInTouchWrapper">
        <div
          className="getInTouchBlock"
          ref={(ref) => (blockRefs.current[18] = ref)}
        >
          <div className="getInTouchLeft">
            <p className="getInTouch">GET IN TOUCH</p>
            <h3 className="getInTouchText">
              Think we would be a good fit for your next project?
            </h3>
          </div>
          <div className="getInTouchRight">
            <button className="getInTouchBtn" onClick={handleOpenModal}>
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
