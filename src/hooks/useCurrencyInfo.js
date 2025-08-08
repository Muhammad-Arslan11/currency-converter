import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // The API expects uppercase currency codes
    fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.result === "success") {
          setData(res.rates || {});
        } else {
          console.error("Currency API error:", res);
          setData({});
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
