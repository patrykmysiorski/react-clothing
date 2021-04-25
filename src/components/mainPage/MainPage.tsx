import React from "react";
import "./mainPage.scss";
import {texts} from "../../texts";

const MainPage: React.FC = () => {
  return (
    <div className={"main-page"}>
      <div>
        <p>{texts.mainPage.smallParagraph}</p>
        <h1>{texts.mainPage.mainParagraph}</h1>
        <button>{texts.mainPage.button}</button>
      </div>
    </div>
  );
};

export default MainPage;
