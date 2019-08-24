import React from 'react'
import './Playlist.css'

const Playlist = () => {
	return (
		<div className='playlistContainer'> 
			<iframe src="https://open.spotify.com/embed/playlist/5Ta18q9fdwMjgNzbPTvAGD" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" className='iframeElement'></iframe>
		</div> 			
		); 
}

export default Playlist 

