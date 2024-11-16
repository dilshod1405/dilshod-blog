import  { Component } from 'react'
import './profession.scss'
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import BrushIcon from '@mui/icons-material/Brush';
import TypingEffect from '../../../Contexts/TypingEffects';


export default class Professions extends Component {
  render() {
    return (
      <div className='profession'>
        <div className="left">
          <p className='header'>MY SERVICES</p>
          <TypingEffect text='  WHAT CAN I DO FOR YOU ?' speed={100}/>
          <div className="line"></div>
          <p className='content'>I am from Uzbekistan. I was born in Bukhara region in 2001. Now, I live in South Korea. I finished Architectural University in Tashkent in 2024. You can get more detail information about my career, my skills and my positions where I have worked by this link on the bottom.</p>
          <Button className = "cv" variant="contained" style={{backgroundColor: '#39d4ba', color: '#fff', marginTop: '2rem'}} href='cv.pdf'><FileDownloadIcon /> Download CV</Button>
        </div>
        <div className="right">
          <div className="context">
            <Box className='box1'>
              <div className="card1" data-aos="zoom-in" data-aos-duration = "2000">
                <PublicIcon className='icon' style={{color: '#39d4ba', width: '70px', height: '70px', margin: 'auto', display: 'block'}}/>
                <h4>WEB DEVELOPMENT</h4>
                <p>I can create web sites, e-commerce platforms, and other web applications.</p>
              </div>
              <div className="card2" data-aos="zoom-in" data-aos-duration = "2000">
                <ArtTrackIcon className='icon' style={{color: '#39d4ba', width: '70px', height: '70px', margin: 'auto', display: 'block'}}/>
                <h4>UX / UI DESIGN</h4>
                <p>I can make creative user interfaces for frontend and mobile applications.</p>
              </div>
            </Box>
            <Box className='box2' >
              <div className="card3" data-aos="zoom-in"  data-aos-duration = "2000">
                <ArchitectureIcon className='icon' style={{color: '#39d4ba', width: '70px', height: '70px', margin: 'auto', display: 'block'}}/>
                <h4>ARCHITECTURE</h4>
                <p>I can create architectural and constructional projects of buildings.</p>
              </div>
              <div className="card4" data-aos="zoom-in" data-aos-duration = "2000">
                <BrushIcon className='icon' style={{color: '#39d4ba', width: '70px', height: '70px', margin: 'auto', display: 'block'}}/>
                <h4>DESIGN</h4>
                <p>I can make interior & exterior and landscape design of buildings.</p>
              </div>
            </Box>
          </div>
        </div>
      </div>
    )
  }
}
