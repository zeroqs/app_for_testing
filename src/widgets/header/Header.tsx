import { Link } from 'react-router-dom'

import { RoutePath } from '@/app/providers/router/config'
import { Menu } from '@/shared/ui/Menu'

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 max-w-7xl m-auto">
      <Link to={RoutePath.home}>Цифровой класс</Link>
      <Menu />

      <div />
    </header>
  )
}
