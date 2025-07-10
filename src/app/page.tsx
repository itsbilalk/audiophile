import Header from "@/components/Header/Header";

import { Categories } from "@/components/Categories/Categories";
import Image from "next/image";
import speakerIconForMobile from "../../public/home/mobile/image-speaker-zx9.png";
import speakerIconForDesktop from "../../public/home/desktop/image-speaker-zx9.png";

import earphonesYx1Mobile from "../../public/home/mobile/image-earphones-yx1.jpg";
import earphonesYx1Tablet from "../../public/home/tablet/image-earphones-yx1.jpg";
import earphonesYx1Desktop from "../../public/home/desktop/image-earphones-yx1.jpg";

export default function Home() {
  return (
    <>
      <div className="min-h-screen md:w-full text-[var(--colour-white)]">
        <div className=" flex flex-col bg-contain bg-no-repeat bg-[url(../../public/home/mobile/image-header.jpg)] md:bg-[url(../../public/home/tablet/image-header.jpg)]  lg:bg-[url(../../public/home/desktop/image-hero.jpg)] min-h-[550px] xl:min-h-[700px] bg-center">
          <Header />
          <div className="flex flex-col md:w-94.5 justify-center items-center xl:items-start m-auto text-center lg:ml-8 xl:ml-[23%] ">
            <p className="tracking-[0.625em] uppercase text-[#ffffff80] text-[0.875rem] lg:mr-auto pt-6">
              new product
            </p>
            <h1 className="font-bold text-[2.25rem] tracking-[0.072em] leading-14.5 uppercase mt-4 md:text-[3.5rem] lg:text-start lg:mr-auto">
              xx99 mark II headphones
            </h1>
            <p className="mt-6 text-[0.938rem] text-center lg:text-start ml-6 lg:ml-0 lg:mr-auto mr-6 text-[#ffffff80] font-medium md:w-87 wrap-break-word pr-7 pl-7 md:pl-0 md:pr-0">
              Experience natural, life like audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="mt-7 uppercase w-40 h-10 bg-[var(--colour-dark-orange)] hover:bg-[var(--colour-light-orange)] cursor-pointer lg:mr-auto">
              see product
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[var(--colour-white)] align-middle ">
          <div className="ml-2 mr-2 xl:ml-auto xl:mr-auto">
            <Categories />
            <div className=" flex flex-col xl:ml-auto xl:mr-auto lg:flex-row bg-[var(--colour-dark-orange)]  bg-[50%_-9rem] bg-size-[auto_600px]  md:bg-[50%_-18.125rem] md:bg-size-[auto_900px] lg:bg-[-10.5rem_-2rem] lg:bg-size-[auto_980px] ml-6 mr-6 bg-[url(../../public/home/desktop/pattern-circles.svg)] bg-no-repeat text-center lg:text-start rounded-lg lg:overflow-hidden">
              <Image
                src={speakerIconForMobile}
                alt="image of the zx9 speaker"
                className="h-52 w-43 md:h-59 md:w-49.5 ml-auto mr-auto mt-13.5 lg:hidden"
              />
              <Image
                src={speakerIconForDesktop}
                alt="image of the zx9 speaker"
                className="h-[493px] w-[410.23px] ml-29 mr-auto mt-13.5 hidden lg:block lg:bottom-[-10px] lg:relative"
              />
              <div className="self-center mr-auto ml-auto xl:ml-34.5 xl:mr-24">
                <h2 className=" font-bold text-[2.25rem] tracking-[0.072em] leading-10 uppercase md:text-[3.5rem] md:tracking-[0.125em] md:leading-15 mt-8 ">
                  zx9 <br /> speaker
                </h2>
                <p className="mt-6 opacity-75 leading-6  ml-6 mr-6 lg:ml-0">
                  Upgrade to premium speakers that are <br /> phenomenally built
                  to deliver truly <br /> remarkable sound.
                </p>
                <button className="uppercase tracking-[0.072em] font-bold  mb-13.5 mt-6 bg-black w-40 h-12 self-center">
                  See product
                </button>
              </div>
            </div>

            <div className="flex flex-col  ml-6 mr-6 xl:mx-0 mt-6 text-black text-start justify-center bg-cover bg-[90%] bg-no-repeat bg-[url(../../public/home/mobile/image-speaker-zx7.jpg)] md:bg-[url(../../public/home/tablet/image-speaker-zx7.jpg)] lg:bg-[url(../../public/home/desktop/image-speaker-zx7.jpg)] min-h-[300px] rounded-lg">
              <h1 className="uppercase tracking-[0.072em] text-[1.75rem] font-bold  ml-6 md:ml-15.5">
                zx7 speaker
              </h1>

              <button className="button">see product</button>
            </div>

            <div className="flex flex-col my-6 mx-6 md:flex-row gap-6 lg:ml-0 lg:mr-0">
              <Image
                src={earphonesYx1Mobile}
                alt="earphones yx1"
                className="md:hidden rounded-lg"
                width={327}
                height={200}
              />
              <Image
                src={earphonesYx1Tablet}
                alt="earphones yx1"
                className="hidden md:block lg:hidden rounded-lg"
                width={339}
                height={320}
              />
              <Image
                src={earphonesYx1Desktop}
                alt="earphones yx1"
                className="hidden lg:block rounded-lg w-[540px] h-[320px]"
                width={540}
                height={320}
              />
              <div className="bg-[var(--colour-dark-grey)] text-black flex flex-col md:w-full rounded-lg">
                <h1 className="uppercase tracking-[0.072em] text-[1.75rem] font-bold  ml-6 md:ml-15.5 mt-11 md:mt-auto">
                  yx1 earphones
                </h1>
                <button className="button mb-11 md:mb-auto">see product</button>
              </div>
            </div>

            <Categories />
          </div>
        </div>
      </div>
    </>
  );
}
