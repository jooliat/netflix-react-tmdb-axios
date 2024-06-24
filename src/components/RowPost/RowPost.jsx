import React,{useEffect,useState} from 'react'
import "./RowPost.css"
import axios from '../../axios';
import { imgBaseUrl,API_KEY } from '../../constants/constants';
import YouTube from 'react-youtube';

  

function RowPost(props) {
  const [movies,setMovies] = React.useState([]);

  //id for ytvideo
   const [urlId,setUrlId] = React.useState("")
  useEffect(() => {
    axios.get(props.url)
    .then(response => {
      console.log(response.data.results)  
      setMovies(response.data.results)
    })
    .catch(err=>{
      alert("network error")
    })
  }, [])
  //console.log(movies)
  
  // foryoutube video 
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 2,
    },
  };

  const handleMovieClick=(id) =>{
    //console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}`)
    .then(response=>{
      if(response.data.results.length!==0){
      //console.log(response.data)
      setUrlId(response.data.results[0].key)
      }
     //console.log(response.data.results[0].key)
      
    })
    .catch(err=>{
      alert("empty array")
    })
    

  }
  return (
    <div className='row'>
      <h2> {props.title} </h2>
      <div className="posters">
        {movies.map((movie) =>
        <img onClick={()=> handleMovieClick(movie.id)} className={props.isSmall? "smallPoster" :"poster"} src={`${imgBaseUrl+movie.backdrop_path}`}  alt={movie.name} />
        )}

      </div> 
      {urlId &&<YouTube videoId={urlId} opts={opts}/>}
       
    </div>
   

  )
}

export default RowPost;
