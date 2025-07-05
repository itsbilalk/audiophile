import Header from "@/components/Header/Header";

import { Categories } from "@/components/Categories/Categories";
import Image from "next/image";
import speaker from "../../public/home/mobile/image-speaker-zx9.png";

export default function Home() {
  return (
    <>
      <div className="min-h-screen md:w-full text-[var(--colour-white)]">
        <div className=" flex flex-col bg-contain bg-no-repeat bg-[url(../../public/home/mobile/image-header.jpg)] md:bg-[url(../../public/home/tablet/image-header.jpg)]  xl:bg-[url(../../public/home/desktop/image-hero.jpg)] min-h-[550px]  bg-center">
          <Header />
          <div className="flex flex-col md:w-94.5 justify-center items-center xl:items-start m-auto text-center xl:ml-[23%] ">
            <p className="tracking-[0.625em] uppercase text-[#ffffff80] text-[0.875rem] xl:mr-auto pt-6">
              new product
            </p>
            <h1 className="font-bold text-[2.25rem] tracking-[0.072em] leading-14.5 uppercase mt-4 md:text-[3.5rem] xl:text-start">
              xx99 mark II headphones
            </h1>
            <p className="mt-6 text-[0.938rem] text-center xl:text-start ml-6 xl:ml-0 mr-6 text-[#ffffff80] font-medium md:w-87 wrap-break-word pr-7 pl-7 md:pl-0 md:pr-0">
              Experience natural, life like audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="mt-7 uppercase w-40 h-10 bg-[var(--colour-dark-orange)] hover:bg-[var(--colour-light-orange)] cursor-pointer">
              see product
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[var(--colour-white)] align-middle ">
          <Categories />
          <div className="bg-[var(--colour-dark-orange)]  bg-[50%_-7.125rem] bg-cover ml-6 mr-6 bg-[url(../../public/home/desktop/pattern-circles.svg)] bg-no-repeat text-center">
            <Image
              src={speaker}
              alt="image of the zx9 speaker"
              className="h-52 w-43 ml-auto mr-auto mt-13.5"
            />
            <h2 className="h3 uppercase mt-8 ml-6 mr-6">zx9 speaker</h2>
            <p className="mt-8">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="mb-13.5 mt-6">See product</button>
          </div>

          <Categories />
        </div>
      </div>
    </>
  );
}
