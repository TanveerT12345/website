import React from "react";
import {
  Navbar as MTNavbar,
  IconButton,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Link href={href}>
        <Typography
          as="span"
          variant="medium"
          className="font-medium hover:shadow-lg transition-shadow"
        >
          {children}
        </Typography>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className={`fixed top-0 z-50 ${isScrolling ? 'border-b border-gray-700' : 'border-0'}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography variant="h6" color={isScrolling ? "blue-gray" : "white"}>
          Kappa Theta Pi
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about-us">About</NavItem>
          <NavItem href="/members">Members</NavItem>
          <NavItem href="/recruitment">Recruitment</NavItem>
          <NavItem href="/faq">FAQ</NavItem>
        </ul>
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex gap-2">
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <a href="https://www.linkedin.com/company/ktp-unc/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin text-base"></i>
              </a>
            </IconButton>
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <a href="https://www.instagram.com/ktpunc/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram text-base"></i>
              </a>
            </IconButton>
            <IconButton
              variant="text"
              color={isScrolling ? "gray" : "white"}
              size="sm"
            >
              <a href="mailto:uncktp@gmail.com">
                <i className="fa-solid fa-envelope text-base"></i>
              </a>
            </IconButton>
          </div>
          
          {/* <Button
            variant="gradient"
            size="sm"
            className={`ml-4 ${isScrolling ? "bg-blue-500" : "bg-blue-700"} text-white`}
            onClick={() => window.open('https://forms.gle/your-google-form-id', '_blank')}
          >
            Apply
          </Button> */}
        
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm"
            className="lg:hidden"
            onClick={handleOpen}
          >
            <i className={`fa ${open ? 'fa-times' : 'fa-bars'} text-base`}></i>
          </IconButton>
        </div>
      </div>
      {open && (
        <ul className="flex flex-col items-center gap-4 lg:hidden mt-4">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about-us">About</NavItem>
          <NavItem href="/members">Members</NavItem>
          <NavItem href="/recruitment">Recruitment</NavItem>
          <NavItem href="/faq">FAQ</NavItem>
        </ul>
      )}
    </MTNavbar>
  );
}

export default Navbar;