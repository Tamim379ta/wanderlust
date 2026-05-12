"use client";

import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import { DateField, Label } from "@heroui/react";
import { useState } from 'react';


const BookingCard = ({ data }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const { price, _id, destinationName, imageUrl, country } = data;
  const [date, setDate] = useState(null);

  const handleBooking = async () => {
    const bookingsData = {
      userName: user.name,
      userId: user.id,
      userImage: user.image,
      destinationId: _id,
      departureDate: new Date(date),
      imageUrl,
      country,
      destinationName,
      price
    }
    const res = await fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(bookingsData)
    })
    const data = await res.json()
  }
  return (
    <div>
      <Card className="rounded-none">
        <p className="text-muted">Starting from</p>
        <p className="text-xl text-cyan-500">${price}</p>
        <p className="text-muted">per person</p>
        <DateField onChange={setDate} className="w-[256px]" name="date">
          <Label>Date</Label>
          <DateField.Group>
            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
          </DateField.Group>
        </DateField>

        <Button onClick={handleBooking} className={'w-full bg-cyan-500 rounded-xl'}>
          Book Now
        </Button>
      </Card>
    </div>
  );
};

export default BookingCard;