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

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex p-4 relative items-center justify-between">
      <span className="font-black text-3xl text-green-400 cursor-pointer">
        Logo
      </span>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link to="/home">Home</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Aricles</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Button
        variant="outline"
        className="border-green-600 border-2 text-green-600 hover:bg-green-600 hover:text-white"
      >
        Contac Us
      </Button>
    </nav>
  );
}
