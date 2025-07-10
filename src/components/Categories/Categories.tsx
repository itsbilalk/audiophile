import Image from "next/image";
import Link from "next/link";
import arrowRight from "../../../public/shared/desktop/icon-arrow-right.svg";
import headphones from "../../../public/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../../public/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "../../../public/shared/desktop/image-category-thumbnail-earphones.png";

const categories = [
  { title: "headphones", path: headphones },
  { title: "speakers", path: speakers },
  { title: "earphones", path: earphones },
];

export const Categories = () => {
  return (
    <div className="self-center w-full mt-10 md:flex md:justify-center md:align-middle">
      <div
        className="bg-[var(--colour-dark-grey)] border-r-2 ml-6 mr-6 mb-12 self flex-col text-center pb-5.5   md:mt-24 md:mb-24 md:w-full xl:ml-0 xl:mr-0"
        key={categories[0].title}
      >
        <Image
          src={categories[0].path}
          alt={`${categories[0].title} category picture`}
          className="w-29 h-26 xl:w-30 xl:h-30 ml-auto mr-auto relative top-[-2rem]"
        />
        <p className="uppercase font-bold leading-1.5 text-black text-[1rem] tracking-[0.067em] md:ml-10 md:mr-10">
          {categories[0].title}
        </p>
        <Link
          href={"/"}
          className="subtitle text-[#00000080] flex justify-center mt-4"
        >
          shop
          <Image
            src={arrowRight}
            alt={`link to ${categories[0].title} category`}
            className="w-1.5 h-2.5 self-center  ml-3"
          />
        </Link>
      </div>
      <div
        className="bg-[var(--colour-dark-grey)] border-r-2 ml-6 mr-6 mb-12 self flex-col text-center pb-5.5   md:mt-24 md:mb-24 md:w-full xl:mr-0"
        key={categories[1].title}
      >
        <Image
          src={categories[1].path}
          alt={`${categories[1].title} category picture`}
          className="w-29 h-26 xl:w-30 xl:h-30 ml-auto mr-auto relative top-[-2rem]"
        />
        <p className="uppercase font-bold leading-1.5 text-black text-[1rem] tracking-[0.067em] md:ml-10 md:mr-10">
          {categories[1].title}
        </p>
        <Link
          href={"/"}
          className="subtitle text-[#00000080] flex justify-center mt-4"
        >
          shop
          <Image
            src={arrowRight}
            alt={`link to ${categories[1].title} category`}
            className="w-1.5 h-2.5 self-center  ml-3"
          />
        </Link>
      </div>
      <div
        className="bg-[var(--colour-dark-grey)] border-r-2 ml-6 mr-6 mb-12 self flex-col text-center pb-5.5   md:mt-24 md:mb-24 md:w-full xl:mr-0"
        key={categories[2].title}
      >
        <Image
          src={categories[2].path}
          alt={`${categories[2].title} category picture`}
          className="w-29 h-26 xl:w-30 xl:h-30 ml-auto mr-auto relative top-[-2rem]"
        />
        <p className="uppercase font-bold leading-1.5 text-black text-[1rem] tracking-[0.067em] md:ml-10 md:mr-10">
          {categories[2].title}
        </p>
        <Link
          href={"/"}
          className="subtitle text-[#00000080] flex justify-center mt-4"
        >
          shop
          <Image
            src={arrowRight}
            alt={`link to ${categories[2].title} category`}
            className="w-1.5 h-2.5 self-center  ml-3"
          />
        </Link>
      </div>
    </div>
  );
};
