import React, { useEffect, useState } from "react";
import axios from "axios";
import DataChart from "../views/local/DataChart";
import DataCreate from "../views/local/DataCreate";

const Main = () => {
  const [data, setData] = useState(null);

  const fetchPosts = async () => {
    var jsonData = sessionStorage.getItem("myAccessData");
    var current_data = JSON.parse(jsonData);

    try {
      const response = await axios.get(
        `https://localhost:44357/api/Home/expenses/?user_id=${current_data.user_id}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + current_data.access_token,
          },
        }
      );

      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <DataCreate action={fetchPosts} />
      <DataChart />
    </>
  );
};

export default Main;
