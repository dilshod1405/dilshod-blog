import { Component } from 'react'
import './home.scss'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Professions from './Professions/Professions'
import Info from './Info/Info'
import Contact from '../Contact/Contact'


export default class Home extends Component {
  render() {
    return (
      <div className='home'>
            <Header />
            <Banner />
            <Professions />
            <Info />
            <Contact />
      </div>
    )
  }
}
