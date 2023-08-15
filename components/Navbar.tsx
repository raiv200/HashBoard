import Image from "next/image";
import Link from "next/link";

import { NavLinks } from "@/constant";
import { getCurrentUser } from "@/lib/session";

import AuthProviders from "./AuthProviders";
import Button from "./Button";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const session = await getCurrentUser()

  return (
    <nav className='flexBetween navbar '>
      <div className=' flexStart gap-10  lg:w-1/3'>   
        <ul className='xl:flex hidden text-sm font-semibold  gap-7 '>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

<div className="flex flex-1 items-center justify-start lg:justify-center  lg:w-1/3">

      <Link href='/'>
          <Image
            src='/logo.svg'
            width={170}
            height={45}
            alt='logo'
            />
        </Link>
            </div>

      <div className='flex items-center justify-end gap-4 lg:w-1/3'>
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            <Link href="/create-project">
              <Button title='Share work' />
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
