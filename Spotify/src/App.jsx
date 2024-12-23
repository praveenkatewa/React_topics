import { useState } from 'react'

import './App.css'

function App() {
  const[tracks,setTracks]=useState([])
  const[keyword,setKeyword]=useState()

  const getTracks=async()=>{
    let data= await fetch(`https://v1.nocodeapi.com/praveen123456789/spotify/WtFkKlmJqpSNVPyU/search?q=${keyword}&type=track`);

    let convertedData = await data.json();
    console.log(convertedData.tracks.items);
    setTracks(convertedData.tracks.items);
   
   


  
  
  }



  return (
    <>

<nav className="navbar  navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Music-App
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
     
        <input value={keyword}
        onChange={(e)=>{setKeyword(e.target.value)}}
          className="form-control me-2 w-75"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={getTracks} className="btn btn-outline-success" >
          Search
        </button>
     
    </div>
  </div>
</nav>


<div className='container'>
  <div className='row'>
  
 

  {
    tracks.map((element)=>{
      return <div key={element.id} className='col-lg-3 col-md-6 py-2'>
       
        <div className="card" >
  <img src={element.album.images[0].url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">
     Artist:{element.album.artists[0].name}
    </p>
    <p className="card-text">
     release-Date:{element.album.release_date}
    </p>
    <audio src={element.preview_url} controls className='w-100'></audio>
   
  </div>
</div>


      </div>


    })
  }


  </div>
</div>

     
    </>
  )
}

export default App
