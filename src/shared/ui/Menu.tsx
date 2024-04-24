import { RoutePath } from '@/app/providers/router/config'
import { ListItem } from '@/shared/ui/list-item'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/shared/ui/navigation-menu'

export function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        <NavigationMenuItem>
          <ListItem href={RoutePath.home} title="Главная" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ListItem href={RoutePath.courses} title="Курсы" />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ListItem href={RoutePath.account} title="Личный кабинет" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
