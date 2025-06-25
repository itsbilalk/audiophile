import Image from "../../public/assets/home/tablet/image-header.jpg";

export default function Home() {
  return (
    <>
      <div className=" min-h-screen">
        <div className="bg-contain bg-no-repeat bg-[url(../../public/assets/home/mobile/image-header.jpg)] md:bg-[url(../../public/assets/home/tablet/image-header.jpg)] min-h-[750px] md:min-h-[1000px] w-full"></div>
      </div>
    </>
  );
}
