import { FunctionComponent } from "react";
import { Product } from "models/product";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

interface OwnProps {
  products: Product[] | undefined;
}

const columns: GridColDef[] = [
    { 
      field: 'name', 
      headerName: 'Name', 
      flex: 2, 
      headerAlign: 'center', 
      align: 'center',
    },
    {
      field: 'totalPrice',
      headerName: 'Total price',
      flex: 2,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: 2,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'author',
      headerName: 'Seller',
      flex: 2,
      headerAlign: 'center',
      align: 'center'
    },
  ];

const Products: FunctionComponent<OwnProps> = ({products}) => {
    console.log(products);
    const rows= products?.map((product) => ({
        id: product.id,
        name: product.name,
        totalPrice: `${product.price * product.quantity} PLN`,
        quantity: product.quantity,
        author: product.author ?? "M&S&W"
    }));

    return (
    <>
      <div style={{ height: 400, width: '60%', margin: '0 auto'}}>
        <DataGrid
          rows={rows ?? []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </>
  );
};

export default Products;
