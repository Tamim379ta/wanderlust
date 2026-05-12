"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <nav className="flex justify-between items-center bg-white p-5">
      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>

        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>

      <div >
        <Image
          src={"/assets/Wanderlast.png"}
          height={150}
          width={150}
          alt="logo"
        />
      </div>

      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        {
          user ? <>
            <Avatar>
              <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
              <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
            </Avatar>
            <li><Button onClick={async () => await authClient.signOut()} className={'rounded-[2px]'} variant="danger">Logout</Button></li>
          </> :
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </>
        }
      </ul>
    </nav>
  );
};

export default Navbar;