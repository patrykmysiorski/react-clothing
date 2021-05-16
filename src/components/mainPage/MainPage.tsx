import React from "react";
import "./mainPage.scss";
import Button from "../button/Button";
import {texts} from "texts";

const MainPage: React.FC = () => {
  return (
    <div className={"main-page"}>
      <div>
        <p>{texts.mainPage.smallParagraph}</p>
        <h1>{texts.mainPage.mainParagraph}</h1>
        <Button
          text={texts.mainPage.button}
          wrapperClassName={"button-wrapper"}
        />
      </div>
    </div>
  );
};

export default MainPage;
