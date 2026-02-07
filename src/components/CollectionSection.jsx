import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const CollectionSection = ({ title, products, category }) => {
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className="absolute left-4 z-20 top-1/2 -translate-y-1/2 cursor-pointer bg-white/95 dark:bg-zinc-900/95 p-3 rounded-full shadow-xl hover:bg-red-500 group transition-all duration-300 border border-gray-100 dark:border-zinc-800 hover:scale-110 active:scale-95">
                <AiOutlineArrowLeft className="text-xl text-gray-800 dark:text-white group-hover:text-white transition-colors" />
            </div>
        )
    }

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className="absolute right-4 z-20 top-1/2 -translate-y-1/2 cursor-pointer bg-white/95 dark:bg-zinc-900/95 p-3 rounded-full shadow-xl hover:bg-red-500 group transition-all duration-300 border border-gray-100 dark:border-zinc-800 hover:scale-110 active:scale-95">
                <AiOutlineArrowRight className="text-xl text-gray-800 dark:text-white group-hover:text-white transition-colors" />
            </div>
        )
    }

    const settings = {
        dots: false,
        infinite: products.length > 4,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // Accessibility settings
        accessibility: true,
        focusOnSelect: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    if (!products || products.length === 0) return null;

    return (
        <div className="py-16 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-12 border-b border-gray-100 dark:border-zinc-900 pb-8">
                    <div className="space-y-1">
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">
                            {title} <span className="text-red-500">Collection</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-red-500 rounded-full" />
                    </div>
                    <Link
                        to={`/category/${category}`}
                        className="group flex items-center gap-3 px-8 py-3 text-xs font-black uppercase tracking-[0.2em] border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-500 rounded-full active:scale-95 shadow-[0_0_15px_rgba(239,68,68,0.1)] hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]"
                    >
                        View All
                        <AiOutlineArrowRight className="text-lg group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                </div>

                <div className="relative product-slider">
                    <Slider {...settings}>
                        {products.map((product) => (
                            <div key={product.id} className="px-2">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CollectionSection;
