import Navigation from "../Components/Nav";
import Paragraf from "../Components/Paragraf";
import rightarrow from "../assets/images/rightarrow.png";
import ContactSection from "../Components/ContactSection";
import Footer from "../Components/Footer";
import Stald from "../assets/images/StaldS.png";
// import { Link } from "react-router-dom";
import "../assets/PortfolioPage.css";

export default function Portfolio() {
  const numRows = 2;
  const numColumns = 1;

  // Funktion til at generere kasser med tekst og billeder
  const generateBoxesWithTextAndImages = (textsArray, imagePathsArray) => {
    const boxes = [];

    // Loop gennem rækker
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numColumns; j++) {
        const index = i * numColumns + j;
        const text1 = textsArray[index][0];
        const text2 = textsArray[index][1];
        const imagePath = imagePathsArray[index];

        boxes.push(
          // <Link to={`../Pages/CasePage/${index}`} key={index}>

          <div className="box" key={index}>
            {/* Kasse med første tekst */}
            <div className="inner_box text-box">
              <span className="first-text">{text1}</span>
              {/* <span className="first-text">
                <Link to={`../Pages/CasePage${index}`}>{text1}</Link>
              </span> */}
              <span className="second-text">{text2}</span>
            </div>

            {/* Kasse med billede */}
            <div className="inner_box image-box">
              <img className="portfolio-image" src={imagePath} />
            </div>
          </div>
          // </Link>
        );
      }
    }
    return boxes;
  };

  // Tekst til at indsætte i kasserne
  const texts = [
    [<Paragraf paragraf="Stald Schwartz " />, "1"],
    [<Paragraf paragraf=" " />, "2"]
  ];

  const imagePaths = [
    Stald
    // Tilføj flere billedstier efter behov
  ];

  // Generer kasser med den givne tekst og billedstier
  const boxesWithTextAndImages = generateBoxesWithTextAndImages(
    texts,
    imagePaths
  );

  // // Funktion til at generere kasser med to tekster og et billede for andet grid
  // const generateSecondGrid = (textsArray, imagePathsArray) => {
  //   const boxes = [];

  //   // Loop gennem rækker
  //   for (let i = 0; i < numRows; i++) {
  //     for (let j = 0; j < numColumns; j++) {
  //       const index = i * numColumns + j;
  //       const text1 = textsArray[index][0];
  //       const text2 = textsArray[index][1];
  //       // const imagePath = imagePathsArray[index];

  //       boxes.push(
  //         <div className="box" key={index}>
  //           {/* Kasse med første tekst */}
  //           <div className="inner_box text-box">
  //             <span className="first-text">{text1}</span>
  //             <span className="second-text">{text2}</span>
  //           </div>

  //           {/* Kasse med billede */}
  //           <div className="inner_box image-box">
  //             {/* <img
  //               className="portfolio-image"
  //               src={imagePath}
  //             /> */}
  //           </div>
  //         </div>
  //       );
  //     }
  //   }
  //   return boxes;
  // };

  // // Tekst til at indsætte i kasserne
  // const secondGridTexts = [
  //   [<Paragraf paragraf="" />, "2"],
  //   [<Paragraf paragraf="" />, "4"],
  // ];

  // // Billedstier til at indsætte i kasserne
  // const secondGridImagePaths = [""];

  // // Generer andet grid med den givne funktion og tekst-arrayet
  // const secondGrid = generateSecondGrid(secondGridTexts, secondGridImagePaths);

  return (
    <>
      <div>
        <Navigation />
      </div>

      <section className="W_wrapper">
        <section className="Work_wrapper">
          <article className="Work_wrapper_article">
            <div id="arrow_container">
              <img src={rightarrow} alt="arrow" id="arrow-image" />
            </div>
            <div className="work-text">
              <p className="work-heading">Digital Building</p>
              <p>
                Creating accessible and innovative digital products with a focus
                on user-centric design and development
              </p>
            </div>
          </article>

          <aside className="work_container_wrapper">
            <div className="work_container">{boxesWithTextAndImages}</div>
          </aside>
        </section>
        <ContactSection />
        <Footer />
      </section>
    </>
  );
}
