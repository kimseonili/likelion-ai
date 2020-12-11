import '../App.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Album from './Album'



function AlbumList({url}){
    const [albums, setAlbums] = useState([])
    useEffect(()=>{
      
     
      
      axios.post(
        'https://owosuvrzuj.execute-api.ap-northeast-2.amazonaws.com/first/test', 
        {
          headers : {
            'Access-Control-Allow-Origin' : '*'
        },
        body : {
          "id" : "app_work",
        }
      }
      ).then( data =>{
      console.log(data.data)
        data.data.map((d)=>{
          setAlbums(albums=>[...albums, d])
        })
      })
  
    },[])
    return(
        <>
            <div className="row">
        <div className="title">Works</div>
      <div>
        <div className="content">
          <span>앨범</span>
        </div>
        {albums.map((album) => {
          return(
            <>
          <hr/>

        <Album name={album[2]} title={album[3]} photo={album[1]} date={album[4]}/>
        </>
          )
        })}
        </div>
      </div>
</>
    )
}

export default AlbumList;