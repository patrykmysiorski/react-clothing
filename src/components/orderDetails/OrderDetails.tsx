import React, { FunctionComponent } from "react";
import { useOrders } from "hooks/useOrders";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import Products from "./products/Products";

interface OwnProps {
  id: any;
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const OrderDetails: FunctionComponent = (props: any) => {
  const { orders } = useOrders();
  const [value, setValue] = React.useState(0);

  const id = props.match.params.id;
  const order = orders.find(o => o.orderId == id);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Products" {...a11yProps(0)} />
          <Tab label="Contact details" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Products products={order?.products} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
    </>
  );
};

export default OrderDetails;
