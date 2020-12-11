import Header from './Header'
import Profile from './Profile'
import AlbumList from './AlbumList'
import PhotoList from './PhotoList'

function More(){
    return(
         <div className="App">
      <Header></Header>
      <Profile></Profile>
      <AlbumList id="albumlist"></AlbumList>
      <PhotoList id="photolist"></PhotoList>
    </div>
    )
}

export default More;