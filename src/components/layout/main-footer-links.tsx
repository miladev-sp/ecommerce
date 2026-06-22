import Link from "next/link";

type Content = {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  heading: string;
};
type Props = {
  content: Content;
};

export default function FooterLinks({ content }: Props) {
  return (
    <div className="lg:justify-self-end">
      <h2 className="font-satoshi font-medium uppercase tracking-[3px]">
        {content.heading}
      </h2>
      <ul className="mt-2.5 flex flex-col gap-3 text-[#00000099] font-satoshi font-normal text-[14px]">
        <li>
          <Link href={"/"} className="hover:text-black  transition-all">
            {content.link1}
          </Link>
        </li>
        <li>
          <Link href={"/"} className="hover:text-black  transition-all">
            {content.link2}
          </Link>
        </li>
        <li>
          <Link href={"/"} className="hover:text-black  transition-all">
            {content.link3}
          </Link>
        </li>
        <li>
          <Link href={"/"} className="hover:text-black  transition-all">
            {content.link4}
          </Link>
        </li>
      </ul>
    </div>
  );
}
