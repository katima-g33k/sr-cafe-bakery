import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <Image className="bg-white rounded-full" src="/logo.png" alt="logo" height={80} width={80} />
  );
}
