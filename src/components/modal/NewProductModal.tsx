import React, { FunctionComponent, useState } from "react";
import { Button, Card, Modal } from "@material-ui/core";
import NewProductForm from "../new-product-form/NewProductForm";

interface OwnProps {
  onAdd: () => void;
}

type Props = OwnProps;

const NewProductModal: FunctionComponent<Props> = (props) => {
  const [isOpened, setOpened] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpened(true);
        }}
        style={{
          backgroundColor: "#f3ac40",
          color: "#FFFFFF",
          padding: "10px",
        }}
      >
        Add new ciuch
      </Button>
      <Modal open={isOpened} onClose={() => setOpened(false)}>
        <Card>
          <NewProductForm onAdd={props.onAdd} />
        </Card>
      </Modal>
    </>
  );
};

export default NewProductModal;
