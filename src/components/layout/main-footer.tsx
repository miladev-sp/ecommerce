import FooterForm from "./footer-form";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import FooterLinks from "./main-footer-links";
import Image from "next/image";
import visa from "@/public/icons/visa-card.png";
import idk from "@/public/icons/idk.png";
import paypal from "@/public/icons/paypal.png";
import applepay from "@/public/icons/applepay.png";
import google from "@/public/icons/google.png";
export default function MainFooter() {
  return (
    <>
      <footer>
        <FooterForm />
        <div className="px-6 pt-48 bg-[#F0F0F0] lg:flex lg:items-center lg:gap-8 lg:justify-center lg:px-20 pb-8 ">
          <div className="lg:flex-1">
            <h2 className="font-integral text-[28.85px]">SHOP.CO</h2>
            <p className="mt-2 font-satoshi font-normal text-[#00000099]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-2 mt-5">
              <Link
                href={"/"}
                className=" border rounded-2xl p-1 group hover:bg-black transition-colors"
              >
                <FaTwitter className="group-hover:text-white transition-colors" />
              </Link>
              <Link
                href={"/"}
                className=" border rounded-2xl p-1 group hover:bg-black transition-colors"
              >
                <FaFacebookF className="group-hover:text-white transition-colors" />
              </Link>
              <Link
                href={"/"}
                className=" border rounded-2xl p-1 group hover:bg-black transition-colors"
              >
                <FaInstagram className="group-hover:text-white transition-colors" />
              </Link>
              <Link
                href={"/"}
                className=" border rounded-2xl p-1 group hover:bg-black transition-colors"
              >
                <FaGithub className="group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
          <div className="mt-9 grid grid-cols-2 grid-rows-2 gap-5 lg:grid-cols-4 lg:grid-rows-1  xl:flex-2">
            <FooterLinks
              content={{
                link1: "About",
                link2: "Features",
                link3: "works",
                link4: "Career",
                heading: "Company",
              }}
            />
            <FooterLinks
              content={{
                link1: "Customer Support",
                link2: "Delivery Details",
                link3: "Terms & Conditions",
                link4: "Privacy Policy",
                heading: "HELP",
              }}
            />
            <FooterLinks
              content={{
                link1: "Account",
                link2: "Manage Deliveries",
                link3: "Orders",
                link4: "Payment",
                heading: "FAQ",
              }}
            />
            <FooterLinks
              content={{
                link1: "Free eBook",
                link2: "Development Tutorial",
                link3: "How to - Blog",
                link4: "Youtube Playlist",
                heading: "RESOURCES",
              }}
            />
          </div>
        </div>
        <div className="bg-[#F0F0F0]">
          <hr className="text-[#0000001A] pt-4 " />
          <div className="px-6  bg-[#F0F0F0]    lg:flex lg:justify-around ">
            <p className="text-center text-[#00000099] mt-3">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center justify-center mt-4 lg:mt-0 ">
              <Image src={visa} alt="visa-card" />
              <Image src={idk} alt="idk" />
              <Image src={paypal} alt="paypal" />
              <Image src={applepay} alt="apple pay" />
              <Image src={google} alt="google" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
