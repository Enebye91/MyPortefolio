import Navigation from "../Components/Nav";
import Footer from "../Components/Footer";
import Paragraf from "../Components/Paragraf";
import mockup from "../assets/images/Mock.png";
import mockupImage from "../assets/images/MocupImage.png";
import "../assets/Case.css";

export default function Cases() {
  const numRows = 1;
  const numColumns = 3;

  // Funktion til at generere kasser med tekst
  const generateBoxesWithText = (textsArray, extraTextsArray) => {
    const boxes = [];

    // Loop gennem rækker
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numColumns; j++) {
        const index = i * numColumns + j;
        const text1 = textsArray[index][0];
        const text2 = textsArray[index][1];
        const text3 = textsArray[index][2];
        const extraText = extraTextsArray[index];

        const extraTextContent = Array.isArray(extraText)
          ? extraText[0].props.paragraf
          : extraText;

        boxes.push(
          <div className="project_kasse" key={index}>
            {/* Kasse med første tekst */}
            <div className="inner_kasse text-kasser">
              <span className="first-text">{text1}</span>
              <span className="second-text">{text2}</span>
              <span className="third-text">{text3}</span>
            </div>
            {/* Anden kasse inde i SecondT */}
            <div className="SecondT">
              <div className="inner_kasse extra-text-kasse">
                <span className="extra-text">{extraTextContent}</span>
              </div>
            </div>
          </div>
        );
      }
    }
    return boxes;
  };

  // Tekst til at indsætte i kasserne
  const texts = [
    [<Paragraf paragraf="Service " />, <Paragraf paragraf="" />],
    [<Paragraf paragraf="Credits" />, <Paragraf paragraf="" />],
    [<Paragraf paragraf=" Year" />, <Paragraf paragraf="" />]
  ];

  // Ekstra tekst til at indsætte i kasserne
  const extraTexts = [
    [
      <Paragraf paragraf="Multimedia final project" />,
      <Paragraf paragraf="UI/UX & webdevelopment " />
    ],
    "Photography: Louise Buch Photography",
    "2023"
  ];

  const boxesWithText = generateBoxesWithText(texts, extraTexts);

  return (
    <>
      <Navigation />
      <section className="case_wrapper">
        <article className="project_wrapper">
          <h1
            style={{
              color: "var(--black)"
            }}>
            Stald Schwartz
          </h1>
        </article>
        <aside className="project_info">
          <div className="projectwork_container">{boxesWithText}</div>
        </aside>
      </section>
      <section className="mockup_wrapper">
        <div>
          <img src={mockupImage} alt="mockupImage" id="mockup_image_one" />
        </div>
        <div>
          <img src={mockup} alt="mockup" id="mockup_image" />
        </div>
      </section>
      {/* <section className="next_section_wrapper"></section> */}
      <Footer />
    </>
  );
}
