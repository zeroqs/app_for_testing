import { Link } from 'react-router-dom'

import { RoutePath } from '@/app/providers/router/config'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { Menu } from '@/shared/ui/Menu'

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 max-w-7xl m-auto">
      <Link to={RoutePath.home}>Цифровой класс</Link>
      <Menu />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer">Помощь</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Выйти</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
