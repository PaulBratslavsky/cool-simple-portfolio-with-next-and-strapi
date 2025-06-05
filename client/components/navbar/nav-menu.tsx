import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavLink } from "@/types";

export function NavMenu({
  className,
  navItems,
  useSheetClose,
  ...props
}: {
  className: string;
  navItems: NavLink[];
  useSheetClose?: boolean;
}) {
  const LinkWrapper = useSheetClose ? SheetClose : React.Fragment;
  const linkWrapperProps = useSheetClose ? { asChild: true } : {};

  return (
    <NavigationMenu
      className={cn("data-[orientation=vertical]:items-start", className)}
      orientation={useSheetClose ? "vertical" : "horizontal"}
      {...props}
    >
      <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:space-y-2">
        {navItems.map((item: NavLink, index: number) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink asChild>
              <LinkWrapper {...linkWrapperProps}>
                <Link href={item.href} className="block py-2">{item.label}</Link>
              </LinkWrapper>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
