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
          backgroundColor: "#d51a45",
          color: "#FFFFFF",
          padding: "10px",
          width: 300,
          height: 50,
          borderRadius: 50,
        }}
      >
        Add new ciuch
      </Button>
      <Modal open={isOpened} onClose={() => setOpened(false)}>
        <Card>
          <NewProductForm onAdd={props.onAdd} setOpened={setOpened} />
        </Card>
      </Modal>
    </>
  );
};

export default NewProductModal;
