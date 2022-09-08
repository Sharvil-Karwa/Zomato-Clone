import React, { useEffect, useState } from "react";
import FoodCard from "./Card";
// import { faker, Faker } from "@faker-js/faker";
// import axios from "axios";

function Menu() {
  const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://foodbukka.herokuapp.com/api/v1/menu")
  //     .then((res) => {
  //       // console.log(res.data.Result);
  //       setMenu(res.data.Result);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div className="justify-center text-center">
      <h1 className="text-3xl font-sans">Order Food Online</h1>
      <div className="grid grid-cols-4 gap-4 my-7 mx-32 justify-center">
        {/* {menu.map((item) => (
          <FoodCard
            id={item._id}
            src={faker.image.food(300, 250, true)}
            title={faker.company.name()}
            description={item.description}
          />
        ))} */}
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Dommino's Pizza"
          description="Pizza, Fast Food"
        />
      </div>
    </div>
  );
}

export default Menu;
