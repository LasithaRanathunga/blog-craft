import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex p-4 relative items-center justify-between">
      <span className="font-black text-3xl text-green-400 cursor-pointer">
        Logo
      </span>
      <div className="md:block hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/home">Home</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Link to="/articles">Aricles</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:hidden block">
        <Sheet open={isOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
              <HiMenuAlt2 className="text-2xl" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full" side="left">
            <SheetHeader>
              <SheetTitle>
                <span className="font-black text-3xl text-green-400 cursor-pointer">
                  Logo
                </span>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className="flex flex-col text-4xl font-bold">
              <Link
                className="mb-4 hover:text-green-500"
                to="/home"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                className="mb-4 hover:text-green-500"
                to="/articles"
                onClick={() => setIsOpen(false)}
              >
                Aricles
              </Link>
              <Link
                className="mb-4 hover:text-green-500"
                to="/articles"
                onClick={() => setIsOpen(false)}
              >
                Aricles
              </Link>
              <Link
                className="mb-4 hover:text-green-500"
                to="/home"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                className="mb-4 hover:text-green-500"
                to="/home"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <Button
        variant="outline"
        className="border-green-600 border-2 text-green-600 hover:bg-green-600 hover:text-white md:block hidden"
      >
        Contac Us
      </Button>
    </nav>
  );
}
