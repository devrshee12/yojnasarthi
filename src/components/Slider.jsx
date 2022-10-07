import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <>
      <div
        id="carouselDarkVariant"
        class="carousel slide carousel-fade carousel-dark relative h-[60%] w-[80%] p-5"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators --> */}
        {/* <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 w-[80%]">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div> */}

        {/* <!-- Inner --> */}
        <div class="carousel-inner relative w-full overflow-hidden h-full">
          <div class="carousel-item active relative float-left w-full h-full">
            <img
              src="./slider1.jpg"
              class="w-full h-full rounded-[5rem]"
              alt="Motorbike Smoke"
            />
          </div>

          <div class="carousel-item relative float-left w-full h-full">
            <img
              src="./slider2.jpg"
              class="block w-full h-full rounded-[5rem]"
              alt="Mountaintop"
            />
          </div>

          <div class="carousel-item relative float-left w-full h-full">
            <img
              src="./slider3.jpg"
              class="block w-full h-full rounded-[5rem]"
              alt="Woman Reading a Book"
            />
          </div>
        </div>
        {/* <!-- Inner -->

  <!-- Controls --> */}
        {/* <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
};

export default Slider;
