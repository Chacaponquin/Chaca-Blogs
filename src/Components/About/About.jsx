import { useContext, useEffect } from "react";
import SectionContext from "../../context/SectionContext";
import "../../css/styleAbout.css";
import NavBarLoged from "../NavBars/NavBarLoged";

const About = () => {
  const { setSectionOpen } = useContext(SectionContext);

  useEffect(() => {
    setSectionOpen("About");
    let div = document.querySelectorAll(".about-card");
    for (let i = 0; i < div.length; i++) {
      div[i].classList.toggle("showAbout");
    }
  }, [setSectionOpen]);

  return (
    <div id="aboutContainer">
      <NavBarLoged />
      <div id="about-cards-container">
        <div className="about-card">
          <div id="about-card-frase">
            <i>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
              exercitationem ab? Voluptatum molestias soluta officiis nam
              debitis, hic eos quo? Cumque beatae unde nihil eligendi.
            </i>
          </div>
          <div id="about-card-img">
            <img src="../img/Random/16.jpg" alt="" />
          </div>
        </div>

        <div className="about-card">
          <div id="about-card-noSense1"></div>
          <div id="about-card-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              necessitatibus, illum dolorem autem quae ducimus dolor atque
              recusandae totam vel officia adipisci minima a inventore aperiam
              quas error ipsam! Molestiae id in doloribus impedit odio? Beatae
              quos debitis fugiat temporibus vel? Quas, dignissimos quibusdam?
              Ipsa magni atque tenetur, dolorem quaerat repellendus maxime quas!
              Cupiditate, explicabo ipsa, eum reiciendis voluptas aliquid
              tempora nemo hic maiores iure, repellendus dolorum exercitationem
              veritatis omnis soluta. Autem quidem veniam deleniti enim
              perspiciatis, quas id adipisci!
            </p>
          </div>
          <div id="about-card-noSense2"></div>
        </div>

        <div className="about-card">
          <div id="about-bottom-picture">
            <img src="../img/Random/11.jpg" alt="" />
          </div>
          <div id="about-bottom-frase">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              consectetur possimus optio beatae ipsa voluptate pariatur sed,
              quia, eos harum ab iste quisquam reprehenderit hic facilis
              delectus inventore est culpa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
