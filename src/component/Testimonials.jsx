import React from 'react';
import Slider from "react-slick";

import Heading from '../partials/Heading';
import { testimonialData } from '../assets/data/data';
import TestimonialItem from '../partials/TestimonialItem';

const Testimonials = ({ title }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // default for desktop
        slidesToScroll: 1,
        swipeToSlide: true, // allows mobile swipe
        responsive: [
            {
                breakpoint: 1024, // below 1024px
                settings: { slidesToShow: 3, slidesToScroll: 1, dots: true }
            },
            {
                breakpoint: 768, // below 768px
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480, // below 480px
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };
    const settings_mobile = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // default for desktop
        slidesToScroll: 1,
        swipeToSlide: true, // allows mobile swipe
        responsive: [
            {
                breakpoint: 1024, // below 1024px
                settings: { slidesToShow: 3, slidesToScroll: 1, dots: true }
            },
            {
                breakpoint: 768, // below 768px
                settings: { slidesToShow: 2, slidesToScroll: 1 }
            },
            {
                breakpoint: 480, // below 480px
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };
    return (
        <div id="testimonials" className='py-md-5 py-3 px-md-5 px-2'>
            <div className="row mx-0">
                <div className="col-md-12">
                    <Heading
                        className='fs-48 text-primary text-capitalize text-center fw-bold'
                        title={title}
                        type='h2'
                    />
                </div>
            </div>

            <div className="testi_slider d-md-block d-none mt-4" style={{ overflow: 'hidden' }}>
                <Slider {...settings}>
                    {testimonialData.map(({ id, title, stars, icon, message }) => (
                        <div key={id} className="px-2">
                            <TestimonialItem
                                id={id}
                                title={title}
                                stars={stars}
                                icon={icon}
                                message={message}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="testi_slider d-md-none d-block mt-4" style={{ overflow: 'hidden' }}>
                <Slider {...settings_mobile}>
                    {testimonialData.map(({ id, title, stars, icon, message }) => (
                        <div key={id} className="px-2">
                            <TestimonialItem
                                id={id}
                                title={title}
                                stars={stars}
                                icon={icon}
                                message={message}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Testimonials;
