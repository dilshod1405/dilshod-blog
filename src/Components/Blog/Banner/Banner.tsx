import React, { useState, useEffect } from 'react'
import './banner.scss'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

const Banner:React.FC = () => {
  const [data, setData, ] = useState<{content: string, photo: string, title: string, created_at: string}>({
    content: '',
    photo: '',
    title: '',
    created_at: '',
  });

    useEffect(() => {
      const url = "https://dilshod1405.pythonanywhere.com/blogs/posts/"; 
      axios.get(url)
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, []);

    console.log(data);

    const url = "https://dilshod1405.pythonanywhere.com/";
    return (
      <div className='banner'>
        <div className="content">
        <ImageList sx={{ width: '1000px', height: 'auto', margin: 'auto' }} cols={3} className='image'>
          
          {Array.isArray(data) && data.map((item) => (
            <ImageListItem key={item} data-aos="fade-in" data-aos-duration = "2000" className='image'>
              <img
                srcSet={`${url}${item}?w=248&fit=crop&auto=format&dpr=2 x`}
                src={`${url}${item.photo}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={`${item.title} (${item.created_at})`}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`${item.title}`}
                  >
                  </IconButton>
                }
              />
              
            </ImageListItem>
          ))}
        </ImageList>
        </div>
      </div>
    )
  }

  export default Banner