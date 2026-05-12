import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BsEye } from "react-icons/bs";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import BookingCancel from "./BookingCancel";

const BookingsPageCard = ({ des }) => {
  const { userName,destinationId, destinationName,_id, price, country, imageUrl, departureDate, userId, } = des
  return (
    <div className=" flex gap-5 p-5 shadow-xl border my-5">
      <Image
        src={imageUrl}
        alt={destinationName}
        width={200}
        height={200}
      />

      <div className="space-y-2 flex-1">
        <h1 className="text-2xl font-bold">{destinationName}</h1>
        <p className="flex items-center gap-1 text-muted"><CiCalendarDate /> Departure: {new Date(departureDate).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}</p>
        <p className="flex items-center gap-1 text-muted"> <CiLocationOn /> Booking ID: {userId}</p>
        <div className="flex  justify-between">
          <p className="text-xl font-bold text-cyan-500">${price}</p>
           <div className="flex gap-2">
            <BookingCancel bookingId={_id}/>
         <Link href={`/destinations/${destinationId}`}>   <Button className={'rounded-none text-white bg-cyan-500'} variant="outline"> <BsEye/> View</Button> </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsPageCard;