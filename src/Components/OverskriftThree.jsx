// import "../assets/OverskriftThree.css";

// export default function OverskriftThree(props) {
//   return (
//     <>
//       <div id="">
//         <h4>{props.overskriftThree}</h4>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import "../assets/OverskriftThree.css";

const OverskriftThree = props => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tjek om overskriften er synlig på siden
      const element = document.querySelector(".overskriftThree-container");
      if (element) {
        const bounding = element.getBoundingClientRect();
        // Hvis overskriften er synlig på skærmen, indstil isVisible til true
        if (
          bounding.top >= 0 &&
          bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
          setIsVisible(true);
          // Fjern event listener når overskriften er synlig
          window.removeEventListener("scroll", handleScroll);
        } else {
          setIsVisible(false); // Nulstil isVisible hvis overskriften ikke er synlig
        }
      }
    };

    // Tilføj event listener til scroll-hændelse
    window.addEventListener("scroll", handleScroll);

    // Ryd op ved ophør af komponenten
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`overskriftThree-container ${isVisible ? "fade-in" : ""}`}>
      <h4>{props.overskriftThree}</h4>
    </div>
  );
};

export default OverskriftThree;
