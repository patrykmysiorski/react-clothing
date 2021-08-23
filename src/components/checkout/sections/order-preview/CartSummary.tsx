import React, { FunctionComponent } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";
import { Button } from "@material-ui/core";

interface OwnProps {}

type Props = OwnProps;

function CartProduct() {
  return (
    <div className={"mt"}>
      <Row>
        <Col xs>
          <img
            width={70}
            height={100}
            src={
              "https://b.allegroimg.com/s512/012266/47959eb24f71a42f97d2bce4ce8b/Bokserki-dupa-smieszne-przebranie-prezent-Impreza"
            }
          ></img>
        </Col>
        <Col>
          <Row>
            <Col>
              Brand: <b> Jack & Jones</b>
            </Col>
          </Row>
          <Row>
            <Col>Name:</Col>
            <Col>
              <u> JORCOCO RESORT </u>
            </Col>
            <Col>
              <u> Koszula</u>
            </Col>
          </Row>
          <Row>
            <Col>Color:</Col>
            <Col>
              <u> black</u>
            </Col>
          </Row>
          <Row>
            <Col>Sizing:</Col>
            <Col>
              <u> M</u>
            </Col>
          </Row>
        </Col>
        <Col>
          <Col>1x</Col>
          <Col xsOffset={1}>150pln</Col>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color={"secondary"}>Delete product</Button>
        </Col>
        <Col>
          <Button>Add to wish list</Button>
        </Col>
      </Row>
    </div>
  );
}

const CartSummary: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Row center={"xs"}>
        <h1>Cart (products amount: 3) </h1>
      </Row>
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </>
  );
};

export default CartSummary;
