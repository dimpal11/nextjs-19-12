import React from 'react'
import Image from "next/image";
import Aboutimage from "@/image/SealCheck.svg"
import Slider from "@/image/bro1.svg"

const About = () => {
  return (
    <>
         <section className="container max-w-screen-xl lg:py-5 md:py-5 relative lg:px-5 md:px-4 mx-auto overflow-x-hidden py-3 px-3 lg:mb-6">
        <div className="md:grid md:grid-cols-2">
          <div className="lg:pt-[122px]">
            <h2 className="text-[#43916F] font-extrabold text-xl flex items-center mb-5">
              <span>
                <Image src={Aboutimage} width={0} height={0} alt="icon"></Image>
              </span>
              Effortless Financial Management
            </h2>
            <h1 className="text-[30px] xl:text-[56px] outfit text-2xl font-extrabold text-[#072B2C] mb-6 leading-[48px] xl:leading-[72px] uppercase">
              Simplify Your <br />
              Accounting with <br />
              <span className="text-[#43916F] font-outfit ">CHAPTER .1</span>
            </h1>
            <p className="text-[#072B2C] lg:text-base font-outfit font-normal mb-6">
              Lorem ipsum dolor sit amet consectetur. Egestas orci a tellus nulla in faucibus
              <br /> scelerisque lacus. Bibendum mus nibh orci vestibulum viverra sodales ornare
              <br /> cursus. Risus cursus sapien eros mauris velit ut rutrum.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-[#105F62] font-outfit uppercase font-semibold p-[20px] text-sm flex justify-center items-center text-white lg:py-[12px] lg:px-6 rounded-sm"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="border border-[#072B2C] font-outfit uppercase outfit text-sm font-semibold text-[#072B2C] flex justify-center items-center p-[20px] lg:py-3  rounded-sm hover:bg-[#105F62] hover:text-[white] transition"
              >
                Learn More
              </a>
            </div>
          </div>

          <div>
            <div className="relative w-full xl:h-[500PX] overflow-hidden flex flex-col items-center p-10">
              <div id="slider" className="transition-opacity duration-500 ease-in-out h-full">
                <Image src={Slider} width={0} height={0} alt="Slider"></Image>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4 mt-4">
              <button id="prev" className="bg-white p-2 rounded border-[#43916F] border">
                ❮
              </button>
              <div className="flex space-x-2">
                <span className="dot w-3 h-3 bg-[#BEDACF] rounded-full"></span>
                <span className="dot w-3 h-3 bg-[#BEDACF] rounded-full"></span>
              </div>
              <button id="next" className="bg-white p-2 rounded border-[#43916F] border">
                ❯
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About
