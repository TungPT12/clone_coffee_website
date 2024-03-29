import { useEffect, useState } from "react";

function useDebounced(value: string, delay: number) {
  const [searchValue, setSearchValue] = useState(value);
  useEffect(() => {
    const debounced = setTimeout(() => {
      setSearchValue(value);
    }, delay);

    return () => {
      clearTimeout(debounced);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return searchValue;
}

export default useDebounced;
