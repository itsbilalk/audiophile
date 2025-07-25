import Header from "@/components/Header/Header";

import { Categories } from "@/components/Categories/Categories";
import Image from "next/image";
import speakerIconForMobile from "../../public/home/mobile/image-speaker-zx9.png";
import speakerIconForDesktop from "../../public/home/desktop/image-speaker-zx9.png";

import earphonesYx1Mobile from "../../public/home/mobile/image-earphones-yx1.jpg";
import earphonesYx1Tablet from "../../public/home/tablet/image-earphones-yx1.jpg";
import earphonesYx1Desktop from "../../public/home/desktop/image-earphones-yx1.jpg";

import bestGearMobileImage from "../../public/shared/mobile/image-best-gear.jpg";
import bestGearTabletImaget from "../../public/shared/tablet/image-best-gear.jpg";
import bestGearDesktopImage from "../../public/shared/desktop/image-best-gear.jpg";

import logo from "../../public/shared/desktop/logo.svg";

import facebookIcon from "../../public/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../public/shared/desktop/icon-twitter.svg";
import instagramIcon from "../../public/shared/desktop/icon-instagram.svg";

import Link from "next/link";

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
            <button className="mt-7 uppercase w-40 h-10 bg-[var(--colour-dark-orange)] hover:bg-[var(--colour-light-orange)] cursor-pointer lg:mr-auto transition-colors">
              see product
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[var(--colour-white)] align-middle ">
          <div className="ml-2 mr-2 xl:ml-auto xl:w-[55%] xl:mr-auto">
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
                <button className="uppercase tracking-[0.072em] font-bold  mb-13.5 mt-6 bg-black w-40 h-12 self-center hover:bg-(--color-light-black) cursor-pointer transition-colors">
                  See product
                </button>
              </div>
            </div>

            <div className="flex flex-col  ml-6 mr-6 xl:mx-0 mt-6 text-black text-start justify-center bg-cover bg-[90%] bg-no-repeat bg-[url(../../public/home/mobile/image-speaker-zx7.jpg)] md:bg-[url(../../public/home/tablet/image-speaker-zx7.jpg)] lg:bg-[url(../../public/home/desktop/image-speaker-zx7.jpg)] min-h-[300px] rounded-lg">
              <h1 className="uppercase tracking-[0.072em] text-[1.75rem] font-bold  ml-6 md:ml-15.5">
                zx7 speaker
              </h1>

              <button className="button transition-colors">see product</button>
            </div>

            <div className="flex flex-col my-6 mx-6 md:flex-row gap-6  xl:mx-0">
              <Image
                src={earphonesYx1Mobile}
                alt="earphones yx1"
                className="md:hidden rounded-lg"
                width={350}
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
              <div className=" bg-[var(--colour-dark-grey)] text-black flex flex-col md:w-full rounded-lg">
                <h1 className="uppercase tracking-[0.072em] text-[1.75rem] font-bold  ml-6 md:ml-15.5 mt-11 md:mt-auto">
                  yx1 earphones
                </h1>
                <button className="button mb-11 md:mb-auto transition-colors">
                  see product
                </button>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row-reverse mx-6 xl:mx-0  text-black my-30">
              <Image
                src={bestGearMobileImage}
                alt="best gear image"
                className="md:hidden rounded-lg"
                height={300}
                width={350}
              />
              <Image
                src={bestGearTabletImaget}
                alt="best gear image"
                className="hidden md:block lg:hidden  rounded-lg"
              />
              <Image
                src={bestGearDesktopImage}
                alt="best gear image"
                width={540}
                height={588}
                className="hidden lg:block  rounded-lg lg:h-[588px] lg:w-[540px]"
              />
              <div className="justify-center my-auto">
                <h1 className="uppercase tracking-[0.036em] text-[1.75rem] lg:text-[2.5rem] md:text-[2.75rem] leading-10 font-bold mt-10 text-center lg:text-start lg:ml-auto">
                  bringing you the{" "}
                  <span className="text-[var(--colour-dark-orange)]">best</span>{" "}
                  <br className="hidden md:block lg:hidden" />
                  audio gear
                </h1>
                <p className="text-center mt-8 opacity-50 font-medium leading-6 md:mx-22 lg:text-start lg:mr-9 lg:ml-0 xl:mr-10">
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center align-middle text-center md:text-start md:mx-9.5 xl:w-[55%] xl:mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="mx-auto md:ml-0">
              <div className="w-[101px] h-[4px] bg-[var(--colour-dark-orange)] mx-auto md:ml-0"></div>
              <Image
                src={logo}
                alt="Audiophile logo"
                width={143}
                height={25}
                className="my-12 md:mb-8 md:mt-14"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8.5 tracking-[0.125em] text-[0.813rem] font-bold mb-12 md:mb-8 lg:mt-auto lg:ml-auto lg:mr-0">
              <Link
                href="/"
                className="hover:text-[var(--colour-dark-orange)] transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/"
                className="hover:text-[var(--colour-dark-orange)] transition-colors"
              >
                HEADPHONES
              </Link>
              <Link
                href="/"
                className="hover:text-[var(--colour-dark-orange)] transition-colors"
              >
                SPEAKERS
              </Link>
              <Link
                href="/"
                className="hover:text-[var(--colour-dark-orange)] transition-colors"
              >
                EARPHONES
              </Link>
            </div>
          </div>

          <p className="opacity-50 font-medium leading-6  lg:text-start mx-6 mb-12 md:mx-0 md:mb-20 lg:max-w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="flex flex-col md:flex-row h-fit">
            <p className="opacity-50 font-medium leading-6  lg:text-start md:h-fit md:mb-12">
              Copyright 2025. All Rights Reserved
            </p>
            <div className="flex gap-4 justify-center mt-12 md:mt-0 md:ml-auto mb-12 md:mb-auto lg:top-[-6rem] lg:relative ">
              <Image
                src={facebookIcon}
                alt="Facebook icon for social media navigation"
                width={24}
                height={24}
                className="cursor-pointer  svg-color"
              />
              <Image
                src={twitterIcon}
                alt="Twitter icon for social media navigation"
                width={24}
                height={24}
                className="cursor-pointer  svg-color"
              />
              <Image
                src={instagramIcon}
                alt="Instagram icon for social media navigation"
                width={24}
                height={24}
                className="cursor-pointer  svg-color"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
