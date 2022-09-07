import React, { useEffect, useState } from "react";
import FoodCard from "./Card";
import { faker, Faker } from "@faker-js/faker";
import axios from "axios";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get("https://foodbukka.herokuapp.com/api/v1/menu")
      .then((res) => {
        // console.log(res.data.Result);
        setMenu(res.data.Result);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="justify-center text-center">
      <h1 className="text-3xl font-sans">Order Food Online</h1>
      <div className="grid grid-cols-4 gap-4 my-7 mx-8 justify-center">
        {menu.map((item) => (
          <FoodCard
            id={item._id}
            src={faker.image.food(300, 250, true)}
            title={faker.company.name()}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
