"use client";
import React from 'react';
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "@/components/btn.css";
import { Pagination, Navigation } from 'swiper/modules';
import { FaFacebook , FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';

const data =[
  {
    id:1,
    name:"Mahesh Chaudhary",
    img:"/member/President.jpg",
    review:"President",
    fbLink: "https://facebook.com",
    githubLink: "https://github.com",
    instaLink: "https://instagram.com",
    twitterLink: "https://twitter.com",
  },
  {
    id:2,
    name:"Sudip Parajuli",
    img:"/member/VPresident.jpg",
    review:"Vice-President",
    fbLink: "https://facebook.com",
    githubLink: "https://github.com",
    instaLink: "https://instagram.com",
    twitterLink: "https://twitter.com",

  },
  {
    id:3,
    name:"Sunil Poudel",
    img:"/member/Secretary.jpg",
    review:"Secretary",
    fbLink: "https://facebook.com",
    githubLink: "https://github.com",
    instaLink: "https://instagram.com",
    twitterLink: "https://twitter.com",
  },
  {
    id:4,
    name:"Safal Raj Basnet",
    img:"/member/ProjectM.jpg",
    review:"Project Manager",
    fbLink: "https://facebook.com",
    githubLink: "https://github.com",
    instaLink: "https://instagram.com",
    twitterLink: "https://twitter.com",
  },
  {
    id:5,
    name:"Nisha Karn",
    img:"/member/Treasurer.jpg",
    review:"Treasurer",
    fbLink: "https://facebook.com",
    githubLink: "https://github.com",
    instaLink: "https://instagram.com",
    twitterLink: "https://twitter.com",
  },
  {
    id:6,
    name:"Rishav Century",
    img:"/member/ExecutiveM.jpg",
    review:"Executive Member",
    fbLink: "https://facebook.com",
    githubLink: "https://github.com",
    instaLink: "https://instagram.com",
    twitterLink: "https://twitter.com",
  },
]
const Member = () => {
  return (
    <div className="w-[70%]  m-auto text-center">
      <h1 className='text-white font-bold text-xl mt-10'>MEMBERS</h1>
      <h2 className='text-white'>11th EXCESS Comitte Member</h2>
      <div className="mt-5">
      <Swiper
          spaceBetween={5}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true}}
          modules={[Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
        >
          {data.map((d)=>(
            <SwiperSlide key={d.id}>
              <div className='h-[440px]'>
              <div className="bg-white h-[400px]  text-black rounded-3xl">
                <div className="bg-gray-600 rounded-t-3xl flex justify-center items-center">
                  <img src={d.img} alt="" className=" object-cover border-2 border-white p-1 lg:w-36 lg:h-36 rounded-full m-10 w-28 h-28 "/>
                </div>

                <div className="flex flex-col justify-center text-center items-center">
                  <p className="bg-blue-200 font-bold p-1 mt-1 border-l-4 border-r-4 border-blue-600  text-blue-600">{d.name}</p>
                  <p className="pt-3">{d.review}</p>

                  <div className='flex flex-row'>
                  <a href={d.fbLink}>
                  <FaFacebook size={20} className="m-1 text-gray-600 hover:text-blue-800 translate-y-16" />
                 </a>
                 <a href={d.githubLink}>
                  <FaGithub size={20} className="m-1 text-gray-600 hover:text-black translate-y-16" />
                 </a>
                 <a href={d.instaLink}>
                  <FaInstagram size={20} className="m-1 text-gray-600 hover:text-pink-600 translate-y-16" />
                 </a>
                 <a href={d.twitterLink}>
                  <FaTwitter size={20} className="m-1 text-gray-600 hover:text-blue-800 translate-y-16" />
                 </a>
                 </div>
                </div>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Member;
