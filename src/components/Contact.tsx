import React from 'react'
import Image from 'next/image'
import Phone from '@/image/PhoneCall.svg'
import email from "@/image/EnvelopeSimpleOpen.svg"
import Address from "@/image/MapPin.svg"
import Footer from "@/image/Group 1000000778 (2).svg"
import Youtube from "@/image/youtube-icon.svg"
import Instagram from "@/image/instagram-icon.svg"
import Facebook from "@/image/facebook-icon.svg"

function Contact() {
  return (
    <>
    <section>
        <div className="bg-[#105F62] p-4 xl:p-[40px]">
            <div className='container max-w-screen-xl py-0 md:py-5 relative px-0 md:px-4 mx-auto overflow-x-hidden'>
                <div className=" grid grid-cols-1 md:grid-cols-2 ">
                    {/* contact info */}
                    <div className="text-white">
                        <h2 className="outfit uppercase text-lg md:text-xl lg:text-2xl font-bold mb-4">Contact Us</h2>
                        <p className="outfit uppercase font-extrabold text-2xl md:text-3xl lg:text-4xl mb-4">
                  We&apos;d love <br />
                  to hear from you!
                </p>
                        <p className="outfit font-normal text-xs md:text-sm lg:text-base mb-4">Whether you have a question, need support, or want to give <br /> feedback, please reach out to us using the form below.</p>

                        <ul>
                            <li className="flex items-center gap-5 text-white mb-5 text-xs md:text-sm">
                                <Image src={Phone} alt='image'></Image>
                                <h1>Phone <br /> <span className='outfit font-semibold text-base md:text-xl'>+91 123 456 3698</span></h1>
                            </li>

                            <li className="flex items-center gap-5 text-white mb-5 text-xs md:text-sm">
                                <Image src={email} alt='image'></Image>
                                <h1>Email ID <br /> <span className='outfit font-semibold text-base md:text-xl'>info@swarnim.com</span></h1>
                            </li>

                            <li className="flex items-center gap-5 text-white mb-5 text-xs md:text-sm">
                                <Image src={Address} alt='image'></Image>
                                <h1>Address <br /> <span className='outfit font-semibold text-base md:text-xl'>240, Identix House, Poddar Arcade to L. H. <br /> Road, Bhatar Road, Surat, Gujarat 395006</span></h1>
                            </li>
                        </ul>
                    </div>
                    {/* form section */}

                    <div className="bg-white p-6 md:p-6 lg:p-8 rounded-[10px] shadow-lg border border-[#C4EDD7] ml-auto">
  <form className="space-y-4">
    <input 
      type="text" 
      placeholder="Full Name" 
      className="w-full p-3 md:p-3 lg:p-[10px] outfit text-xs md:text-sm font-medium text-[#333333] bg-[#ECF4F1] border border-[#C4EDD7] focus:border-[#105F62] focus:outline-none" 
    />
    <div className="flex flex-col md:flex-row gap-5">
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full p-3 md:p-3 lg:p-[10px] outfit  text-xs md:text-sm font-medium text-[#333333] bg-[#ECF4F1] border border-[#C4EDD7] focus:border-[#105F62] focus:outline-none" 
      />
      <input 
        type="tel" 
        placeholder="Phone Number" 
        className="w-full p-3 md:p-3 lg:p-[10px] outfit text-xs md:text-sm font-medium text-[#333333] bg-[#ECF4F1] border border-[#C4EDD7] focus:border-[#105F62] focus:outline-none" 
      />
    </div>
    <input 
      type="text" 
      placeholder="Subject" 
      className="w-full p-3 md:p-3 lg:p-[10px] outfit text-xs md:text-sm font-medium text-[#333333] bg-[#ECF4F1] border border-[#C4EDD7] focus:border-[#105F62] focus:outline-none" 
    />
    <textarea 
      placeholder="Type a Message" 
      className="w-full p-3 md:p-3 lg:p-[10px] outfit text-xs md:text-sm font-medium text-[#333333] bg-[#ECF4F1] border border-[#C4EDD7] focus:border-[#105F62] focus:outline-none h-[80px] md:h-[100px] lg:h-[120px]"
    ></textarea>
    <div className="flex flex-col md:flex-row gap-4 pt-4">
      <button 
        type="reset" 
        className="bg-[#105F62] p-3 md:p-3 lg:p-[10px] h-[40px] w-full md:w-1/2 uppercase text-white outfit text-sm md:text-base font-semibold"
      >
        Clear
      </button>
      <button 
        type="submit" 
        className="bg-[#105F62] text-white p-3 md:p-3 lg:p-[10px] h-[40px] w-full md:w-1/2 uppercase outfit text-sm md:text-base font-semibold"
      >
        Submit
      </button>
    </div>
  </form>
</div>

                </div>
            </div>
        </div>

        <div className='container max-w-screen-xl lg:py-5 md:py-5 relative lg:px-5 md:px-4 mx-auto overflow-x-hidden items-center justify-between md:gap-[70px] px-4 py-5 '>
            <div className="md:grid md:grid-cols-2 gap-10">
                <div>
                <Image src={Footer} alt='image' className="mb-4 w-[70%] lg:w-[50%]"></Image>
                <p className='text-[#072B2C] text-justify outfit font-normal text-xs md:text-sm lg:text-base '>Lorem ipsum dolor sit amet consectetur. Fames quam amet sit <br /> lacinia viverra. Ac sapien orci tortor mauris at. Imperdiet <br /> vulputate augue est quam nunc faucibus nunc risus cras. Vulputate <br /> nisi ut etiam vitae ac. Enim mus est faucibus nec et id purus. Erat <br /> pulvinar eget eu dui massa eget. Morbi viverra nisl blandit nunc <br /> senectus imperdiet accumsan. Odio facilisis.</p>
                </div>

                {/* Right side  */}
                <div className='lg:text-end pt-5 text-justify'>
                    <h3 className="md:text-xl lg:text-2xl font-black outfit text-[#43916F] md:text-end uppercase">Subscribe Our <br /> letest Newsletter</h3>
                    <p className='text-xs md:text-sm lg:text-base text-[#333333] font-normal mt-2 leading-5 md:text-end'>Join our online forums or communities where you can interact <br /> with other Fix Pay Agents and get advice and support.</p>

                <div className="mt-4 md:mt-3 flex flex-col md:flex-row md:items-center justify-center md:justify-end">
                <input type="email" placeholder="Email" className="p-2 w-full max-w-[330px] md:max-w-[300px] border border-[#C4EDD7] bg-[#ECF4F1]"/>
                <button className='p-2 bg-[#105F62] text-white mt-2 md:mt-0 md:ml-2 outfit lg:px-4 md:px-3'>SUBSCRIBE</button>
                </div>

                <div className='text-xs md:text-sm lg:text-base font-normal text-[#072B2C] outfit mt-5 text-center md:text-end'>
                    <a href="#">Privacy | Terms | Legal | Cookie Preferences</a>
                </div>

                </div>


            </div>
        </div>

        <div className="container max-w-screen-xl  py-0 md:py-5 relative px-0 md:px-4 mx-auto overflow-x-hidden text-black  text-center flex flex-col md:flex-row justify-between items-center  border-t border-[#C4EDD7] space-y-4 md:space-y-0">
            <p>©2020 All Rights Reserved. Koffeekodes® is a registered trademark. </p>
            <div className="flex justify-center space-x-4 mt-2 md:mt-0">
                <a href=""><Image src={Youtube} alt='' className="w-5 md:w-6 lg:w-8"></Image></a>
                <a href=""><Image src={Instagram} alt='' className="w-5 md:w-6 lg:w-8"></Image></a>
                <a href=""><Image src={Facebook} alt='' className="w-5 md:w-6 lg:w-8"></Image></a>

            </div>
        </div>
    </section>
      
    </>
  )
}

export default Contact
