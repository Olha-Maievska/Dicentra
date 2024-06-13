import { FC } from 'react'
import { Link } from 'react-router-dom'

interface IFooterNavItem {
  navItem: string
  navHref: string
}

export interface IFooterNavProps {
  title: string
  nav: IFooterNavItem[]
}

const FooterNavigation: FC<IFooterNavProps> = ({ title, nav }) => {
  return (
    <div className="w-38">
      <h5 className="font-bold text-md">{title}</h5>
      <ul className="text-sm font-light mt-4">
        {nav.map((item) => (
          <li className="mb-3 last:mb-0" key={item.navItem}>
            <Link to={item.navHref}>{item.navItem}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterNavigation
