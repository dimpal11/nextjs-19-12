import React from 'react'
import Image from 'next/image'
import fecture from '@/image/fecture (1).svg'
import fecture1 from '@/image/fecture (2).svg'
import bro from '@/image/bro2.svg'
import bro3 from '@/image/bro3.svg'
import bro4 from '@/image/bro4.svg'

const Features = () => {
  return (
    <>
      <section className=" bg-[#ECF4F1] md:p-10">
        <div className="container max-w-screen-xl py-0 md:py-5 relative px-0 md:px-4 mx-auto overflow-x-hidden">
    {/* title section */}
        <div className='flex justify-center items-center lg:gap-10 gap-5 py-2 text-[#43916F] font-extrabold outfit'>
          <Image src={fecture1} width={0} height={0} alt='image' ></Image> 
          KEY FEATURES
          <Image src={fecture} width={0} height={0} alt='image'></Image>
        </div>

        <div className='pb-5 p-3'>
        <h1 className="flex justify-center outfit uppercase font-extrabold text-4xl text-[#072B2C] text-center pb-4">Everyday Business Accounting </h1>
        <p className="flex justify-center text-center outfit text-base font-normal pb-10">Our accounting software simplifies everyday financial tasks, empowering you to manage your <br/> finances effectively and achieve your business aspirations.</p>
        </div>

        {/* row section */}

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 p-3 lg:p-0">

          <div className="w-full bg-[#BEDACF] rounded-[10px] p-4 mb-4">
            <Image src={bro} alt='Invoice' className='mx-auto'></Image>
          </div>
          {/* Right side  */}
          <div className="w-full flex flex-col justify-center mb-4">
            <h3 className='text-xl font-bold text-green-700 uppercase outfit'>Seamless GST Invoicing, E-invoicing,<br/> and E-way Bills Creation</h3>
            <p className="text[#072B2C] mt-4 outfit text-base font-normal text-justify">Easily comply with government regulations and create customizable & <br/> fully compliant GST invoices, e-invoices, e-way bills, quotations, and other <br/> essential documents via GST Accounting Software. You can directly send <br/> them over WhatsApp or email and track when your clients view your <br/>invoice. Easily send automated reminders to collect payments on time.</p>
            <button className="mt-6 w-28  border-2 border-[#072B2C]  px-4 py-2 rounded font-semibold  text-[#072B2C] hover:bg-[#072B2C] hover:text-white transition">
              See More
          </button>
          </div>


          {/* second part left side */}
        <div className='w-full flex flex-col justify-center mb-4'>
          <h3 className='text-xl font-bold text-green-700 uppercase outfit'>Simplified GST Accounting, Ensure <br/> 100% GST Compliance</h3>

          <p className='text[#072B2C] mt-4 outfit text-base font-normal text-justify'>Automatically generate journal & voucher entries, balance sheets, trial <br/>balance reports, P&L statements, GSTR reports, and other important <br/> financial reports with Refrens GST Accounting Software. <br/> <br/>

          Ensure compliance with all GST guidelines. Generate E-way Bills, E- <br/>invoices, GSTR reports, TDS reports, and more with ease on Refrens GST <br/> Accounting Software.</p>
          <button className='mt-6 w-28  border-2 border-[#072B2C]  px-4 py-2 rounded font-semibold   text-[#072B2C] hover:bg-[#072B2C] hover:text-white transition'>See More</button>
        </div>
        {/* right side image  */}
          <div className='w-full bg-[#BEDACF] rounded-[10px] p-4 mb-4'>
            <Image src={bro3} width={0} height={0} alt='image' className='mx-auto'></Image>
          </div>

    {/* thrid start */}

    {/* left side image */}
    <div className='w-full bg-[#BEDACF] rounded-[10px] p-4'>
      <Image src={bro4} width={0} height={0} alt='image' className='mx-auto'></Image>
    </div>
      {/* right side text */}
      <div className='w-full flex flex-col justify-center'>
        <h3 className='text-xl font-bold text-green-700 uppercase outfit'>Streamline Inventory & Expense <br/> Management</h3>
        <p className='text[#072B2C] mt-4 outfit text-base font-normal text-justify'>Automatically update inventory & stock items with every invoice or <br/> expense entry. Record & track all types of expenses with ease such as <br/>inventory purchases, employee salaries/reimbursements, and more. Get a <br/> detailed vendor management dashboard to track all your accounts <br/>payable in one place with Refrens GST accounting software.</p>
        <button className='mt-6 w-28  border-2 border-[#072B2C]  px-4 py-2 rounded font-semibold   text-[#072B2C] hover:bg-[#072B2C] hover:text-white transition'>See More</button>
      </div>


        </div>

        </div>
      </section>
    </>
  )
}

export default Features
