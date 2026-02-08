import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
    const { data, fetchAllProducts } = getData()
    console.log(data);
    const navigate = useNavigate()

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
                <AiOutlineArrowLeft className='arrows hidden md:block' style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", position: "absolute", padding: "2px", left: "20px" }} />
            </div>
        )
    }
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight className='arrows hidden md:block' style={{ ...style, display: "block", borderRadius: "50px", background: "#f53347", color: "white", position: "absolute", padding: "2px", right: "20px" }} />
            </div>
        )
    }

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        // Accessibility settings to prevent aria-hidden focus issues
        accessibility: true,
        focusOnSelect: false,
        swipe: true,
    };

    return (
        <div className="relative group">
            <Slider {...settings}>
                {
                    data?.slice(0, 7)?.map((item, index) => {
                        return (
                            <div key={index} className='bg-gray-50 dark:bg-black transition-colors duration-500'>
                                <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-8 justify-center min-h-[500px] md:h-[600px] py-12 md:py-0 items-center px-4'>
                                    <div className='md:space-y-6 space-y-4 text-center md:text-left order-2 md:order-1'>
                                        <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                                            Premium Selection
                                        </div>
                                        <h1 className='md:text-5xl text-2xl font-black uppercase leading-tight tracking-tighter text-gray-900 dark:text-white max-w-[600px]'>
                                            {item.title}
                                        </h1>
                                        <p className='max-w-[500px] line-clamp-3 text-gray-600 dark:text-gray-400 text-base md:text-lg font-medium'>
                                            {item.description}
                                        </p>
                                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                            <button
                                                onClick={() => navigate("/products")}
                                                className='bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-2xl font-bold hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-red-500/20 cursor-pointer transform hover:-translate-y-1'
                                            >
                                                Shop Collection
                                            </button>
                                            <button
                                                onClick={() => navigate(`/products/${item.id}`)}
                                                className='bg-transparent border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold hover:border-gray-900 dark:hover:border-white transition-all duration-300 cursor-pointer'
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                    <div className='order-1 md:order-2 relative px-4'>
                                        <div className="absolute inset-0 bg-red-500/20 dark:bg-red-500/10 blur-[100px] rounded-full -z-10 animate-pulse"></div>
                                        <img
                                            onClick={() => navigate(`/products/${item.id}`)}
                                            src={item.image}
                                            alt={item.title}
                                            className='w-[300px] md:w-[450px] aspect-square object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] hover:scale-110 transition-transform duration-700 cursor-pointer'
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    )
}

export default Carousel
