import React from "react";
import { useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { FaDirections, FaShare } from "react-icons/fa";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

function Restaurant() {
  var { id } = useParams();
  return (
    <div className="mt-5">
      <div>
        <section className="overflow-hidden text-gray-700">
          <div className="container py-2 mx-auto px-72">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://www.mylaporetimes.com/wp-content/uploads/2020/07/dominos_pizza.jpg"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://i.pinimg.com/originals/63/26/13/632613be1526f6d2e353981f51537fd9.jpg"
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://e3.365dm.com/22/08/2048x1152/skynews-dominos-pizza-food_5860170.jpg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://assets3.thrillist.com/v1/image/3070262/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.jdmagicbox.com/comp/mumbai/n3/022pxx22.xx22.160725105738.h4n3/catalogue/dominos-pizza-ghatkopar-west-mumbai-pizza-outlets-2vbiqng.jpg?clr="
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <img
                    alt="gallery"
                    className="block object-cover object-center w-full h-full rounded-lg"
                    src="https://myfoodstory.com/wp-content/uploads/2020/12/Dominos-Style-Garlic-Breadsticks-4-500x500.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex flex-col text-left ml-72">
        <div className="text-3xl font-semibold">{id}</div>
        <div className="text-xl ">Pizza and Fast Food</div>
        <div className="text-xl font-light">Kosapet, Vellore</div>
      </div>
      <div className="mt-2 ml-72 flex">
        <button className="mr-2 bg-[#ef4f5f] text-[white] px-2 py-2 rounded-md items-center flex">
          <span className="mr-1">
            <AiOutlineStar />
          </span>{" "}
          Add Review
        </button>
        <button className="px-2 py-2 rounded-md border-2 border-x-gray-300 mr-2 items-center flex">
          <span className="text-[#ef4f5f] mr-1">
            <FaDirections />
          </span>{" "}
          Direction
        </button>
        <button className="px-2 py-2 rounded-md border-2 border-x-gray-300 mr-2 items-center flex">
          <span className="text-[#ef4f5f] mr-1">
            <BsFillBookmarkPlusFill />
          </span>{" "}
          Bookmark
        </button>
        <button className="px-2 py-2 rounded-md border-2 border-x-gray-300 mr-2 items-center flex">
          <span className="text-[#ef4f5f] mr-1">
            <FaShare />
          </span>{" "}
          Share
        </button>
      </div>
    </div>
  );
}

export default Restaurant;
