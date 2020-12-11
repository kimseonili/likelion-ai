import './Album.css'


function Album({name, photo, title, date}){

    return(
        <>
        <div className="album">
            <div className="photo"><img className="albumart" src={photo}/></div> 
            <div className="albumInfo"><div>{name}</div><div>{title}</div><br></br><div>{date}</div></div>
        </div>
</>
    )
}

export default Album;