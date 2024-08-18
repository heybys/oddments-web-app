import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Link} from "@radix-ui/react-navigation-menu";
import {cva} from "class-variance-authority";

const globalNavigationWrapperStyle = cva('flex justify-center');

export function GlobalNavigation() {
  return (
      <div className={globalNavigationWrapperStyle()}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={"/"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href={"/food"}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Food
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
  )
}
