import React from "react";
import Image from "next/image";
import fecture from "@/image/fecture (1).svg";
import fecture1 from "@/image/fecture (2).svg";
import icon from "@/image/icon.svg";
import icon2 from "@/image/Invoice (1).svg";
import computer from "@/image/computing.svg";
import stack from "@/image/StackPlus (1).svg";
import moniter from "@/image/Monitor (1).svg";
import users from "@/image/UsersThree (1).svg";
import scroll from "@/image/Scroll.svg";
import chart from "@/image/ChartPie (1).svg";
import moni from "@/image/Monitor (2).svg";
import bank from "@/image/Bank.svg";
import chartline from "@/image/ChartLineUp.svg";
import device from "@/image/Devices.svg";
// import "@/app/fonts/globals.css"
function Modules() {
  return (
    <>
      <section className="p-3 lg:p-0">
        <div className="container max-w-screen-xl py-0 md:py-5 relative px-0 md:px-4 mx-auto overflow-x-hidden">
          {/* section header */}
          <div className="flex  justify-center items-center gap-10 py-6 text-[#43916F] font-extrabold outfit uppercase">
            <Image src={fecture1} width={0} height={0} alt="image"></Image>
            MODULES
            <Image src={fecture} width={0} height={0} alt="image"></Image>
          </div>

          {/* TITLE SECTION */}
          <div className="pb-5 p-3 lg:p-0 md:px-10">
            <h1 className="text-center outfit uppercase font-extrabold text-2xl sm:text-4xl text-[#072B2C] pb-4">
              Accounting and Billing Software
            </h1>
            <p className="text-center outfit text-sm sm:text-base font-normal pb-10">
              Know what modules CHAPTER.1 accounting and billing software offers
              and how it can help you make your business <br /> compliance more
              easier. Apart from that, it also gives you insight with intuitive
              business reports. 
            </p>
          </div>

          {/* dot section start */}
          <div className="lg:py-10">
            <div className="lg:flex items-start">
              {/* left side */}
              <div className="flex-1 flex-col space-y-8 relative">
                {/* box 1 */}
                <div className="flex items-center space-x-4 bg-[#ECF4F1] p-3 lg:w-[50%] lg:ml-[20%] relative lg:mb-10">
                  <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-md">
                    {/* icon */}
                    <Image src={icon} width={0} height={0} alt="image"></Image>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#43916F] uppercase outfit">
                      GST Accounting/ Reports
                    </h3>
                    <p className="text-[#072B2C] text-[10px] outfit font-normal ">
                      {" "}
                      Automate GST calculations and maintain accurate <br />{" "}
                      records for filing returns
                    </p>
                  </div>
                  {/* Dotted line with Moving Dot */}
                  <div className="dot bg-green-600 w-3 h-3 absolute left-[296px] top-[40px]" id="border"></div>
                  <div className="box1dot1 bg-green-600 w-[20px] h-[20px] rounded-full   absolute lg:left-[288px] border-2 border-white lg:top-[32px]"></div>
                  <div className="box1dot2 bg-green-600 w-[20px] h-[20px] rounded-full z-[999] absolute lg:left-[288px] border-2 border-white lg:top-[523px]"></div>
                </div>
                {/* Box 2 */}
                <div className="flex items-center space-x-4 bg-[#ECF4F1] p-3 lg:w-[50%] lg:ml-[10%] relative lg:mb-10">
                  <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-md">
                    {/* icon */}
                    <Image src={icon2} width={0} height={0} alt="image"></Image>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#43916F] uppercase outfit">
                      Expense Tracking
                    </h3>
                    <p className="text-[#072B2C] text-[10px] outfit font-normal ">
                      Categorize and monitor business <br /> expenses easily
                    </p>
                  </div>
                  <div
                    className=" bg-green-600 w-3 h-3 absolute left-[296px] top-[40px]"
                    id="border2"
                  ></div>
                  <div className="box2dot1 bg-green-600 w-[20px] h-[20px] rounded-full   absolute lg:left-[288px] border-2 border-white lg:top-[32px]"></div>
                  <div className="box2dot2 bg-green-600 w-[20px] h-[20px] rounded-full z-[999] absolute lg:left-[288px] border-2 border-white lg:top-[274px]"></div>
                </div>

                {/* Box 3 */}
                <div className="flex items-center space-x-4 bg-[#ECF4F1] p-3 lg:w-[50%] ">
                  <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-md">
                    {/* icon */}
                    <Image src={stack} width={0} height={0} alt="image"></Image>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#43916F] uppercase outfit">
                      Expense Tracking
                    </h3>
                    <p className="text-[#072B2C] text-[10px] outfit font-normal ">
                      Categorize and monitor business <br /> expenses easily
                    </p>
                  </div>

                  <div
                    className="absolute top-[293px] left-[299px] w-[495px] h-[248px] bg-transparent border-dashed  border-[#072B2C] border-t-[1px] md:top-[291px]"
                    id="border3"
                  ></div>
                  <div className="box3dot1 bg-green-600 w-[20px] h-[20px] rounded-full   absolute xl:left-[289px] border-2 border-white lg:top-[282px] md:left-[454px] lg:left-[453px]"></div>
                  <div className="box3dot2 bg-green-600 w-[20px] h-[20px] rounded-full  absolute xl:left-[492px] border-2 border-white lg:top-[282px] md:left-[454px] lg:left-[453px]"></div>
                  <div className="box3dot3 bg-green-600 w-[20px] h-[20px] rounded-full  absolute xl:left-[608px] border-2 border-white lg:top-[282px] md:left-[454px] lg:left-[453px]"></div>
                </div>

                {/* box 4 */}

                <div className="flex items-center space-x-4 bg-[#ECF4F1] p-3 lg:w-[50%] lg:ml-[10%] relative lg:mb-10">
                  <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-md">
                    {/* icon */}
                    <Image
                      src={moniter}
                      width={0}
                      height={0}
                      alt="image"
                    ></Image>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#43916F] uppercase outfit">
                      E-invoicing
                    </h3>
                    <p className="text-[#072B2C] text-[10px] outfit font-normal ">
                      Simplify the invoicing process with <br />
                      electronic invoicing
                    </p>
                  </div>
                </div>

                {/* box 5 */}
                <div className="flex items-center space-x-4 bg-[#ECF4F1] p-3 lg:w-[50%] lg:ml-[20%] relative lg:mb-10">
                  <div className="w-16 h-16 bg-gray-100 flex justify-center items-center rounded-md">
                    {/* icon */}
                    <Image src={users} width={0} height={0} alt="image"></Image>
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-[#43916F] uppercase outfit">
                      Multi-User Interface{" "}
                    </h3>
                    <p className="text-[#072B2C] text-[10px] outfit font-normal ">
                      {" "}
                      Set access levels in a multi-user interface to control{" "}
                      <br /> data visibility and editing for security.
                    </p>
                  </div>
                </div>
              </div>

              {/* right side : image */}
              <div className="flex-1  flex justify-center items-center my-auto  lg:mt-[124px] ">
                <Image
                  src={computer}
                  width={0}
                  height={0}
                  alt="computerlogin"
                ></Image>
              </div>
            </div>
          </div>

          {/*Modules Cards section  */}

          <div className="pt-5">
            <div className="  bg-[#ECF4F1] container mx-auto rounded-3xl p-5">
              {/* title section */}

              <div className="text-center  mb-6 p-5 sm:p-10">
                <h2 className="uppercase text-2xl lg:text-4xl font-extrabold text-[#072B2C] outfit lg:pb-2">
                  Accounting Solutions and Benefits
                </h2>
                <p className="text-[#072B2C] mt-2 outfit text-sm sm:text-base">
                  By leveraging these features and benefits, our accounting
                  software provides a comprehensive and efficient solution for{" "}
                  <br className="hidden sm:inline" /> managing all aspects of
                  your business finances, helping you achieve greater success
                  and growth.
                </p>
              </div>
              {/* cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* card 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-start">
                  <div className="mb-4 bg-[#ECF4F1] w-[50px] lg:w-[70px] rounded-full flex items-center justify-center p-2 mx-auto lg:mx-0">
                    <Image src={scroll} alt="icon"></Image>
                  </div>
                  <h3 className="lg:text-lg text-xl font-extrabold text-[#072B2C] outfit mt-4 uppercase">
                    Automated Invoicing
                  </h3>
                  <p className="text-[#072B2C] mt-2 text-sm lg:text-base font-normal outfit">
                    Save time with automated GST-compliant <br />
                    invoices, reducing manual errors and ensuring <br />
                    timely billing for your business transactions.
                  </p>
                </div>

                {/* card 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-start">
                  <div className="mb-4 bg-[#ECF4F1] w-[50px] lg:w-[70px] rounded-full flex items-center justify-center p-2 mx-auto lg:mx-0">
                    <Image src={chart} alt="icon"></Image>
                  </div>
                  <h3 className="lg:text-lg text-xl font-extrabold text-[#072B2C] outfit mt-4 uppercase">
                    Financial Reports
                  </h3>
                  <p className="text-[#072B2C] mt-2 text-sm lg:text-base font-normal outfit">
                    Access instant financial insights with <br /> comprehensive
                    reports, helping you make <br /> informed business decisions
                    anytime, anywhere.
                  </p>
                </div>

                {/* card 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-start">
                  <div className="mb-4 bg-[#ECF4F1] w-[50px] lg:w-[70px] rounded-full flex items-center justify-center p-2 mx-auto lg:mx-0">
                    <Image src={moni} alt="icon"></Image>
                  </div>
                  <h3 className="lg:text-lg text-xl font-extrabold text-[#072B2C] outfit mt-4 uppercase">
                    E-Way Bill & E-Invoicing
                  </h3>
                  <p className="text-[#072B2C] mt-2 text-sm lg:text-base font-normal outfit">
                    Generate E-Way bills and e-invoices directly <br /> from the
                    platform, ensuring compliance with tax <br />
                    laws while streamlining your logistics.
                  </p>
                </div>

                {/* card 4 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-start">
                  <div className="mb-4 bg-[#ECF4F1] w-[50px] lg:w-[70px] rounded-full flex items-center justify-center p-2 mx-auto lg:mx-0">
                    <Image src={bank} alt="icon"></Image>
                  </div>
                  <h3 className="lg:text-lg text-xl font-extrabold text-[#072B2C] outfit mt-4 uppercase">
                    Bank Reconciliation
                  </h3>
                  <p className="text-[#072B2C] mt-2 text-sm lg:text-base font-normal outfit">
                    Sync your bank accounts for seamless <br /> reconciliation.
                    Automatically import and match <br /> transactions, reducing
                    manual entry and errors.
                  </p>
                </div>

                {/* card 5 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-start">
                  <div className="mb-4 bg-[#ECF4F1] w-[50px] lg:w-[70px] rounded-full flex items-center justify-center p-2 mx-auto lg:mx-0">
                    <Image src={chartline} alt="icon"></Image>
                  </div>
                  <h3 className="lg:text-lg text-xl font-extrabold text-[#072B2C] outfit mt-4 uppercase">
                    Profit & Loss Tracker
                  </h3>
                  <p className="text-[#072B2C] mt-2 text-sm lg:text-base font-normal outfit">
                    Quickly assess your business&apos;s profitability with{" "}
                    <br /> detailed, real-time profit and loss statements,{" "}
                    <br />
                    helping you make informed financial decisions.
                  </p>
                </div>

                {/* card 6 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center lg:text-start">
                  <div className="mb-4 bg-[#ECF4F1] w-[50px] lg:w-[70px] rounded-full flex items-center justify-center p-2 mx-auto lg:mx-0">
                    <Image src={device} alt="icon"></Image>
                  </div>
                  <h3 className="lg:text-lg text-xl font-extrabold text-[#072B2C] outfit mt-4 uppercase">
                    Multi-Device Access
                  </h3>
                  <p className="text-[#072B2C] mt-2 text-sm lg:text-base font-normal outfit">
                    Manage finances seamlessly across mobile,
                    <br /> tablet, and desktop with real-time updates and <br />
                    synchronized data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Modules;
