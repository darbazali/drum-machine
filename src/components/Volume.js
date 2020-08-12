import React from 'react'

const Volume = ({volume, adjustVolume}) => {
    return (
        <input 
        id="volume"
        type="range" 
        min="0" max="1" 
        step="0.01" 
        value={volume} 
        onChange={adjustVolume} 
    />
    )
}

export default Volume
