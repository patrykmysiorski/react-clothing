import React, { FunctionComponent } from "react";
import AvailablePaymentTypes from "./order-preview/AvailablePaymentTypes";
import DeliveryPrediction from "./order-preview/DeliveryPrediction";
import { Col, Row } from "react-flexbox-grid";
import TotalPrice from "./order-preview/TotalPrice";
import Discount from "./order-preview/Discount";

interface OwnProps {}

type Props = OwnProps;

const OrderPreviewSection: FunctionComponent<Props> = (props) => {
  return (
    <div className={"black-font"}>
      <Row>
        <Col xs={9}>
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
        <Col xs={3}>
          <Row>
            <Col>
              <TotalPrice />
            </Col>
          </Row>
          <Row>
            <Col>
              <Discount />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default OrderPreviewSection;
