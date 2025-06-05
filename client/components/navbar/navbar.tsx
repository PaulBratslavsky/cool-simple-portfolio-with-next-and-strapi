import { Navigation, Logo, SocialLinks } from "@/types";

import { LogoLink } from "@/components/navbar/logo-link";
import { NavMenu } from "@/components/navbar/nav-menu";
import { NavigationSheet } from "@/components/navbar/navigation-sheet";
import Link from "next/link";
import { IconSelector } from "./icon-selector";
import { ThemeToggle } from "../theme-toggle";

interface NavbarProps {
  logo: Logo;
  navigation: Navigation;
  socialLinks: SocialLinks;
}

export function Navbar({ logo, navigation, socialLinks }: NavbarProps) {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border dark:border-slate-700/70 max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        <LogoLink image={logo.image} link={logo.link} />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" navItems={navigation.navItems} />

        <div className="flex items-center gap-2">
          {socialLinks && socialLinks.socialLink.map(({ href, label, isExternal }, index) => (
            <Link href={href} target={isExternal ? "_blank" : "_self"} key={index}>
              {IconSelector(label)}
            </Link>
          ))}
          

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet logo={logo} navItems={navigation.navItems} />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
