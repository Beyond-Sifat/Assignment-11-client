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
                        className="w-full h-96 bg-cover bg-center flex flex-col justify-center items-center text-white"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/drogaimmk/image/upload/v1749821832/types_of_food_cc500603ae_mhqhti.png')" }}
                    ></div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-96 bg-contain bg-center flex flex-col justify-center items-center text-white"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/drogaimmk/image/upload/v1749822567/52d5500639cc161093a7e8989ec06611_fgraphic_ucgqpe.png')" }}
                    >
                        <div className='bg-[#FFB5B0] p-3 rounded-2xl'> <h2 className="text-4xl font-bold mb-2 text-[#000000]">Track foods before expired</h2></div>
                        <p className="text-xl text-center font-semibold max-w-lg text-[#000000]"> Stay ahead by monitoring your food items shelf life and reduce waste by consuming them before expiry.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-96 bg-contain bg-center flex flex-col justify-center items-center text-white"
                        style={{ backgroundImage: "url('https://res.cloudinary.com/drogaimmk/image/upload/v1749823289/spoiled-food-decay-rotten-fruits-dairy-vector-49337780_tkdy3l.jpg')" }}
                    >
                        <div className='bg-[#FFB5B085] p-3 rounded-2xl'>
                            <h2 className="text-4xl font-bold mb-2 text-[#000000]">Expired foods with badge</h2>
                        <p className="text-lg text-center font-semibold max-w-lg text-[#000000]">Easily identify expired items with a clear badge to help you manage and clean up your storage.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
export default Banner;