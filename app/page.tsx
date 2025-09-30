import AcmeLogo from "@/app/ui/acme-logo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { poppins } from "@/app/ui/fonts";
import { GrTechnology } from "react-icons/gr";
import {
  MdLocalShipping,
  MdAutoAwesome,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import { GiCrane } from "react-icons/gi";
import { PiBuildingsDuotone } from "react-icons/pi";
import { TbBuildingCarousel } from "react-icons/tb";

// import styles from "@/app/ui/home.module.css";
import Image from "next/image";
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col md:p-6 p-2">
      {/* <div className={styles.shape} /> */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-center  rounded-lg bg-gray-50 md:w-2/4 p-4">
          <div className="flex flex-col w-full justify-center md:items-start  items-center">
            <strong className="text-[20px] md:text-[30px]">Welcome to </strong>
            <strong className="text-[35px] md:text-[80px]">
              Athena Globals.
            </strong>
            <div className="flex w-full p-1 md:p-4 flex-wrap justify-evenly text-[10px] md:text-[16px]">
              <span className="flex justify-center items-center text-gray-500">
                <MdAutoAwesome className="text-xs mr-1 hidden md:block" />
                AI
              </span>
              <span className="flex justify-center items-center text-gray-500 ml-5">
                <GrTechnology className="text-xs mr-1 hidden md:block" />
                CRM
              </span>
              <span className="flex justify-center items-center text-gray-500 ml-5">
                <MdLocalShipping className="text-xs mr-1 hidden md:block" />
                Ex-Imports
              </span>
              <span className="flex justify-center items-center text-gray-500 ml-5">
                <IoCarSportOutline className="text-xs mr-1 hidden md:block" />
                Auto
              </span>
              <span className="flex justify-center items-center text-gray-500 ml-5">
                <GiCrane className="text-xs mr-1 hidden md:block" />
                Heavy Machinery
              </span>
              <span className="flex justify-center items-center text-gray-500 ml-5">
                <PiBuildingsDuotone className="text-xs mr-1 hidden md:block" />
                Construction
              </span>
              <span className="flex justify-center items-center text-gray-500 ml-5">
                <MdOutlineRealEstateAgent className="text-xs mr-1 hidden md:block" />
                Real Estates
              </span>
              <span className="flex justify-center items-center text-gray-500 ml-5">
                <TbBuildingCarousel className="text-xs mr-1 hidden md:block" />
                Entertainments
              </span>
            </div>
          </div>
          <Link
            href="/login"
            className="flex items-center gap-5 self-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base my-5"
          >
            <span className={`${poppins.className} font-bold`}>Log in</span>{" "}
            <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center md:w-2/4 p-4">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="md:hidden block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
