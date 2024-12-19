import Link from "next/link";

type NavLinkProps = {
  href: string; // `href` should be a string
  title: string; // `title` should be a string
};

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link href={href} className="block py-2 pl-3 pr-4 text-[#072B2C] ">
      {title}
    </Link>
  );        
};

export default NavLink;

