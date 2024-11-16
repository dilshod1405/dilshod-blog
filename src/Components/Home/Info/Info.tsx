import './info.scss'
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ApartmentIcon from '@mui/icons-material/Apartment';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CountUpOnScroll from '../../../Contexts/CountOnScroll';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Info = () => {
    const [data, setData, ] = useState([]);
    const [data2, setData2, ] = useState([]);
  

  useEffect(() => {
    const url = "https://dilshod1405.pythonanywhere.com/it/";
    axios.get(url)
      .then((response) => setData(response.data.length))
      .catch((error) => console.log(error));
  }, []);
  

  useEffect(() => {
    const url = "https://dilshod1405.pythonanywhere.com/it/";
    axios.get(url)
      .then((response) => setData2(response.data))
      .catch((error) => console.log(error));
  }, []);

  const infos = [
    {
        icon: <CodeIcon className='icons' fontSize='large'/>,
        title: 'Frontend projects',
        number: `${data}`,
    },
    {
        icon: <StorageIcon className='icons' fontSize='large'/>,
        title: 'Backend projects',
        number: `${data2.length - 1}`,
    },
    {
        icon: <ApartmentIcon className='icons' fontSize='large'/>,
        title: 'Architectural projects',
        number: '45',
    },
    {
        icon: <DesignServicesIcon className='icons' fontSize='large'/>,
        title: 'Design projects',
        number: '70',
    },
]

    return (
      <div className='info'>
        <div className="content">
          <ul>
            {infos.map((info) => (
              <li key={info.title}>
                {info.icon}
                <h2 className='title'>{info.title}</h2>
                <p className='number'><CountUpOnScroll start={0} end={info.number} duration={3} onEnd={() => {}}/></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }


export default Info;