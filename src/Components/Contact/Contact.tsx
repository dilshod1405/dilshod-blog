import { Component } from 'react'
import './contact.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

const links = [
  {
    link: "https://github.com/dilshod1405",
    icon: <GitHubIcon className='icons' fontSize='large'/>
  },
  {
    link: "https://t.me/architect_developer",
    icon: <TelegramIcon className='icons' fontSize='large'/>
  }
]
export default class Contact extends Component {
  render() {
    return (
      <div className='contact'>
        <div className="content">
          {links.map((link) => (<a href={link.link} key={link.link} style={{color: '#39d4ba'}}>{link.icon}</a>))}
        </div>
      </div>
    )
  }
}
