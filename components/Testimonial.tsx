"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
export default function Testimonial() {
    return (
        <>

            <div className="flex justify-between">

                <div className="flex justify-start pl-2 ">
                    <h2 className="text-[40px] font-bold">OUR HAPPY CUSTOMER</h2>
                </div>
                <div className="pr-3 flex">
                    <i className="fa-solid fa-arrow-left button-prev "></i>
                    <i className="fa-solid fa-arrow-right button-next"></i>
                </div>
            </div>

            <div className="w-1/1 pb-[200px] flex justify-center ">

                <div className=" w-[95%]">

                    <Swiper
                        modules={[Autoplay,Navigation]}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation={{
                             nextEl: ".button-next",
                            prevEl: ".button-prev",
                        }}
                        autoplay={{
                            delay:2000
                        }}
                        breakpoints={{
                            892: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                882: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                550: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                350: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                300: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                }
                        }}

                    >
                        <SwiperSlide>

                            <div className="border-[#0000001A] border rounded-3xl pl-5 pr-5 pt-[30px] pb-[30px]">
                                <div className="pb-[15px] flex gap-1.5">
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <h4 className="font-bold text-[20px]">Saran M.</h4>
                                    <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                                </div>

                                <p className="text-[16px] text-[#00000099]">"I'm blown away by the quality and style of the clothes I
                                    received
                                    from Shop.co. From casual wear to elegant dresses, every piece I've bought has
                                    exceeded my expectations.”</p>
                            </div>

                        </SwiperSlide>


                        <SwiperSlide>
                            <div className="border-[#0000001A] border rounded-3xl pl-5 pr-5 pt-[30px] pb-[30px] swiper-slide">
                                <div className="pb-[15px] flex gap-1.5">
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <h4 className="font-bold text-[20px]" >Alex K.</h4>
                                    <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                                </div>
                                <p className="text-[16px] text-[#00000099]">"Finding clothes that align with my personal style used to be a
                                    challenge until I discovered Shop.co. The range of options they offer is truly
                                    remarkable, catering to a variety of tastes and occasions.”</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border-[#0000001A] border rounded-3xl pl-5 pr-5 pt-[30px] pb-[30px] swiper-slide ">
                                <div className="pb-[15px] flex gap-1.5">
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                </div>
                                <div className=" flex items-center gap-0.5">
                                    <h4 className="font-bold text-[20px]">James L.</h4>
                                    <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                                </div>
                                <p className="text-[16px] text-[#00000099]">"As someone who's always on the lookout for unique fashion pieces,
                                    I'm
                                    thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse
                                    but
                                    also on-point with the latest trends.”</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border-[#0000001A] border  rounded-3xl pl-5 pr-5 pt-[30px] pb-[30px] swiper-slide">
                                <div className="pb-[15px] flex gap-1.5">
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <h4 className="font-bold text-[20px]">Olivia P.</h4>
                                    <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                                </div>
                                <p className="text-[16px] text-[#00000099]">"As a UI/UX enthusiast, I value simplicity and functionality. This
                                    t-shirt not only represents those principles but also feels great to wear. It's
                                    evident
                                    that the designer poured their creativity into making this t-shirt stand out."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border-[#0000001A] border rounded-3xl pl-5 pr-5 pt-[30px] pb-[30px] swiper-slide">
                                <div className="pb-[15px] flex gap-1.5">
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <h4 className="font-bold text-[20px]">Liam K.</h4>
                                    <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                                </div>
                                <p className="text-[16px] text-[#00000099]">"This t-shirt is a fusion of comfort and creativity. The fabric is
                                    soft, and the design speaks volumes about the designer's skill. It's like wearing a
                                    piece of art that reflects my passion for both design and fashion."</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="border-[#0000001A] border rounded-3xl pl-5 pr-5 pt-[30px] pb-[30px] swiper-slide">
                                <div className="pb-[15px] flex gap-1.5">
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                    <i className="fa-solid fa-star text-[#FFC633]"></i>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <h4 className="font-bold text-[20px]">Ava H.</h4>
                                    <i className="fa-solid fa-circle-check text-[#01AB31]"></i>
                                </div>
                                <p className="text-[16px] text-[#00000099]">"I'm not just wearing a t-shirt; I'm wearing a piece of design
                                    philosophy. The intricate details and thoughtful layout of the design make this
                                    shirt a
                                    conversation starter."</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>



        </>
    )
}