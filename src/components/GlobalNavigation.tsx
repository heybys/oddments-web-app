import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Link} from "@radix-ui/react-navigation-menu";

export function GlobalNavigation() {
  return (
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
  )
}
