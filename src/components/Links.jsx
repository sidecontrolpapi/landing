import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import Pdf from "../Adrian Valdes Diaz's Resume.docx.pdf";

const Links = ({ mobile }) => {
  const { selected, handleSelect } = useContext(MenuContext);

  return (
    <>
      <li className="Navlink">
        <a
          href="https://docs.google.com/document/d/1aDDE9IvccffrqDSrvYltKa0jX5K-LzTT/edit?usp=sharing&ouid=114664143678719516556&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
        >
          <span>Resume</span>
        </a>
      </li>
      <li
        className={`Navlink ${
          selected >= 0.7 && selected <= 1.8 ? "selected" : ""
        }`}
      >
        {" "}
        <span onClick={() => handleSelect(1, "Me", mobile)}>About Me</span>{" "}
      </li>
      <li
        className={`Navlink ${
          selected < 4 && selected > 1.8 ? "selected" : ""
        }`}
      >
        {" "}
        <span onClick={() => handleSelect(2, "MidArrow", mobile)}>
          Projects
        </span>
      </li>
      <li className={`Navlink ${selected >= 4 ? "selected" : ""}`}>
        {" "}
        <span onClick={() => handleSelect(5, "Contact", mobile)}>Contact</span>
      </li>
    </>
  );
};

export default Links;
