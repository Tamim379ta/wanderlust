"use client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { BiTrash } from "react-icons/bi";

const Delete = ({ data }) => {
  const { _id, destinationName } = data;
  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    })
    const data = await res.json()
    redirect('/destinations')

  }
  return (
    <div>
      <AlertDialog>
        <Button className={'rounded-xs text-red-500'} variant="outline"> <BiTrash /> Delete</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>{destinationName}</strong> and all of its
                  data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>

    </div>
  );
};

export default Delete;