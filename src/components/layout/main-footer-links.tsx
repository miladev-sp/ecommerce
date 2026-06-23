import Link from "next/link";
type Props = {
  heading: string;
  links: { href: string; label: string }[];
};
export default function FooterLinks({ links, heading }: Props) {
  return (
    <div className="lg:justify-self-end">
      <h2 className="font-satoshi font-medium uppercase tracking-[3px] lg:text-[16px]">
        {heading}
      </h2>
      <ul className="mt-2.5 flex flex-col gap-3 text-[#00000099] font-satoshi font-normal text-[14px]">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="hover:text-black  transition-all text-[14px] lg:text-[16px]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
