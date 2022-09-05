import React from "react";
import FoodCard from "./Card";

function Menu() {
  return (
    <div className="justify-center text-center">
      <h1 className="text-3xl font-sans">Order Food Online</h1>
      <div className="grid grid-cols-4 gap-8 my-7 mx-8 justify-center">
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Domino's Pizza"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Domino's Pizza"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Domino's Pizza"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Domino's Pizza"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Domino's Pizza"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Domino's Pizza"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Domino's Pizza"
        />
        <FoodCard
          src="https://b.zmtcdn.com/data/pictures/chains/5/18739655/a3f876979c7b1a123ff8d0548d774cb1_o2_featured_v2.jpg?output-format=webp"
          title="Domino's Pizza"
        />
      </div>
    </div>
  );
}

export default Menu;
