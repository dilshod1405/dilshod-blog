import { Component } from 'react'
import './banner.scss'


export default class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <div className="content">
            <div className="left">
                <h1 data-aos="fade-down" data-aos-duration = "2000">Hello, I'm a <span>Full-stack Developer</span> and an <span>Architect</span></h1>
                <div className="line" data-aos="fade-left" data-aos-duration = "1000"></div>
                <p data-aos="fade-up" data-aos-duration = "1000">My name is Dilshod. I am from Uzbekistan, but I live in South Korea. I am a full-stack developer and an architect. I have 3 years of experience in full-stack development and architecture.</p>
            </div>
            <div className="right">
                <img src="https://www.dil-shod.uz/photo.png" alt=""  data-aos-duration = "3000" className='animate__animated animate__zoomIn'/>
            </div>
        </div>
      </div>
    )
  }
}
