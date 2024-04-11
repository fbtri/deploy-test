import { NAV_LINKS } from "@/Constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-containter relative z-30 py-5">

<Link href="/">
<Image src="/Mac App Icon.png" alt="logo" width={40} height={15} />
</Link>


<ul className="hidden h-full gap-12 lg:flex">
    {NAV_LINKS.map((link) => (
      <Link href={link.href} key={link.key} className="recular-12 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
        {link.label}
      </Link>
    ))}
</ul>

<div className="lg:flexCenter hidden">
<Button
    type="button"
    title="Login"
    icon="/Mac App IconW.png"
    variant="btn_dark_green"
  />
</div>

<Image
src="/N.jpeg"
alt="menu"
width="40"
height="40"
className= 'inline-block cursor-pointer lg:hidden'>
</Image>
    </nav>
  )
}

export default Navbar
