import React, { FunctionComponent, useState } from "react";
import { Card, IconButton, Modal } from "@material-ui/core";
import NewProductForm from "../new-product-form/NewProductForm";

interface OwnProps {}

type Props = OwnProps;

const PortalModal: FunctionComponent<Props> = (props) => {
  const [isOpened, setOpened] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => {
          setOpened(true);
        }}
      >
        Add new ciuch
      </IconButton>
      <Modal open={isOpened} onClose={() => setOpened(false)}>
        <Card>
          <NewProductForm />
        </Card>
      </Modal>
    </>
  );
};

export default PortalModal;
