import React from "react";
import "./mainPage.scss";
import Button from "../button/Button";
import {texts} from "texts";
import {Link} from "react-router-dom";

const MainPage: React.FC = () => {
  return (
    <div className={"main-page"}>
      <div>
        <p>{texts.mainPage.smallParagraph}</p>
        <h1>{texts.mainPage.mainParagraph}</h1>
        <Link to={"/shop"}>
          <Button
            text={texts.mainPage.button}
            wrapperClassName={"button-wrapper"}
          />
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
