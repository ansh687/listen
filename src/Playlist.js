import React from 'react'
import './Playlist.css'

const Playlist = () => {
	return (
		<div className='playlistContainer'> 
			<iframe src="https://open.spotify.com/embed/playlist/0oQxQo2Qng0Jii9yHMa57q" allowtransparency="true" allow="encrypted-media" className='iframeElement'></iframe>
		</div> 			
		); 
}

export default Playlist 
