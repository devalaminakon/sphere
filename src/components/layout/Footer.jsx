import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import PhoneIcon from '../../icons/PhoneIcon'
import EnvelopIcon from '../../icons/EnvelopIcon'

const Footer = () => {

  return (
    <div className='text-black '>
      <Container>
        <div className='mt-[178px] mb-16 flex  justify-between '>
          <div className="flex flex-col justify-between w-[380px]  ">
            <div><img src="./images/logo/logo_footer.png" alt="logo_footer" /></div>
            <p className='para'>Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc.</p>
          </div>
          <div className="flex justify-between items-start gap-[72px] ">
            <div className="capitalize para ">
              <h4 className='text-black font-montserrat text-[22px] font-extrabold leading-8 mb-3 '>Company</h4>
              <ul className='flex flex-col gap-4 para leading-[28.8px] '>
              <li className='text-black hover:text-primary'><Link to={"#"}>About Us</Link></li>
              <li className='text-black hover:text-primary'><Link to={"#"}>Products Digital</Link></li>
              <li className='text-black hover:text-primary'><Link to={"#"}>Customer Reviews</Link></li>
            </ul>
            </div>
            <div className="capitalize para ">
              <h4 className='text-black font-montserrat text-[22px] font-extrabold leading-8 mb-3 '>Information</h4>
              <ul className='flex flex-col gap-4 para leading-[28.8px] '>
              <li className='text-black hover:text-primary'><Link to={"#"}>Help Center</Link></li>
              <li className='text-black hover:text-primary'><Link to={"#"}>Payment Methods</Link></li>
              <li className='text-black hover:text-primary'><Link to={"#"}>Return & Refund</Link></li>
            </ul>
            </div>
            <div className="capitalize para ">
              <h4 className='text-black font-montserrat text-[22px] font-extrabold leading-8 mb-3 '>Contact</h4>
              <ul className='flex flex-col gap-4 para leading-[28.8px] '>
              <li className='text-black hover:text-primary'><Link className='flex gap-2.5 ' to={"tel:12245235123"}> <PhoneIcon /> (+1) 123-456-7890</Link></li>
              <li className='text-black hover:text-primary'><Link className='flex gap-2.5 ' to={"mailto:abc@example.com"}> <EnvelopIcon /> email@youremail.com</Link></li>
            </ul>
            </div>
            
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer