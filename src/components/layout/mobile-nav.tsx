import { IoMdClose } from "react-icons/io";
import Link from "next/link";
type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <>
      <div
        className={` h-screen backdrop-blur-[2px] z-30 w-full fixed  left-0 top-0  ${isOpen ? "block" : "hidden"}`}
        onClick={onClose}
      />
      <div
        className={` transition-transform duration-300 ease-in-out z-30 relative h-full    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={onClose}
      >
        <div
          className=" bg-black text-white w-2/3  rounded-tr-2xl rounded-br-2xl p-2.5 h-screen py-6 flex flex-col absolute left-0 top-0  z-30 "
          onClick={(e) => e.stopPropagation()}
        >
          <IoMdClose className=" self-end mt-6" size={24} onClick={onClose} />
          <ul className=" flex flex-col gap-2 font-satoshi ">
            <li>
              <Link href={"/products"}>Shop</Link>
            </li>
            <li>
              <Link href={"/products"}>On Sale</Link>
            </li>
            <li>
              <Link href={"/products"}>New Arrivals</Link>
            </li>
            <li>
              <Link href={"/products"}>Brands</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
