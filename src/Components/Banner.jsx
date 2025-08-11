import React from 'react';
;
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";


const Banner = () => {
    return (
        <div className='mt-10'>
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="w-full h-full">

                <SwiperSlide>
                    <div
                        className="w-full h-96 bg-contain bg-center flex flex-col justify-center items-center relative"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/drogaimmk/image/upload/v1749821832/types_of_food_cc500603ae_mhqhti.png')" }}
                    >
                        <div className='absolute inset-0 bg-gradient-to-t from-blue-900/40 to-indigo-800/40'></div>
                        <h2 className="relative text-4xl font-bold text-white drop-shadow-lg">Welcome to GoodFood</h2>
                        <p className="relative text-lg mt-3 text-blue-200 font-medium">Fresh, organized, and ready to eat</p>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-96 bg-contain bg-center flex flex-col justify-center items-center relative"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/drogaimmk/image/upload/v1749822567/52d5500639cc161093a7e8989ec06611_fgraphic_ucgqpe.png')" }}
                    >
                        <div className='absolute inset-0 bg-gradient-to-t from-blue-900/40 to-indigo-800/40'></div>
                        <div className='relative bg-white/80 p-4 rounded-2xl shadow-lg'>
                            <h2 className="text-4xl font-bold mb-2 text-slate-800">Track foods before expiry</h2>
                            <p className="text-lg text-center font-medium max-w-lg text-slate-700">
                                Stay ahead by monitoring your food items shelf life and reduce waste by consuming them before expiry.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-96 bg-contain bg-center flex flex-col justify-center items-center relative"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/drogaimmk/image/upload/v1749823289/spoiled-food-decay-rotten-fruits-dairy-vector-49337780_tkdy3l.jpg')" }}
                    >
                        <div className='absolute inset-0 bg-gradient-to-t from-blue-900/40 to-indigo-800/40'></div>
                        <div className='relative bg-white/80 p-4 rounded-2xl shadow-lg'>
                            <h2 className="text-4xl font-bold mb-2 text-slate-800">Expired foods with badge</h2>
                            <p className="text-lg text-center font-medium max-w-lg text-slate-700">
                                Easily identify expired items with a clear badge to help you manage and clean up your storage.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Banner;