import React, { useEffect, useState } from "react";
import axios from "axios";
import DataChart from "../views/local/DataChart";
import DataCreate from "../views/local/DataCreate";
import UnAuth from "../views/local/UnAuth";

const Main = () => {

  const [auth, setAuth] = useState(false);

  const [food, setFood] = useState(0);
  const [car, setCar] = useState(0);
  const [house, setHouse] = useState(0);
  const [connection, setConnection] = useState(0);
  const [etc, setEtc] = useState(0);

  const fetchPosts = async (myProp) => {
    var jsonData = sessionStorage.getItem("myAccessData");
    var current_data = JSON.parse(jsonData);

    try {
      const response = await axios.get(
        `https://localhost:44357/api/Home/expenses/?user_id=${current_data.user_id}&type=${myProp}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + current_data.access_token,
          },
        }
      );


      if (myProp === "Еда") setFood(response.data)
      else if (myProp === "Транспорт") setCar(response.data)
      else if (myProp === "Бытовые расходы") setHouse(response.data)
      else if (myProp === "Связь") setConnection(response.data)
      else if (myProp === "Прочее") setEtc(response.data)

      setAuth(true);

    } catch (error) {
      console.log("Main error");
    }

  };

  const updateData = () => {
    fetchPosts("Еда");
    fetchPosts("Транспорт");
    fetchPosts("Бытовые расходы");
    fetchPosts("Связь");
    fetchPosts("Прочее");
  }

  useEffect(() => {
    updateData();
  }, []);

  return (
    <>
      {auth
      ? 
      <>
      <DataCreate action={updateData} />
      <DataChart food={food} car={car} house={house} connection={connection} etc={etc} />
      </>
      :
      <UnAuth/>
      }

    </>
  );
};

export default Main;
