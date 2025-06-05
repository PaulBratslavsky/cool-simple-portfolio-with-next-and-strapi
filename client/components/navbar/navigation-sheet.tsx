import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLink, Logo } from "@/types";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { LogoLink } from "@/components/navbar/logo-link";
import { NavMenu } from "@/components/navbar/nav-menu";

interface NavigationSheetProps {
  logo: Logo;
  navItems: NavLink[];
}

export function NavigationSheet({
  logo,
  navItems,
}: NavigationSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-3 px-6">
        <VisuallyHidden asChild>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden>
        <LogoLink image={logo.image} link={logo.link} />
        <NavMenu navItems={navItems} className="mt-12" useSheetClose />
      </SheetContent>
    </Sheet>
  );
}
