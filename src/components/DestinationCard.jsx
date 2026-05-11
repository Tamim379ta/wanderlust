import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci';

const DeestinationCard = ({ destination }) => {
  const { _id, imageUrl, country, destinationName, price, duration } = destination;
  return (
    <div>

      <Image
        src={imageUrl}
        alt='Image'
        width={300}
        height={300}
      />

      <div className='mt-3'>
        <div className='flex gap-1 items-center text-gray-400'>
          <CiLocationOn />
          <p>{country}</p>
        </div>

        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-semibold'>{destinationName}</h1>
          <p className='text-2xl'>${price}<span className='text-gray-400 text-xs'>/Person</span> </p>
        </div>

        <div>
          <p className='flex items-center gap-1 text-gray-400'> <CiCalendarDate /> {duration}</p>
        </div>

        <Link
          href={`/destinations/${_id}`}>
          <button className='text-xl underline text-sky-400 flex items-center gap-2 '> BookNow <BsArrowUpRight /></button>
        </Link>
      </div>

    </div>
  );
};

export default DeestinationCard;