import * as React from "react";
import { Address } from "components/address-form/AddressForm";
import {
  Button,
  Dialog,
  DialogTitle,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { setAddress } from "redux/address/addressReducer";
import styles from "./addressLoader.module.scss";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  addresses: Address[];
  onChosen: () => void;
  onNotChosen: () => void;
}

function AddressDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  let dispatch = useDispatch();

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    if (value === "I want to pass new address") {
      props.onNotChosen();
    } else {
      dispatch(
        setAddress(
          props.addresses.filter((address) => address.address === value)[0]
        )
      );
      props.onChosen();
    }

    onClose(value);
  };
  console.log(
    "EJ",
    Array.from(
      new Set([
        ...props.addresses.map(({ address, city }) => {
          return { address, city };
        }),
      ])
    )
  );
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Choose address</DialogTitle>
      <>
        {getUniqueListBy(
          // @ts-ignore
          props.addresses.map(({ address, city }) => {
            return { address, city };
          }),
          "address"
        ).map(({ address, city }, key) => (
          <ListItem
            button
            onClick={() => handleListItemClick(address)}
            key={address}
          >
            <span>
              {address}, {city}
            </span>
          </ListItem>
        ))}
        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("I want to pass new address")}
        >
          <ListItemText primary="I want to pass new address" />
        </ListItem>
      </>
    </Dialog>
  );
}

function getUniqueListBy(
  arr: {
    map: (arg0: (item: any) => any[]) => Iterable<readonly [unknown, unknown]>;
  },
  key: string | number
) {
  // @ts-ignore
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

interface AddressLoaderProps {
  addresses: Address[];
  onChosen: () => void;
  onNotChosen: () => void;
}

const AddressLoader = ({
  addresses,
  onNotChosen,
  onChosen,
}: AddressLoaderProps) => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <div className={styles.grid}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Do you want to select previously chosen address?
        </Button>
      </div>
      <AddressDialog
        onChosen={onChosen}
        onNotChosen={onNotChosen}
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        addresses={addresses}
      />
    </div>
  );
};

export default AddressLoader;
