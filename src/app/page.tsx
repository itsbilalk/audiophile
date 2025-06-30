import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <>
      <div className="min-h-screen md:w-full text-[var(--colour-white)]">
        <div className=" flex flex-col bg-contain bg-no-repeat bg-[url(../../public/home/mobile/image-header.jpg)] md:bg-[url(../../public/home/tablet/image-header.jpg)]  xl:bg-[url(../../public/home/desktop/image-hero.jpg)] min-h-[550px]  bg-center">
          <Header />
          <div className="flex flex-col w-94.5 justify-center items-center m-auto text-center xl:ml-[23%] ">
            <p className="tracking-[0.625em] uppercase text-[#ffffff80] text-[0.875rem]">
              new product
            </p>
            <h1 className="font-bold text-[2.25rem] tracking-[0.072em] leading-14.5 uppercase mt-4 md:text-[3.5rem] ">
              xx99 mark II headphones
            </h1>
            <p className="mt-6 text-[0.938rem] text-center ml-6 mr-6 text-[#ffffff80] font-medium md:w-87">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="mt-7 uppercase w-40 h-10 bg-[var(--colour-dark-orange)] hover:bg-[var(--colour-light-orange)] cursor-pointer">
              see product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
