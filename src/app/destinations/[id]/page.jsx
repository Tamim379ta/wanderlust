import BookingCard from "@/components/BookingCard";
import Delete from "@/components/Delete";
import EditModal from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";

const DestinationDetailsPage = async ({ params }) => {

  const { id } = await params
  const token = await auth.api.getToken({
    headers: await headers()
  })
console.log(token)
  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    headers: {
      authrization: `Bearer ${token.token}`
    }
  });
  const data = await res.json();

  const { _id, imageUrl, country, description, destinationName, price, duration } = data;

  return (
    <div className="container mx-auto mb-10">
      <div className="flex justify-between p-3 shadow-2xl border border-gray-300 rounded-2xl mb-2">
        <Link
          className="flex items-center gap-2 underline text-sky-400"
          href={'/destinations'}> <FaArrowLeftLong /> Back to Destinatin
        </Link>

        <div className="gap-2 flex">
          <EditModal data={data} />
          <Delete data={data} />
        </div>
      </div>
      <Card>
        <Image
          className="w-full h-120 object-cover py-5 px-20 "
          src={imageUrl}
          alt='Image'
          width={500}
          height={500}
        />

        <div className='mt-3 flex justify-between gap-10 px-10'>
          <div className="flex-1">
            <div className='flex gap-1 items-center text-gray-400'>
              <CiLocationOn />
              <p>{country}</p>
            </div>

            <div className='flex justify-between items-center'>
              <h1 className='text-2xl font-semibold'>{destinationName}</h1>
            </div>

            <div>
              <p className='text-xl'>${price}<span className='text-gray-400 text-xs'>/Person</span> </p>
              <p className='flex items-center gap-1 text-gray-400'> <CiCalendarDate /> {duration}</p>
              <p className="text-xl font-semibold">Overview</p>
              <p>{description}</p>
            </div>
          </div>
          <div className="flex-1">
           <BookingCard data={data}/>
          </div>


        </div>
      </Card>



    </div>
  );
};

export default DestinationDetailsPage;