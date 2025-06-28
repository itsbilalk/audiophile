import Image from "next/image";
import menuIcon from "../../../public/shared/tablet/icon-hamburger.svg";
import logo from "../../../public/shared/desktop/logo.svg";
import cart from "../../../public/shared/desktop/icon-cart.svg";

export default function Header() {
  return (
    <div className="bg-contain bg-no-repeat bg-[url(../../public/home/mobile/image-header.jpg)] md:bg-[url(../../public/home/tablet/image-header.jpg)] min-h-[750px] md:min-h-[1000px] w-full">
      <div className="flex justify-between w-full pt-5 pl-8 pr-8  pb-4 border-b-[var(--colour-grey)] border-b-1">
        <Image
          src={menuIcon}
          alt="Open menu to see categories"
          className="w-4 h-4"
        />
        <Image src={logo} alt="Audiophile logo" width={143} height={25} />
        <Image
          src={cart}
          alt="Open cart to see the items added to it"
          width={23}
          height={20}
        />
      </div>
    </div>
  );
}
