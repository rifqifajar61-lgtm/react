import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { restaurantReducer, initialState } from "../../reducers/restaurantReducer";
import RestoListView from "./RestoList.View";
import RestoDetailView from "../RestoDetail/RestoDetail.View";
import "./RestoList.scss";

const RestoList = () => {
  const [state, dispatch] = useReducer(restaurantReducer, initialState);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [detail, setDetail] = useState(null);

  const getRestaurants = () => {
    setLoading(true);
    axios
      .get("https://restaurant-api.dicoding.dev/list")
      .then((res) => {
        dispatch({
          type: "SET_RESTAURANTS",
          payload: res.data.restaurants,
        });
      })
      .finally(() => setLoading(false));
  };

  const searchRestaurants = (q) => {
    if (!q) {
      getRestaurants();
      return;
    }

    setLoading(true);
    axios
      .get(`https://restaurant-api.dicoding.dev/search?q=${q}`)
      .then((res) => {
        dispatch({
          type: "SET_RESTAURANTS",
          payload: res.data.restaurants,
        });
      })
      .finally(() => setLoading(false));
  };

  const getDetail = (id) => {
    setLoading(true);
    axios
      .get(`https://restaurant-api.dicoding.dev/detail/${id}`)
      .then((res) => {
        setDetail(res.data.restaurant);
        setSelectedId(id);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  if (selectedId && detail) {
    return (
      <RestoDetailView
        data={detail}
        loading={loading}
        onBack={() => {
          setSelectedId(null);
          setDetail(null);
        }}
      />
    );
  }

  return (
    <RestoListView
      data={state.restaurants}
      keyword={keyword}
      setKeyword={setKeyword}
      onSearch={searchRestaurants}
      onDetail={getDetail}
      loading={loading}
    />
  );
};

export default RestoList;
