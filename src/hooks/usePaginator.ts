import { useState } from "react";

export const usePaginator = () => {
  const [limit, setLimit] = useState(6);
  const increaseBy = (amount: number) => setLimit(limit + amount);
  const showAll = () => setLimit(1000);
  return { limit, showAll, increaseBy };
};
