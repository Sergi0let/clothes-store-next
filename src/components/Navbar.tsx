"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <ul className="h-100% min-h-100% absolute  right-0 top-0 w-screen space-x-6 bg-base-100">
      <li className="text-xl hover:font-semibold hover:text-blue-900">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl hover:font-semibold hover:text-blue-900">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl hover:font-semibold hover:text-blue-900">
        <Link href="/">Home</Link>
      </li>
      <li className="text-xl hover:font-semibold hover:text-blue-900">
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
}
