import SubNavigation from "components/subNavigation/SubNavigation";
import SubPageContainer from "components/subPageContainer/SubPageContainer";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { asyncFetchCollectionsStart } from "redux/shop/shopReducer";
import { texts } from "texts";
import "./shop.scss";
import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import Collection from "./collection/Collection";
import { Product } from "models/product";
import {
  collectionSelector,
  isShopFetchingSelector,
} from "redux/shop/shopSelectors";
import { usePath } from "hooks/usePath";
import NewProductModal from "../modal/NewProductModal";
import { SortType } from "../../constants/sortType";
import { OrderType } from "../../constants/orderType";
import { usePaginator } from "../../hooks/usePaginator";
import { Button, Grid, Modal } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { ClothType } from "../../constants/clothType";
import { asyncFetchOrdersStart } from "../../redux/orders/ordersReducer";
import { useAuth } from "../../hooks/useAuth";

export interface ClothesFetchParams {
  type: string;
  gender: string;
  limit: number;
  sortBy: string;
  orderBy: string;
  filter: string;
}

const Shop: FunctionComponent = () => {
  const tabsNames: string[] = Object.values(texts.menuSidebar.shop.links);
  const dispatch = useAppDispatch();
  const { limit, showAll, increaseBy } = usePaginator();
  const isLoading = useSelector(isShopFetchingSelector);
  const pathname = usePath();
  const [sortBy, setSortBy] = useState(SortType.price);
  const [orderBy, setOrderBy] = useState(OrderType.ASC);
  const [filter, setFilter] = useState("");
  const getClothes = () => {
    dispatch(
      asyncFetchCollectionsStart({
        type: clothTypeResolver(pathname),
        gender: "Uni",
        limit,
        sortBy,
        orderBy,
        filter,
      })
    );
  };
  // @ts-ignore
  const { user } = useAuth();

  useEffect(() => {
    dispatch(asyncFetchOrdersStart(user?.uid));
  }, []);

  useEffect(() => {
    getClothes();
  }, [dispatch, pathname, limit, orderBy, sortBy]);

  const collection: Product[] = useSelector(collectionSelector)(pathname);

  return (
    <SubPageContainer>
      <>
        <Modal open={isLoading}>
          <div className={"spinner-padding"}>
            <Spinner />
          </div>
        </Modal>

        <div className="shop">
          <SubNavigation items={tabsNames} />
          <div className={"filters"}>
            <OrderBySetter
              setOrder={setOrderBy}
              setSortField={setSortBy}
              sortFields={Object.values(SortType)}
              orderFields={Object.values(OrderType)}
            />
            <FilterInput setFilter={setFilter} defaultValue={filter} />
          </div>
          <div className={"new"}>
            <NewProductModal onAdd={getClothes} />
          </div>
          <Collection
            collection={
              filter === ""
                ? collection
                : collection.filter((cloth) =>
                    cloth.name
                      .toLocaleLowerCase()
                      .includes(filter.toLocaleLowerCase())
                  )
            }
          />
          <Grid container>
            <Grid item xs={12}>
              <PageLimiter
                onAll={() => {
                  showAll();
                }}
                onMore={() => {
                  increaseBy(4);
                }}
              />
            </Grid>
          </Grid>
        </div>
      </>
    </SubPageContainer>
  );
};

interface FilterProps {
  setFilter: (value: string) => void;
  defaultValue: string;
}

const FilterInput = ({ setFilter, defaultValue }: FilterProps) => {
  return (
    <div className={"elo"}>
      <TextField
        required
        id="filter"
        name="filter"
        label="Filter by name"
        value={defaultValue}
        onChange={(event) => setFilter(event.target.value)}
        onBlur={(event) => setFilter(defaultValue)}
      />
      <span onClick={() => setFilter("")} className={`material-icons`}>
        close
      </span>
    </div>
  );
};

interface OrderBySetterProps {
  setOrder: (value: OrderType) => void;
  setSortField: (value: SortType) => void;
  sortFields: SortType[];
  orderFields: OrderType[];
}

const ClickableButtons = (orderFields: any, setOrder: (value: any) => void) => {
  const [selectedButton, setSelectedButton] = useState(0);
  return (
    <Grid container>
      {orderFields.map((field: any, key: any) => (
        <Button
          id={key}
          style={
            key === selectedButton
              ? {
                  backgroundColor: "#f3ac40",
                  color: "#FFFFFF",
                }
              : {}
          }
          onClick={() => {
            setOrder(field);
            console.log(key);
            console.log(selectedButton);
            setSelectedButton(key);
          }}
        >
          {field}
        </Button>
      ))}
    </Grid>
  );
};

const OrderBySetter = ({
  setOrder,
  orderFields,
  sortFields,
  setSortField,
}: OrderBySetterProps) => (
  <div className={"filter-buttons"}>
    <div>{ClickableButtons(sortFields, setSortField)}</div>
    <div>{ClickableButtons(orderFields, setOrder)}</div>
  </div>
);

interface PageLimiterProps {
  onAll: () => void;
  onMore: () => void;
}

const PageLimiter = ({ onAll, onMore }: PageLimiterProps) => (
  <Button onClick={onMore} fullWidth={true}>
    Show more clothes{" "}
  </Button>
);

const clothTypeResolver = (pathname: string) => {
  switch (pathname) {
    case "jackets":
      return ClothType.JACKET;
    case "trousers":
      return ClothType.TROUSERS;
    case "boots":
      return ClothType.BOOTS;
    case "hats":
      return ClothType.HAT;
    default:
      return "all";
  }
};

export default Shop;
