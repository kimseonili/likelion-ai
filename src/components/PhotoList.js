import '../App.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Photo from './Photo'

function PhotoList({url}){
  const [photos, setPhotos] =useState([])
  useEffect(()=>{
    
    axios.post(
      'https://owosuvrzuj.execute-api.ap-northeast-2.amazonaws.com/first/test', 
      {
        headers : {
          'Access-Control-Allow-Origin' : '*'
      },
      body : {
        "id" : "app_photo",
      }
    }
    ).then( data =>{

      data.data.map((d)=>{
        setPhotos(photos=>[...photos, d[1]])
      })
    })
},[])
    
    return(
        <>
            <div className="row">
        <div className="title">Photo</div>
          <div>
        {photos.map((photo) => {
            return(
              <>
              <Photo url={photo}></Photo>
          </>
            )
          })}
        </div>
      </div>
</>
    )
}

export default PhotoList;