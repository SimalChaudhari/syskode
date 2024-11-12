import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images
import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import s5 from "../../assets/images/s5.png";
import s6 from "../../assets/images/s6.png";
import s7 from "../../assets/images/s7.png";
import s8 from "../../assets/images/s8.png";
import s9 from "../../assets/images/s9.png";
import s10 from "../../assets/images/s10.png";
import s11 from "../../assets/images/s11.png";
import s12 from "../../assets/images/s12.png";
import s13 from "../../assets/images/s13.png";
import s14 from "../../assets/images/s14.png";

function CustomSlider() {
    // Slider settings with autoplay
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        // arrows: true,
        autoplay: true,
        autoplaySpeed: 5000, // Autoplay interval set to 1 second
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    // Array of images to render
    const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14];

    return (
        <div className="slider-container max-w-[1250px] mx-auto my-10 px-4">
        <p className='font-montserrat font-bold text-xl'>Trusted by World’s Leading Brands</p>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center items-center gap-10 image-container">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-auto h-auto mx-auto filter" /> {/* Adjusted for centering */}
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CustomSlider;
