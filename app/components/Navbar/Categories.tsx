'use client';

import Container from "../Container";

import { IoDiamond } from 'react-icons/io5';
import { BsSnow } from 'react-icons/bs';
import { FaSkiing } from 'react-icons/fa';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { GiBarn, GiCastle, GiCaveEntrance, GiDesert, GiFishing, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property has windmills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'CountrySide',
        icon: TbMountain,
        description: 'This property is in the countryside!!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: GiFishing,
        description: 'This property is close to a lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This property is in a castle!'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This property has camping activies!'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This property is freezing!'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This property is in the cave!'
    },
    {
        label: 'Desert',
        icon: GiDesert,
        description: 'This property is in the desert!'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This property is in the barn!'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is luxurious!'
    },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathName = usePathname();

  const isNamePage = pathName === '/';

  if (!isNamePage) {
    return null;
  }

  return (
    <Container>
        <>
        <Swiper
            breakpoints={{
                375: {
                    slidesPerView: 4,
                },
                475: {
                    slidesPerView: 5,
                },
                625: {
                    slidesPerView: 7,
                },
                768: {
                    slidesPerView: 8,
                },
                992: {
                    slidesPerView: 10,
                },
                1200: {
                    slidesPerView: 11,
                },
                1400: {
                    slidesPerView: 13,
                },
            }}
            slidesPerView={3}
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper pt-4"
        >
            {categories.map((item) => (
                <SwiperSlide key={item.label}>
                    <CategoryBox 
                        label={item.label}
                        selected={item.label === category}
                        icon={item.icon}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    </Container>
  )
}

export default Categories;