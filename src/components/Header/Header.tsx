import Image from "next/image";
import menuIcon from "../../../public/shared/tablet/icon-hamburger.svg";
import logo from "../../../public/shared/desktop/logo.svg";
import cart from "../../../public/shared/desktop/icon-cart.svg";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between text-[var(--colour-white)] w-full pt-5 pl-8 pr-8 pb-4 border-b-1  border-b-[var(--colour-grey)] h-fit md:w-auto md:pl-0 md:pr-0 md:ml-8 md:mr-8 xl:ml-70 xl:mr-70 xl:w-auto">
      <Image
        src={menuIcon}
        alt="Open menu to see categories"
        className="w-4 h-4 xl:hidden self-center"
      />
      <Image
        src={logo}
        alt="Audiophile logo"
        width={143}
        height={25}
        className="h-fit self-center md:mr-auto md:ml-10.5 xl:ml-0"
      />
      <div className="hidden xl:flex flex-row gap-10 tracking-[0.125em] text-[0.813rem] xl:mr-auto">
        <Link href="/" className="hover:text-[var(--colour-dark-orange)]">
          HOME
        </Link>
        <Link href="/" className="hover:text-[var(--colour-dark-orange)]">
          HEADPHONES
        </Link>
        <Link href="/" className="hover:text-[var(--colour-dark-orange)]">
          SPEAKERS
        </Link>
        <Link href="/" className="hover:text-[var(--colour-dark-orange)]">
          EARPHONES
        </Link>
      </div>

      <Image
        src={cart}
        alt="Open cart to see the items added to it"
        width={23}
        height={20}
        className="h-fit self-center"
      />
    </div>
  );
}
