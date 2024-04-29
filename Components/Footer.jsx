import "../src/assets/Footer.css";
import { Link } from "react-router-dom";

// export default function Footer() {
//   // Antal rækker og kolonner i grid
//   const antalRækker = 3;
//   const antalKolonner = 1;

//   // Funktion til at generere kasser med tekst
//   const Kasser = (tekstArray) => {
//     const kasser = [];

//     // Loop gennem rækker
//     for (let i = 0; i < antalRækker; i++) {
//       // Loop gennem kolonner
//       for (let j = 0; j < antalKolonner; j++) {
//         const index = i * antalKolonner + j;
//         const overskrift = tekstArray[index][0];
//         const tekster = tekstArray[index].slice(1);

//         // Tilføj JSX-element for hver kasse til arrayet
//         kasser.push(
//           <div className="kasse" key={index}>
//             {/* Kasse med overskrift */}
//             <div className="indre_kasse overskrift-kasse">
//               <h5 className="overskrift">{overskrift}</h5>
//             </div>

//             {/* Kasse med fire tekster */}
//             <div className="indre_kasse tekst-kasse">
//               {tekster.map((tekst, index) => (
//                 <span key={index} className="tekst">
//                   {tekst}
//                 </span>
//               ))}
//             </div>
//           </div>
//         );
//       }
//     }
//     return kasser;
//   };

//   // Tekst til at indsætte i kasserne
//   const tekster = [
//     ["Contact", "+45 20617459", "", "", ""],
//     ["Site map", "About", "Portfolio", "", ""],
//     ["Socials", "Linkedin", "Github", "", ""],
//   ];

// // Funktion til at generere kasse med en overskrift og tekster
// const EnkeltKasse = (overskrift, tekster) => (
//   <div className="kasse">
//     {/* Indre kasse med overskrift */}
//     <div className="indre_kasse overskrift-kasse">
//       <h5 className="overskrift">{overskrift}</h5>
//     </div>
//     <div className="indre_kasse tekst-kasse">
//       {tekster.map((tekst, index) => (
//         <span key={index} className="tekst">{tekst}</span>
//       ))}
//     </div>
//   </div>
// );

// const textbox = EnkeltKasse("Version", ["© 2024 VEL design", "", "", ""]);

//   return (
//     <section className="Footer_wrapper">
//       <div className="Footer_container">
//         <article className="F_article">
//           {textbox}
//         </article>
//         <aside className="F_aside">
//           {Kasser(tekster)}

//           {/* <p>
//             <a href="https://www.instagram.com/stald_schwartz/">Linkedin</a>
//           </p>
//           <p>
//             <a href="https://www.instagram.com/stald_schwartz/">Instagram</a>
//           </p> */}
//         </aside>
//       </div>
//     </section>
//   );
// }

const Footer = () => {
  return (
    <footer className="Footer_wrapper">
      <div className="Footer_container">
        <div className="kasse">
          <h7>Version</h7>
          <ul>
            <li>© 2024 VEL design</li>
          </ul>
        </div>
        <div className="kasse">
          <h7>Contact</h7>
          <ul>
            <li>
              <a href="#">+45 20617459</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
        <div className="kasse">
          <h7>Site map</h7>
          <ul>
            <Link to="About">About</Link>
            <Link to="Portfolio">Portfolio</Link>
            {/* <li>
              <a href="#">About</a>
            </li> */}
            {/* <li>
              <a href="#">Portfolio</a>
            </li> */}
          </ul>
        </div>
        <div className="kasse">
          <h7>Socials</h7>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/michelle-v-johansen
"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/Enebye91">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
