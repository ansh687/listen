import React from 'react';
import Playlist from './Playlist.js'
import './App.css';

function App() {
  return (
    <div className='Window'> 
      <div className='Container'>
          <img src={require('./london.png')} className='Image' /> 
      </div>
      <div className='Playlist'>
              <Playlist className='playlistElement' /> 
      </div> 
      <div className='Logo'> 
        hhear.me
      </div> 
    </div> 
  );
}

export default App;
