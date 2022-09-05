import React from "react";
import Suggestion from "./Suggestion";

function Suggestions() {
  return (
    <div className="text-center items-center">
      <p>Inspiration for your first order</p>
      <div className="flex flex-row w-full items-center justify-center">
        <Suggestion
          title="food"
          src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
        />
        <Suggestion
          title="food"
          src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
        />
        <Suggestion
          title="food"
          src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
        />
        <Suggestion
          title="food"
          src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
        />
        <Suggestion
          title="food"
          src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
        />
      </div>
    </div>
  );
}

export default Suggestions;
