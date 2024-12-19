"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";

import payment1 from "@/image/payment (1).svg";
import payment2 from "@/image/payment (2).svg";
import payment3 from "@/image/payment (3).svg";
import payment4 from "@/image/payment (4).svg";
import payment5 from "@/image/payment (5).svg";
import man1 from "@/image/man1.svg"
import fecture from "@/image/fecture (1).svg";
import fecture1 from "@/image/fecture (2).svg";
import star from "@/image/star.svg"

function Aboutus() {
  return (
    <>
    <div className="bg-[#ECF4F1] py-5">
      <div className="container max-w-screen-xl py-5 relative px-4 mx-auto">
        <div className="flex  justify-center items-center gap-10 py-6 text-[#43916F] font-extrabold outfit uppercase">
          <Image src={fecture1} width={50} height={50} alt="image" />
          ABOUT US
          <Image src={fecture} width={50} height={50} alt="image" />
        </div>

        <div className="p-4 lg:p-0">
          <h2 className="font-extrabold lg:text-4xl text-2xl outfit md:text-center text-justify uppercase text-[#072B2C] lg:leading-[50px] mb-3">
            Innovating Financial Solutions for <br /> Business Growth
          </h2>
          <p className="text-[#072B2C] outfit md:text-center text-justify text-base font-normal mb-10">
            Founded with a commitment to revolutionize financial management, we
            empower businesses with cutting-edge software solutions tailored to
            streamline operations and foster sustainable growth. Led by a team
            of industry experts, we prioritize customer satisfaction, continually
            refining our products to meet evolving needs and exceed expectations
            in the dynamic business landscape.
          </p>
          <h1 className="outfit font-extrabold text-4xl uppercase text-center text-[#072B2C]">
            dashboard
          </h1>
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="slider">
        <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 3000, // 3-second delay between slides
            disableOnInteraction: false, // Keep autoplay running after user interaction
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {/* Swiper Slides */}
          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
            <div>
              <Image
                src={payment1}
                alt="Dashboard Image 1"
                width={500}
                height={300}
                className="w-full h-full object-cover border-[3px] border-[#105f62] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
            <div>
              <Image
                src={payment2}
                alt="Dashboard Image 1"
                width={500}
                height={300}
                className="w-full h-full object-cover border-[3px] border-[#105f62] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
            <div>
              <Image
                src={payment1}
                alt="Dashboard Image 1"
                width={500}
                height={300}
                className="w-full h-full object-cover border-[3px] border-[#105f62] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
            <div>
              <Image
                src={payment4}
                alt="Dashboard Image 1"
                width={500}
                height={300}
                className="w-full h-full object-cover border-[3px] border-[#105f62] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
            <div>
              <Image
                src={payment5}
                alt="Dashboard Image 1"
                width={500}
                height={300}
                className="w-full h-full object-cover border-[3px] border-[#105f62] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
            <div>
              <Image
                src={payment5}
                alt="Dashboard Image 1"
                width={500}
                height={300}
                className="w-full h-full object-cover border-[3px] border-[#105f62] rounded-[10px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>



    {/* testimonials start */}

    <div>
      <div className="flex  justify-center items-center gap-10 py-6 text-[#43916F] font-extrabold outfit uppercase">
      <Image src={fecture1} width={0} height={0} alt="image"></Image>
      Testimonials
            <Image src={fecture} width={0} height={0} alt="image"></Image>
      </div>

      <div className="p-2 lg:p-0">
      <h2 className="font-extrabold lg:text-4xl text-2xl outfit text-center uppercase text-[#072B2C] lg:leading-[50px] ">Our happy users</h2>
      <p className="text-[#072B2C] outfit lg:text-center text-justify text-base font-normal lg:mb-20">Lorem ipsum dolor sit amet consectetur. Quis faucibus senectus velit mauris nullam. Auctor vel <br/> lorem sed in felis. Morbi dignissim facilisis arcu posuere.</p>
      </div>
          <div className="mb-16">
        <Swiper
          modules={[Pagination, Autoplay]} // Removed Navigation
          spaceBetween={30}
          slidesPerView={2}
          autoplay={{
            delay: 3000, // 3-second delay between slides
            disableOnInteraction: false, // Keep autoplay running after user interaction
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {/* Swiper Slides */}
          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-[10px] border border-[#C4EDD7]">
          <div className=" flex items-center lg:space-x-10 space-x-3"> 
            {/* <!-- Left Section: Image --> */}
            <div className="lg:flex-shrink-0">
              {/* <img src={man1} alt="Person 1" className="lg:w-28 lg:h-28 rounded-lg  "/> 
              */}
              <Image src={man1} alt="Person" className="lg:w-28 lg:h-28 rounded-lg"></Image>
            </div>
        
            {/* <!-- Right Section: Testimonial Content --> */}
            <div>
              {/* <!-- Name and Title --> */}
              <h4 className="text-[6px] outfit font-bold text-[#072B2C]">Fredi Allan</h4>
              <p className="text-[#072B2C] outfit font-normal text-[3px]">Founder, ABC</p>
        
              {/* <!-- Star Rating --> */}
              <div className="flex items-center space-x-1 mt-2">
                <span className="outfit"><Image src={star} alt="star"></Image></span>
              </div>
        
              {/* <!-- Testimonial Title --> */}
              <p className="mt-2 text-xs font-bold outfit text-[#1A1E23]">"TIME AND MONEY SAVING"</p>
        
              {/* <!-- Testimonial Description --> */}
              <p className="mt-2 text-[#1A1E23] text-[5px] font-normal Aleo Aleop">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat <br/> ligula ullamcorper quisque sed libero. Metus diam, ultrices et diam <br/> dapibus purus sed nunc accumsan. Tristique ultrices vestibulum <br/> vulputate curabitur nullam turpis. Diam sed id lorem sed.
              </p>
            </div>
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
              <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-[10px] border border-[#C4EDD7]">
          <div className=" flex items-center lg:space-x-10 space-x-3"> 
            {/* <!-- Left Section: Image --> */}
            <div className="lg:flex-shrink-0">
            <Image src={man1} alt="Person" className="lg:w-28 lg:h-28 rounded-lg"></Image>
            </div>
        
            {/* <!-- Right Section: Testimonial Content --> */}
            <div>
              {/* <!-- Name and Title --> */}
              <h4 className="text-[6px] outfit font-bold text-[#072B2C]">Fredi Allan</h4>
              <p className="text-[#072B2C] outfit font-normal text-[3px]">Founder, ABC</p>
        
              {/* <!-- Star Rating --> */}
              <div className="flex items-center space-x-1 mt-2">
                <span className="outfit"><Image src={star} alt="star"></Image></span>
              </div>
        
              {/* <!-- Testimonial Title --> */}
              <p className="mt-2 text-xs font-bold outfit text-[#1A1E23]">"TIME AND MONEY SAVING"</p>
        
              {/* <!-- Testimonial Description --> */}
              <p className="mt-2 text-[#1A1E23] text-[5px] font-normal Aleo Aleop">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat <br/> ligula ullamcorper quisque sed libero. Metus diam, ultrices et diam <br/> dapibus purus sed nunc accumsan. Tristique ultrices vestibulum <br/> vulputate curabitur nullam turpis. Diam sed id lorem sed.
              </p>
            </div>
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
          <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-[10px] border border-[#C4EDD7]">
          <div className=" flex items-center lg:space-x-10 space-x-3"> 
            {/* <!-- Left Section: Image --> */}
            <div className="lg:flex-shrink-0">
            <Image src={man1} alt="Person" className="lg:w-28 lg:h-28 rounded-lg"></Image>
            </div>
        
            {/* <!-- Right Section: Testimonial Content --> */}
            <div>
              {/* <!-- Name and Title --> */}
              <h4 className="text-[6px] outfit font-bold text-[#072B2C]">Fredi Allan</h4>
              <p className="text-[#072B2C] outfit font-normal text-[3px]">Founder, ABC</p>
        
              {/* <!-- Star Rating --> */}
              <div className="flex items-center space-x-1 mt-2">
                <span className="outfit"><Image src={star} alt="star"></Image></span>
              </div>
        
              {/* <!-- Testimonial Title --> */}
              <p className="mt-2 text-xs font-bold outfit text-[#1A1E23]">"TIME AND MONEY SAVING"</p>
        
              {/* <!-- Testimonial Description --> */}
              <p className="mt-2 text-[#1A1E23] text-[5px] font-normal Aleo Aleop">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat <br/> ligula ullamcorper quisque sed libero. Metus diam, ultrices et diam <br/> dapibus purus sed nunc accumsan. Tristique ultrices vestibulum <br/> vulputate curabitur nullam turpis. Diam sed id lorem sed.
              </p>
            </div>
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
          <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-[10px] border border-[#C4EDD7]">
          <div className=" flex items-center lg:space-x-10 space-x-3"> 
            {/* <!-- Left Section: Image --> */}
            <div className="lg:flex-shrink-0">
            <Image src={man1} alt="Person" className="lg:w-28 lg:h-28 rounded-lg"></Image>
            </div>
        
            {/* <!-- Right Section: Testimonial Content --> */}
            <div>
              {/* <!-- Name and Title --> */}
              <h4 className="text-[6px] outfit font-bold text-[#072B2C]">Fredi Allan</h4>
              <p className="text-[#072B2C] outfit font-normal text-[3px]">Founder, ABC</p>
        
              {/* <!-- Star Rating --> */}
              <div className="flex items-center space-x-1 mt-2">
                <span className="outfit"><Image src={star} alt="star"></Image></span>
              </div>
        
              {/* <!-- Testimonial Title --> */}
              <p className="mt-2 text-xs font-bold outfit text-[#1A1E23]">"TIME AND MONEY SAVING"</p>
        
              {/* <!-- Testimonial Description --> */}
              <p className="mt-2 text-[#1A1E23] text-[5px] font-normal Aleo Aleop">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat <br/> ligula ullamcorper quisque sed libero. Metus diam, ultrices et diam <br/> dapibus purus sed nunc accumsan. Tristique ultrices vestibulum <br/> vulputate curabitur nullam turpis. Diam sed id lorem sed.
              </p>
            </div>
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
          <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-[10px] border border-[#C4EDD7]">
          <div className=" flex items-center lg:space-x-10 space-x-3"> 
            {/* <!-- Left Section: Image --> */}
            <div className="lg:flex-shrink-0">
            <Image src={man1} alt="Person" className="lg:w-28 lg:h-28 rounded-lg"></Image>
            </div>
        
            {/* <!-- Right Section: Testimonial Content --> */}
            <div>
              {/* <!-- Name and Title --> */}
              <h4 className="text-[6px] outfit font-bold text-[#072B2C]">Fredi Allan</h4>
              <p className="text-[#072B2C] outfit font-normal text-[3px]">Founder, ABC</p>
        
              {/* <!-- Star Rating --> */}
              <div className="flex items-center space-x-1 mt-2">
                <span className="outfit"><Image src={star} alt="star"></Image></span>
              </div>
        
              {/* <!-- Testimonial Title --> */}
              <p className="mt-2 text-xs font-bold outfit text-[#1A1E23]">"TIME AND MONEY SAVING"</p>
        
              {/* <!-- Testimonial Description --> */}
              <p className="mt-2 text-[#1A1E23] text-[5px] font-normal Aleo Aleop">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat <br/> ligula ullamcorper quisque sed libero. Metus diam, ultrices et diam <br/> dapibus purus sed nunc accumsan. Tristique ultrices vestibulum <br/> vulputate curabitur nullam turpis. Diam sed id lorem sed.
              </p>
            </div>
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pt-[64px] pr-[0px] pb-[10px] pl-[10px]">
          <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-[10px] border border-[#C4EDD7]">
          <div className=" flex items-center lg:space-x-10 space-x-3"> 
            {/* <!-- Left Section: Image --> */}
            <div className="lg:flex-shrink-0">
            <Image src={man1} alt="Person" className="lg:w-28 lg:h-28 rounded-lg"></Image>
            </div>
        
            {/* <!-- Right Section: Testimonial Content --> */}
            <div>
              {/* <!-- Name and Title --> */}
              <h4 className="text-[6px] outfit font-bold text-[#072B2C]">Fredi Allan</h4>
              <p className="text-[#072B2C] outfit font-normal text-[3px]">Founder, ABC</p>
        
              {/* <!-- Star Rating --> */}
              <div className="flex items-center space-x-1 mt-2">
                <span className="outfit"><Image src={star} alt="star"></Image></span>
              </div>
        
              {/* <!-- Testimonial Title --> */}
              <p className="mt-2 text-xs font-bold outfit text-[#1A1E23]">"TIME AND MONEY SAVING"</p>
        
              {/* <!-- Testimonial Description --> */}
              <p className="mt-2 text-[#1A1E23] text-[5px] font-normal Aleo Aleop">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ut erat <br/> ligula ullamcorper quisque sed libero. Metus diam, ultrices et diam <br/> dapibus purus sed nunc accumsan. Tristique ultrices vestibulum <br/> vulputate curabitur nullam turpis. Diam sed id lorem sed.
              </p>
            </div>
            </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
          </div>

    </div>


    </>
  );
}

export default Aboutus;
