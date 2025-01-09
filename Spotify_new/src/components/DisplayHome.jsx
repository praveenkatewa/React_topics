// import React from 'react'
// import Navbar from './Navbar'
// import { albumsData } from '../assets/assets'
// import AlbumItem from './AlbumItem'
// import { songsData } from '../assets/assets'
// import SongItem from './SongItem'

// const DisplayHome = () => {
//   return (
//   <>
//   <Navbar/>
//   <div className='mb-4'>

//   <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
//   <div className='flex overflow-auto'>
//   {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}

//   </div>
//   </div>

//   <div className='mb-4'>

// <h1 className='my-5 font-bold text-2xl'>Today's biggest hits </h1>
// <div className='flex overflow-auto'>
// {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}

// </div>
// </div>


//   </>
//   )
// }

// export default DisplayHome



// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import { albumsData, songsData } from '../assets/assets';
// import AlbumItem from './AlbumItem';
// import SongItem from './SongItem';

// const DisplayHome = () => {
//   // State for search query
//   const [searchQuery, setSearchQuery] = useState('');
  
//   // Filter albums based on search query
//   const filteredAlbums = albumsData.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Filter songs based on search query
//   const filteredSongs = songsData.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Search bar */}
//       <div className='mb-4'>
//         <input
//           type='text'
//           value={searchQuery}
//           onChange={handleSearchChange}
//           placeholder='Search albums or songs'
//           className='p-2 w-full rounded-lg border'
//         />
//       </div>

//       {/* Featured Charts Section */}
//       <div className='mb-4'>
//         <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
//         <div className='flex overflow-auto'>
//           {filteredAlbums.length > 0 ? (
//             filteredAlbums.map((item, index) => (
//               <AlbumItem
//                 key={index}
//                 name={item.name}
//                 desc={item.desc}
//                 id={item.id}
//                 image={item.image}
//               />
//             ))
//           ) : (
//             <p>No albums found</p>
//           )}
//         </div>
//       </div>

//       {/* Today's Biggest Hits Section */}
//       <div className='mb-4'>
//         <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
//         <div className='flex overflow-auto'>
//           {filteredSongs.length > 0 ? (
//             filteredSongs.map((item, index) => (
//               <SongItem
//                 key={index}
//                 name={item.name}
//                 desc={item.desc}
//                 id={item.id}
//                 image={item.image}
//               />
//             ))
//           ) : (
//             <p>No songs found</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default DisplayHome;


import React, { useState } from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

const DisplayHome = () => {
  
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter albums based on search query
  const filteredAlbums = albumsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter songs based on search query
  const filteredSongs = songsData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Navbar />

      {/* Search bar */}
      <div className='mb-4'>
        <input
          type='text'
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder='Search albums or songs'
          className='p-2 w-full rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500'
          style={{fontSize: '16px', color: '#333', backgroundColor: '#fff',  padding: '10px', 
          }}
        />
      </div>

      {/* Featured Charts Section */}
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {filteredAlbums.length > 0 ? (
            filteredAlbums.map((item, index) => (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))
          ) : (
            <p>No albums found</p>
          )}
        </div>
      </div>

      {/* Today's Biggest Hits Section */}
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
          {filteredSongs.length > 0 ? (
            filteredSongs.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))
          ) : (
            <p>No songs found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
