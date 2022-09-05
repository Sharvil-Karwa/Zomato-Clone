import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import CarouselCard from "./CarouselCard";

export default function Carousel() {
  return (
    <div className="align-items justify-center text-center items-center my-7 bg-[#f8f8f8] py-3">
      <p className="text-3xl font-sans">Inspiration for your first order</p>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-7"
      >
        <SwiperSlide className="flex flex-row justify-center">
          <CarouselCard
            src="https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
            name="Biryani"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
            name="Pizza"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
            name="Chicken"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
            name="Burger"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
            name="Rolls"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/dish_images/fb84ff51fad3d1940c811680874986701596811473.jpeg"
            name="Steak"
          />
        </SwiperSlide>
        <SwiperSlide className="flex flex-row justify-center">
          <CarouselCard
            src="https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png"
            name="Fries"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
            name="Sandwich"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"
            name="Fried Rice"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
            name="Noodles"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png"
            name="Shawarma"
          />
          <CarouselCard
            src="https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
            name="Momos"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
