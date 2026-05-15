import BookingsPageCard from "@/components/BookingsPageCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const BookingPage = async() => {
  const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
  })
  const user = session?.user
  const {id} = user;
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`)
  const bookings = await res.json()
  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-3xl">My Bookings</h1>
      <p>Manage and view your upcoming travel plans</p>
     <div>
       {
        bookings.map(des => 
          <BookingsPageCard key={des._id} des={des}></BookingsPageCard>
        )
      }
     </div>

    </div>
  );
};

export default BookingPage;