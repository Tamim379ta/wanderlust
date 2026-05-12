"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";

const BookingCancel = ({bookingId}) => {
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await res.json()
    window.location.reload()

  }
  return (
    <div>
      <AlertDialog>
        <Button className={'rounded-none text-red-500 border border-red-500'} variant="outline"> <BiTrash /> Cancel</Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete Bookings permanently?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete Booking
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>

    </div>
  );
};

export default BookingCancel;