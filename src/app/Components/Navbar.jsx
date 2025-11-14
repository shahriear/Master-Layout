import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-amber-900 text-xl py-5">
      <ul className="flex justify-center gap-5">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar