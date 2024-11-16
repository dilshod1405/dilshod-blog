import { Component } from 'react'
import Header from '../Home/Header/Header'
import './blog.scss'
import Banner from './Banner/Banner'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
      </div>
    )
  }
}
