import { Button } from "@material-ui/core";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useOrders } from "../../hooks/useOrders";
import OrderPreview from "./orderPreview/OrderPreview";

interface OwnProps {}

type Props = OwnProps;

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    flex: 2, 
    headerAlign: 'center', 
    align: 'center',
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'Full name of commissioning party',
    sortable: false,
    flex: 2,
    headerAlign: 'center',
    align: 'center',
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
  {
    field: 'date',
    headerName: 'Order Date',
    type: 'string',
    flex: 2,
    headerAlign: 'center',
    align: 'center',
    sortComparator: (v1, v2, cp1, cp2) => {
      return Number((new Date(v1!.toString()).getTime()) > (new Date(v2!.toString()).getTime()));
    }
  },
  {
    field: 'details',
    hideSortIcons: true,
    disableColumnMenu: true,
    headerName: ' ',
    description: 'Press button for order details',
    flex: 1,
    align: 'center',
    renderCell: (params: GridValueGetterParams) => {
      const id = params.getValue(params.id, 'id')!.toString();
      return (
        <Link to={`/order/${id}`}>
          <Button variant="outlined">Details</Button>
        </Link>
        )
      },
  },
];

const CustomerOrdersPreview: FunctionComponent<Props> = (props) => {
  const { orders } = useOrders();
  console.log(orders);
  const rows = orders.map((value) => ({
    id: value.orderId,
    rawDate: value.date,
    date: new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date(value.date)),
    firstName: value.address.firstName,
    lastName: value.address.lastName
  }));

  return (
    <>
      <div style={{ height: 400, width: '60%', margin: '0 auto'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
    </>
  );
};

export default CustomerOrdersPreview;
