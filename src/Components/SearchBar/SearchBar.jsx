
import './SearchBar.css'
import React, { useState } from "react";



const FilterBar = (props) => {
    
    const [songFilter, setSongFilter] = useState("");
  
    function filterBar(event) {
        event.preventDefault();
        let response = props.songs.filter((songs) => {
    
        if (songs.album.includes(songFilter)) { 
            return true;
            } else if (songs.artist.includes(songFilter)) {
                return true;
            } else if (songs.title.includes(songFilter)) {
                return true;
            } else if (songs.album.includes(songFilter)) {
                return true;
            } else if (songs.release_date.includes(songFilter)) {
                return true;
            } else if (songs.genre.includes(songFilter)) {
                return true;
        }
    });

    props.setSongs(response);
    
    setSongFilter("")
        if (songFilter === "") {
    props.getAllSongs()
    }
    }

return (
    <div className='filterBar'>
        <form onSubmit={filterBar}>
        <div>
            <input
                className='songfilter'
                type="text"
                value={songFilter}
                onChange={(e) =>  setSongFilter(e.target.value)}
                placeholder="Find Your Song!"
                />{" "}
                <button className='findsong' type="submit">FIND SONG</button>
        </div>
        </form>
    </div>
    
);
}

export default FilterBar