import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {NavigationMenuLinkProps} from "@radix-ui/react-navigation-menu";
import {cva} from "class-variance-authority";
import {ModeToggle} from "@/components/mode-toggle";
import Icon from "@/components/ui/icon";
import {H3} from "@/components/ui/typography";

const globalNavigationWrapperStyle = cva('flex align-items justify-center p-3 fixed w-full');

export function GlobalNavigation() {
  return (
      <div className={globalNavigationWrapperStyle()}>
        <a href={"/"} className="flex items-center gap-3 absolute left-0 pl-3">
          <Icon name={"codesandbox"} size={40} className={'text-blue-800 dark:text-blue-700'}></Icon>
          <H3>Oddments Store</H3>
        </a>
        <NavigationMenu>
          <NavigationMenuList>
            <MenuItem href={"/food"}>
              Food
            </MenuItem>
            <MenuItem href={"/movie"}>
              Movie
            </MenuItem>
            <MenuItem href={"/post"}>
              Post
            </MenuItem>
            <MenuItem href={"/login"}>
              Login
            </MenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3 absolute right-0 pr-3">
          <ModeToggle/>
        </div>
      </div>
  )
}

function MenuItem(props: NavigationMenuLinkProps) {
  return (
      <NavigationMenuItem>
        <NavigationMenuLink {...props} className={navigationMenuTriggerStyle()}>
        </NavigationMenuLink>
      </NavigationMenuItem>
  )
}
