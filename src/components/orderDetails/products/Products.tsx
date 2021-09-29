import { FunctionComponent } from "react";
import { Product } from "models/product";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Button from "components/button/Button";
import { Link } from "react-router-dom";

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
      field: 'price',
      headerName: 'Price',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
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
        price: product.price,
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
