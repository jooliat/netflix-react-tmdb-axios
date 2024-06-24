import React, { useEffect} from 'react';
import "./Banner.css";
import axios from '../../axios';
import {API_KEY,imgBaseUrl} from '../../constants/constants';

function Banner() {
  
  const [movie, setMovie] = React.useState({}); 
  
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
     // console.log(response.data.results)
      //get random int
      let num = Math.floor(Math.random() * 10 + 1)
      //console.log(num)
      setMovie(response.data.results[num])

    });
  }, [])

  return (
    <div  className="banner"
    style={{
      backgroundImage: `url(${movie ? imgBaseUrl + movie.backdrop_path : ""})`
    }}>
   
        <div className='content'>
       
            <h1 className='title'>{movie ? movie.title : title}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h2 className='description'>{movie ? movie.overview : 'overview'}</h2>
        </div>
        <div className='fade_bottom'></div>
        
      
    </div>
  )
}

export default Banner
