// import "../assets/OverskriftTo.css";

// export default function OverskriftTo(props) {
//   return (
//     <>
//       <div id="">
//         <h2>{props.overskriftTo}</h2>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from "react";
import "../assets/OverskriftTo.css";

const OverskriftTo = props => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Indstil isVisible til true, når komponenten først renderes
    setIsVisible(true);
  }, []); // Tøm arrayet for at sikre, at useEffect kun køres én gang ved den første rendering

  return (
    <div className={`overskriftTo-container ${isVisible ? "fade-in" : ""}`}>
      <h2>{props.overskriftTo}</h2>
    </div>
  );
};

export default OverskriftTo;
