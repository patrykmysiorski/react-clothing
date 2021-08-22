import React, { FunctionComponent } from "react";
import CartSummary from "./order-preview/CartSummary";
import AvailablePaymentTypes from "./order-preview/AvailablePaymentTypes";
import DeliveryPrediction from "./order-preview/DeliveryPrediction";
import { Grid, Col, Row } from "react-flexbox-grid";
import TotalPrice from "./order-preview/TotalPrice";
import Discount from "./order-preview/Discount";

interface OwnProps {}

type Props = OwnProps;

const OrderPreviewSection: FunctionComponent<Props> = (props) => {
  return (
    <div className={"black-font"}>
      <Grid fluid>
        <Row>
          <Col xs={6}>
            <Row center={"xs"}>
              <Col>
                <CartSummary />
              </Col>
            </Row>
            <Row center={"xs"}>
              <Col>
                <DeliveryPrediction />
              </Col>
            </Row>
            <Row center={"xs"}>
              <Col>
                <AvailablePaymentTypes />
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <Row center={"xs"}>
              <Col>
                <TotalPrice />
              </Col>
            </Row>
            <Row center={"xs"}>
              <Col>
                <Discount />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default OrderPreviewSection;
