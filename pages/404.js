import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

export default function Custom404() {
  const isBigScreen = useMediaQuery({ minWidth: 900 });
  return (
    <div className="flex items-center flex-col lg:pt-9 lg:-ml-28 lg:gap-24 justify-center lg:flex-row">
      <Image
        alt="page not found"
        src="/404.svg"
        className="-rotate-360 "
        width={400}
        height={isBigScreen ? 570 : 400}
        objectFit="cover"
        hidden="true"
      />
      <div className="flex dark:text-white font-mono flex-col lg:items-start items-center justify-center gap-4">
        <div className="flex  items-center justify-center text-sm font-semibold gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <p>Status - 404</p>
        </div>

        <h1 className="font-extrabold text-2xl">Page Not Found</h1>
        <p className="mb-8">Lets get you back Home</p>

        <Link href="/">
          <a className="py-2 hover:bg-gray-700 cursor-pointer inline-block px-5 text-white bg-gray-500 rounded-md">
            Home
          </a>
        </Link>
      </div>
    </div>
  );
}
