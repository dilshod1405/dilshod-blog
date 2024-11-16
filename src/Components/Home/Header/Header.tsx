import './header.scss'
import links from '../../../Constants/links'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <div className='header'>
        <h2>Dilshod Normurodov</h2>

        <div id="navbar">
            <ul>
            {links.map((link) => (
                <li key={link.name}><Link to={link.link} className='link'>{link.name}</Link></li>
            ))}
            </ul>
        </div>
      </div>
    )
  }

export default Header;
