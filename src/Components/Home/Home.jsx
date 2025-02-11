import React, { useRef } from "react";
import Slider from "react-slick";
import slide1 from "./Images/slide1.jpg";
import slide2 from "./Images/slide2.jpg";
import slide3 from "./Images/slide3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const images = [slide1, slide2, slide3];

  return (
    <section className="relative w-full h-screen">
      {/* Carousel */}
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {images.map((img, index) => (
          <div key={index} className="w-full h-screen">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Slide Navigation Buttons */}
      {/* <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        onClick={() => sliderRef.current.slickNext()}
      >
        <ChevronRight size={24} />
      </button> */}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white p-6">
        <h1 className="text-5xl font-bold">
          Welcome to Our MeeraLoom IT Solutions
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          We provide cutting-edge technology services for businesses worldwide.
        </p>
        <Link
          to="/services"
          className="mt-6 bg-blue-500 px-6 py-3 rounded-lg text-white hover:bg-blue-600 transition"
        >
          View Services
        </Link>
      </div>
    </section>
  );
};

export default Home;
