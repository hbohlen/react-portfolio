import { Link } from 'react-router-dom'
import './sidebar.scss'

import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      Hello
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img src={LogoSubtitle} alt="logo" />
      </Link>
    </div>
  )
}

export default Sidebar
