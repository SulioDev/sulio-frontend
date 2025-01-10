// components/Navbar.jsx or .tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="navbar px-4 md:px-6">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Sulio Art</a>
      </div>
      <div className="dropdown dropdown-end hidden md:block">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              alt="User avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              fill
              sizes="40px"
              priority
              className="object-cover"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}