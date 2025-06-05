import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { LogoLink } from "./logo-link";
import { NavLink, Logo, Navigation, SocialLinks } from "@/types";

interface FooterProps {
  logo: Logo;
  navigation: Navigation;
  socialLinks: SocialLinks;
  text: string;
}

import { IconSelector } from "./icon-selector";

export function Footer({ logo, navigation, socialLinks, text }: FooterProps) {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <LogoLink image={logo.image} link={logo.link} />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {navigation.navItems.map(({ href, label }: NavLink) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} {text}
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            {socialLinks &&
              socialLinks.socialLink.map(({ href, label, isExternal }: NavLink, index: number) => (
                <Link
                  href={href}
                  target={isExternal ? "_blank" : "_self"}
                  key={index}
                >
                  {IconSelector(label)}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
